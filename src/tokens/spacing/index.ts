import { defaultTokens } from '../default';

export const spacing = defaultTokens.spacing;

export const { xxs, xs, sm, md, lg, xl, '2xl': xl2, '3xl': xl3, '4xl': xl4 } = spacing;

export type { SpacingTokens } from '../types';

// generate all spacing values as css variables and export them
export const generateAllSpacingCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.spacing).forEach(([spacingName, value]) => {
    cssVars[`--pn-space-${spacingName}`] = value;
  });

  return cssVars;
};
