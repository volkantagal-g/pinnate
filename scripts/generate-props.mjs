import { writeFile, mkdir, readdir, readFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { withCustomConfig } from 'react-docgen-typescript';

// Scans src/components/**/ for *.tsx and writes a props.json next to component entry

const parser = withCustomConfig('tsconfig.docgen.json', {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  propFilter: (prop) => {
    // Keep only locally-authored props. Drop DOM/React inherited ones.
    if (!prop.parent) return true;
    const fileName = prop.parent.fileName || '';
    return fileName.includes('/src/');
  },
});

// Build a global map of exported string-union aliases across the repo (e.g., ButtonVariant, ButtonSize)
async function buildGlobalAliasUnions(files) {
  const map = new Map();
  for (const f of files) {
    const src = await readFile(f, 'utf8');
    const aliasMatches = [...src.matchAll(/export\s+type\s+(\w+)\s*=\s*([^;]+);/g)];
    for (const m of aliasMatches) {
      const name = m[1];
      const rhs = m[2];
      if (rhs.includes("'")) {
        const options = rhs
          .split('|')
          .map((s) => s.trim())
          .map((s) => s.replace(/^'|'$/g, ''));
        map.set(name, options);
      }
    }
  }
  return map;
}

function parseInlineObject(body, aliasUnions) {
  // body like "{ label: string; variant?: ButtonVariant; size?: ButtonSize }" or without outer braces
  const inner = body.trim().startsWith('{') ? body.trim().slice(1, -1) : body;
  const lines = inner.split(/\n|;/).map((l) => l.trim()).filter(Boolean);
  const fields = {};
  for (const line of lines) {
    const m = line.match(/^(\w+)\??:\s*([^<]+?)(\s*\|[^;]+)?$/);
    if (!m) continue;
    const name = m[1];
    const typeRaw = (m[2] + (m[3] || '')).trim();
    let type = typeRaw;
    let options;
    let field;
    if (typeRaw.startsWith('{')) {
      field = { type: 'object', fields: parseInlineObject(typeRaw, aliasUnions) };
    } else if (typeRaw.includes("'")) {
      options = typeRaw.split('|').map((s) => s.trim()).map((s) => s.replace(/^'|'$/g, ''));
      field = { type: 'select', options };
    } else if (aliasUnions.has(typeRaw)) {
      options = aliasUnions.get(typeRaw);
      field = { type: 'select', options };
    } else {
      field = { type };
    }
    fields[name] = field;
  }
  return fields;
}

async function generateForFile(filePath, globalAliasUnions) {
  const info = parser.parse(filePath);
  const propsMap = {};
  
  // First, try to get props from react-docgen-typescript
  if (info.length) {
    for (const comp of info) {
      const props = {};
      Object.entries(comp.props ?? {}).forEach(([propName, meta]) => {
        const isUnion = meta.type?.name?.includes('|');
        const options = isUnion
          ? meta.type.name.split('|').map((s) => s.trim().replace(/^"|"$/g, ''))
          : undefined;
        props[propName] = {
          type: options ? 'select' : meta.type?.name ?? 'unknown',
          options,
          required: meta.required ?? false,
          description: meta.description ?? '',
          defaultValue: meta.defaultValue?.value ?? undefined,
        };
      });
      propsMap[comp.displayName] = props;
    }
  }

  // If react-docgen-typescript didn't produce anything, or if we want to enhance it,
  // parse the TypeScript interfaces manually
  const src = await readFile(filePath, 'utf8');
  
  // Parse union aliases
  const aliasMatches = [...src.matchAll(/export\s+type\s+(\w+)\s*=\s*([^;]+);/g)];
  const aliasUnions = new Map(globalAliasUnions);
  for (const m of aliasMatches) {
    const name = m[1];
    const rhs = m[2];
    if (rhs.includes("'")) {
      const options = rhs
        .split('|')
        .map((s) => s.trim())
        .map((s) => s.replace(/^'|'$/g, ''));
      aliasUnions.set(name, options);
    }
  }

  // Parse all exported interfaces in file
  const interfaces = new Map();
  const ifaceIter = src.matchAll(/export\s+interface\s+(\w+)\s*{([\s\S]*?)}/g);
  for (const m of ifaceIter) {
    const name = m[1];
    const body = m[2];
    interfaces.set(name, parseInlineObject(body, aliasUnions));
  }

  // Parse Props interfaces and enhance existing props
  const propsInterfaces = src.matchAll(/export\s+interface\s+(\w+)Props[^{]*{([\s\S]*?)}/g);
  for (const match of propsInterfaces) {
    const interfaceName = match[1];
    const body = match[2];
    const compName = interfaceName.replace(/Props$/, '') || 'Component';
    
    // Parse the interface body
    const lines = body
      .split(/\n|;/)
      .map((l) => l.trim())
      .filter(Boolean);
    
    const props = {};
    for (const line of lines) {
      const m = line.match(/^(\w+)\??:\s*([^<]+?)(\s*\|[^;]+)?$/);
      if (!m) continue;
      const name = m[1];
      const typeRaw = (m[2] + (m[3] || '')).trim();
      
      if (typeRaw.startsWith('{')) {
        props[name] = { type: 'object', fields: parseInlineObject(typeRaw, aliasUnions) };
      } else if (interfaces.has(typeRaw)) {
        props[name] = { type: 'object', fields: interfaces.get(typeRaw) };
      } else if (typeRaw.includes("'")) {
        const options = typeRaw.split('|').map((s) => s.trim()).map((s) => s.replace(/^'|'$/g, ''));
        props[name] = { type: 'select', options };
      } else if (aliasUnions.has(typeRaw)) {
        props[name] = { type: 'select', options: aliasUnions.get(typeRaw) };
      } else {
        props[name] = { type: typeRaw };
      }
    }
    
    // If we already have props for this component, merge them
    if (propsMap[compName]) {
      Object.assign(propsMap[compName], props);
    } else {
      propsMap[compName] = props;
    }
  }
  
  const outDir = dirname(filePath);
  const outPath = join(outDir, 'props.json');
  await mkdir(outDir, { recursive: true });
  await writeFile(outPath, JSON.stringify(propsMap, null, 2));
}

async function findExtendedProps(componentName, all) {
  const extendedProps = {};
  
  // Define known component relationships
  const componentRelations = {
    'SelectGroup': ['Select'],
    'InputGroup': ['Input'],
    'TextboxGroup': ['Textbox'],
    'CheckboxGroup': ['Checkbox']
  };
  
  const relatedComponents = componentRelations[componentName] || [];
  
  // First, get props from related components in the all object
  for (const relatedName of relatedComponents) {
    if (all[relatedName]) {
      const relatedProps = all[relatedName];
      for (const [propName, propMeta] of Object.entries(relatedProps)) {
        if (!extendedProps[propName]) {
          extendedProps[propName] = propMeta.type;
        }
      }
    }
  }
  
  // Then, try to find extended props from TypeScript interface definitions
  try {
    const componentSourcePath = await findComponentFile(componentName);
    if (componentSourcePath) {
      const componentSource = await readFile(componentSourcePath, 'utf8');
      
      // Look for interface extends patterns
      const extendsMatches = componentSource.matchAll(/interface\s+\w+Props\s+extends\s+([^{]+)\s*{/g);
      
      for (const match of extendsMatches) {
        const extendsPart = match[1].trim();
        
        // Parse the extends part (e.g., "Omit<CheckboxProps, 'aria-describedby'>")
        if (extendsPart.includes('Props')) {
          // Extract the base component name (e.g., "Checkbox" from "CheckboxProps")
          const baseComponentMatch = extendsPart.match(/(\w+)Props/);
          if (baseComponentMatch) {
            const baseComponentName = baseComponentMatch[1];
            
            // If we have props for the base component, add them
            if (all[baseComponentName]) {
              const baseProps = all[baseComponentName];
              for (const [propName, propMeta] of Object.entries(baseProps)) {
                if (!extendedProps[propName]) {
                  extendedProps[propName] = propMeta.type;
                }
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.warn(`Failed to parse extended props for ${componentName}:`, error.message);
  }
  
  return extendedProps;
}

/**
 * @param {string} componentName
 * @param {string} [baseDir]
 * @returns {Promise<string|null>}
 */
async function findComponentFile(componentName, baseDir = join(process.cwd(), 'src/components')) {
  const dirs = await readdir(baseDir, { withFileTypes: true });

  for (const dirent of dirs) {
    const fullPath = join(baseDir, dirent.name);

    if (dirent.isDirectory()) {
      const candidatePath = join(fullPath, `${componentName}.tsx`);
      const exists = await access(candidatePath).then(() => true).catch(() => false);
      if (exists) {
        return candidatePath;
      }

      // Alt klasörlerde aramaya devam et
      const nested = await findComponentFile(componentName, fullPath);
      if (nested) return nested;
    }
  }

  return null;
}

/**
 * @param {Object} all
 */
async function generateComponentMetadata(all) {
  const components = [];
  
  for (const [componentName, props] of Object.entries(all)) {
    const componentProps = {};
    const initialValues = {};
    
    // First, add the component's own props
    for (const [propName, propMeta] of Object.entries(props)) {
      if (propMeta.type === 'select' && propMeta.options) {
        componentProps[propName] = propMeta.options.join(' | ');
        initialValues[propName] = propMeta.options[0] || null;
      } else if (propMeta.type === 'object') {
        componentProps[propName] = 'object';
        initialValues[propName] = {};
      } else {
        componentProps[propName] = propMeta.type;
        
        // Generate sensible initial values
        switch (propMeta.type) {
          case 'string':
            initialValues[propName] = componentName;
            break;
          case 'boolean':
            initialValues[propName] = false;
            break;
          case 'number':
            initialValues[propName] = 0;
            break;
          case 'React.ReactNode':
            initialValues[propName] = null;
            break;
          default:
            initialValues[propName] = null;
        }
      }
    }
    
    // Check for extended props from other components
    const extendedProps = await findExtendedProps(componentName, all);
    for (const [propName, propType] of Object.entries(extendedProps)) {
      if (!componentProps[propName]) {
        componentProps[propName] = propType;
        // Generate initial values for extended props
        switch (propType) {
          case 'string':
            initialValues[propName] = componentName;
            break;
          case 'boolean':
            initialValues[propName] = false;
            break;
          case 'number':
            initialValues[propName] = 0;
            break;
          case 'React.ReactNode':
            initialValues[propName] = null;
            break;
          default:
            initialValues[propName] = null;
        }
      }
    }
    
    // Get category from component's own definition or fallback to default
    let category = 'Components';
    let exportMatch = false;

    const componentSourcePath = await findComponentFile(componentName);

    if (componentSourcePath) {
      const componentSource = await readFile(componentSourcePath, 'utf8');
      const categoryMatch = componentSource.match(/@category\s+([^\n\r]+)/);
      exportMatch = !!componentSource.match(/@export\s+([^\n\r]+)/);

      console.log('Bulunan component:', componentName);

      if (categoryMatch) {
        category = categoryMatch[1].trim();
      }
    }
    
    // Special handling for common props
    if (componentProps.label && componentName !== 'FormLabel') {
      initialValues.label = componentName;
    }
    if (componentProps.variant) {
      const variants = componentProps.variant.split(' | ');
      initialValues.variant = variants.includes('primary') ? 'primary' : variants[0];
    }
    if (componentProps.size) {
      const sizes = componentProps.size.split(' | ');
      initialValues.size = sizes.includes('md') ? 'md' : sizes[0];
    }
    if (componentProps.children && componentName !== 'PinnateProvider') {
      initialValues.children = componentName;
    }
    
    if (!exportMatch) {
      components.push({
        name: componentName,
        description: `${componentName} component`,
        category,
        props: componentProps,
        initialValues,
        type: 'component'
      });
    }
  }
  
  return components;
}


async function main() {
  const { globby } = await import('globby');
  const files = await globby([
    'src/components/**/*.tsx',
    '!src/components/**/*.stories.tsx',
    '!src/components/**/*.test.tsx',
    '!src/components/**/*.spec.tsx',
  ]);
  const globalAliasUnions = await buildGlobalAliasUnions(files);
  await Promise.all(files.map((f) => generateForFile(f, globalAliasUnions)));
  
  // Also produce a registry index
  const registry = {};
  for (const file of files) {
    const dir = dirname(file);
    registry[dir] = join(dir, 'props.json');
  }
  await writeFile('dist/props-registry.json', JSON.stringify(registry, null, 2));

  // Also emit a flattened dist/props.json and per-component copies under dist/props/
  const all = {};
  for (const [dir, rel] of Object.entries(registry)) {
    try {
      const json = JSON.parse(await readFile(rel, 'utf8'));
      Object.assign(all, json);
    } catch {}
  }
  await mkdir('dist/props', { recursive: true });
  await writeFile('dist/props.json', JSON.stringify(all, null, 2));
  for (const [comp, schema] of Object.entries(all)) {
    await writeFile(`dist/props/${comp}.json`, JSON.stringify(schema, null, 2));
  }
  
  // Generate new component metadata format
  const componentMetadata = await generateComponentMetadata(all);
  await writeFile('dist/component-metadata.json', JSON.stringify(componentMetadata, null, 2));
  
  // Generate TypeScript file for metadata
  const metadataTs = `// Auto-generated file. Do not edit manually.

export interface ComponentMetadata {
  name: string;
  description: string;
  category?: string;
  props: Record<string, string>;
  initialValues: Record<string, any>;
  type: 'component';
}

export const componentMetadata: ComponentMetadata[] = ${JSON.stringify(componentMetadata, null, 2)};

export default componentMetadata;
`;
  
  await writeFile('src/metadata.ts', metadataTs);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

