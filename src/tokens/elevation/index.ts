import { defaultTokens } from '../default';

export const elevation = defaultTokens.elevation;

export const { sm } = elevation;

export type { ElevationTokens } from '../types';

// generate all elevation values as css variables and export them
export const generateAllElevationCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.elevation).forEach(([elevationName, value]) => {
    cssVars[`--pinnate-elevation-${elevationName}`] = value;
  });

  return cssVars;
};
