import { defaultTokens } from '../default';

export const radius = defaultTokens.radius;

export const { xs, sm, md, lg, xl, pill, full } = radius;

export type { RadiusTokens } from '../types';

// generate all radius values as css variables and export them
export const generateAllRadiusCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.radius).forEach(([radiusName, value]) => {
    cssVars[`--pn-radius-${radiusName}`] = value;
  });

  return cssVars;
};
