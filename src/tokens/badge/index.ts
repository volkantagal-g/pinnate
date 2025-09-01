import { defaultTokens } from '../default';

export const badge = defaultTokens.badge;

export const { gray, purple, red, orange, yellow, green, teal, blue, pink } = badge;

export type { BadgeTokens, BadgeColorTokens } from '../types';

// generate all badge colors as css variables and export them
export const generateAllBadgeCSSVariables = () => {
  const cssVars: Record<string, string> = {};

  Object.entries(defaultTokens.badge).forEach(([badgeName, colors]) => {
    cssVars[`--pinnate-badge-${badgeName}-bg`] = colors.bg;
    cssVars[`--pinnate-badge-${badgeName}-fg`] = colors.fg;
  });

  return cssVars;
};
