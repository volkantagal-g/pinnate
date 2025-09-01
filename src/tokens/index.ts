import { DesignTokens } from './types';

export { defaultTokens } from './default';
export type {
  DesignTokens,
  RadiusTokens,
  SpacingTokens,
  TypographyTokens,
  TypographyWeightTokens,
  TypographyScaleTokens,
  ElevationTokens,
  BadgeTokens,
  BadgeColorTokens,
  PaletteTokens,
  PaletteShade,
  PaletteScale,
} from './types';

// Token utilities
export const getTokenValue = (tokens: DesignTokens, path: string): string | number | undefined => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = tokens;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current;
};

export const generateCSSVariables = (tokens: DesignTokens): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Radius
  Object.entries(tokens.radius).forEach(([key, value]) => {
    cssVars[`--pinnate-radius-${key}`] = value;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars[`--pinnate-spacing-${key}`] = value;
  });

  // Typography weights
  Object.entries(tokens.typography.weights).forEach(([key, value]) => {
    cssVars[`--pinnate-font-weight-${key}`] = value.toString();
  });

  // Typography families
  cssVars['--pinnate-font-family'] = tokens.typography.fontFamily;
  cssVars['--pinnate-modal-font-family'] = tokens.typography.modalFontFamily;

  // Typography display scales
  Object.entries(tokens.typography.display).forEach(([key, scale]) => {
    cssVars[`--pinnate-display-${key}-size`] = scale.size;
    cssVars[`--pinnate-display-${key}-line-height`] = scale.line;
    cssVars[`--pinnate-display-${key}-tracking`] = scale.tracking;
  });

  // Typography text scales
  Object.entries(tokens.typography.text).forEach(([key, scale]) => {
    cssVars[`--pinnate-text-${key}-size`] = scale.size;
    cssVars[`--pinnate-text-${key}-line-height`] = scale.line;
    cssVars[`--pinnate-text-${key}-tracking`] = scale.tracking;
  });

  // Elevation
  Object.entries(tokens.elevation).forEach(([key, value]) => {
    cssVars[`--pinnate-elevation-${key}`] = value;
  });

  // Badge colors
  Object.entries(tokens.badge).forEach(([key, colors]) => {
    cssVars[`--pinnate-badge-${key}-bg`] = colors.bg;
    cssVars[`--pinnate-badge-${key}-fg`] = colors.fg;
  });

  // Palette colors
  Object.entries(tokens.palette).forEach(([paletteName, palette]) => {
    if (typeof palette === 'object' && palette !== null) {
      Object.entries(palette).forEach(([shade, value]) => {
        cssVars[`--pinnate-palette-${paletteName}-${shade}`] = value as string;
      });
    }
  });

  return cssVars;
};

// Apply CSS variables to document
export const applyCSSVariables = (tokens: DesignTokens): void => {
  const cssVars = generateCSSVariables(tokens);
  Object.entries(cssVars).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
};

// Remove CSS variables from document
export const removeCSSVariables = (): void => {
  const root = document.documentElement;
  const pinnateVars = Array.from(root.style).filter((prop) => prop.startsWith('--pinnate-'));
  pinnateVars.forEach((prop) => root.style.removeProperty(prop));
};
