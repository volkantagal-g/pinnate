import { defaultTokens } from '../default';

export const paletteColors = defaultTokens.palette;
export const colors = defaultTokens.palette;

export type { PaletteTokens, PaletteShade, PaletteScale } from '../types';

// generate all palette colors as css variables and export them
export const generateAllPaletteCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.palette).forEach(([paletteName, palette]) => {
    if (typeof palette === 'object' && palette !== null) {
      Object.entries(palette).forEach(([shade, value]) => {
        cssVars[`--pinnate-palette-${paletteName}-${shade}`] = value as string;
      });
    }
  });

  return cssVars;
};
