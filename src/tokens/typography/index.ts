import { defaultTokens } from '../default';

export const typography = defaultTokens.typography;

export const { fontFamily, modalFontFamily, weights, display, text } = typography;

export type { TypographyTokens, TypographyWeightTokens, TypographyScaleTokens } from '../types';

// generate all typography values as css variables and export them
export const generateAllTypographyCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.typography).forEach(([typographyName, value]) => {
    cssVars[`--pinnate-typography-${typographyName}`] = value;
  });

  return cssVars;
};
