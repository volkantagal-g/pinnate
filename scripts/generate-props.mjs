import { writeFile, mkdir, readFile } from 'node:fs/promises';
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

  // Fallback: parse union aliases and interface if docgen produced nothing
  const firstKey = Object.keys(propsMap)[0];
  if (!firstKey || Object.keys(propsMap[firstKey]).length === 0) {
    const src = await readFile(filePath, 'utf8');
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

    const ifaceMatch = src.match(/export\s+interface\s+(\w+)Props[^{]*{([\s\S]*?)}/);
    if (ifaceMatch) {
      const compName = ifaceMatch[1].replace(/Props$/, '') || 'Component';
      const body = ifaceMatch[2];
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
      propsMap[firstKey || compName] = props;
    }
  }
  const outDir = dirname(filePath);
  const outPath = join(outDir, 'props.json');
  await mkdir(outDir, { recursive: true });
  await writeFile(outPath, JSON.stringify(propsMap, null, 2));
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
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

