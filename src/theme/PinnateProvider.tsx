import React from 'react';
import { defaultTokens } from '../tokens/default';
import type { DesignTokens } from '../tokens/types';

export interface PinnateProviderProps {
  tokens?: Partial<DesignTokens>;
  children: React.ReactNode;
}

function toCssVars(tokens: DesignTokens) {
  const palette = tokens.palette;
  const buildScale = (name: string, scale: Record<string, string>) =>
    Object.entries(scale)
      .map(([shade, value]) => `--pn-palette-${name}-${shade}: ${value};`)
      .join('\n');

  return `
    :root {
      /* colors */
      --pn-color-primary-500: ${tokens.colors.primary500};
      --pn-color-primary-600: ${tokens.colors.primary600};
      --pn-color-text-on-primary: ${tokens.colors.textOnPrimary};
      --pn-color-danger-500: ${tokens.colors.danger500};
      --pn-color-danger-600: ${tokens.colors.danger600};
      --pn-color-text-on-danger: ${tokens.colors.textOnDanger};
      --pn-color-neutral-600: ${tokens.colors.neutral600};
      --pn-color-text-on-neutral: ${tokens.colors.textOnNeutral};
      --pn-color-text-primary: ${tokens.colors.textPrimary};
      --pn-color-text-secondary: ${tokens.colors.textSecondary};
      --pn-color-surface: ${tokens.colors.surface};
      --pn-color-border: ${tokens.colors.border};
      /* radius */
      --pn-radius-xs: ${tokens.radius.xs};
      --pn-radius-sm: ${tokens.radius.sm};
      --pn-radius-md: ${tokens.radius.md};
      --pn-radius-lg: ${tokens.radius.lg};
      --pn-radius-pill: ${tokens.radius.pill};
      --pn-radius-full: ${tokens.radius.full};
      /* spacing */
      --pn-space-2: ${tokens.spacing.x2};
      --pn-space-3: ${tokens.spacing.x3};
      --pn-space-4: ${tokens.spacing.x4};
      --pn-space-5: ${tokens.spacing.x5};
      --pn-space-xxs: ${tokens.spacing.xxs};
      --pn-space-xs: ${tokens.spacing.xs};
      --pn-space-sm: ${tokens.spacing.sm};
      --pn-space-md: ${tokens.spacing.md};
      --pn-space-lg: ${tokens.spacing.lg};
      /* typography */
      --pn-font-family: ${tokens.typography.fontFamily};
      --pn-font-weight-regular: ${tokens.typography.weights.regular};
      --pn-font-weight-md: ${tokens.typography.weights.medium};
      --pn-font-weight-sb: ${tokens.typography.weights.semiBold};
      --pn-font-weight-b: ${tokens.typography.weights.bold};

      /* display */
      --pn-typo-display-xl-size: ${tokens.typography.display.xl.size};
      --pn-typo-display-xl-line: ${tokens.typography.display.xl.line};
      --pn-typo-display-xl-track: ${tokens.typography.display.xl.tracking};
      --pn-typo-display-lg-size: ${tokens.typography.display.lg.size};
      --pn-typo-display-lg-line: ${tokens.typography.display.lg.line};
      --pn-typo-display-lg-track: ${tokens.typography.display.lg.tracking};
      --pn-typo-display-md-size: ${tokens.typography.display.md.size};
      --pn-typo-display-md-line: ${tokens.typography.display.md.line};
      --pn-typo-display-md-track: ${tokens.typography.display.md.tracking};
      --pn-typo-display-sm-size: ${tokens.typography.display.sm.size};
      --pn-typo-display-sm-line: ${tokens.typography.display.sm.line};
      --pn-typo-display-sm-track: ${tokens.typography.display.sm.tracking};
      --pn-typo-display-xs-size: ${tokens.typography.display.xs.size};
      --pn-typo-display-xs-line: ${tokens.typography.display.xs.line};
      --pn-typo-display-xs-track: ${tokens.typography.display.xs.tracking};

      /* text */
      --pn-typo-text-xl-size: ${tokens.typography.text.xl.size};
      --pn-typo-text-xl-line: ${tokens.typography.text.xl.line};
      --pn-typo-text-xl-track: ${tokens.typography.text.xl.tracking};
      --pn-typo-text-lg-size: ${tokens.typography.text.lg.size};
      --pn-typo-text-lg-line: ${tokens.typography.text.lg.line};
      --pn-typo-text-lg-track: ${tokens.typography.text.lg.tracking};
      --pn-typo-text-md-size: ${tokens.typography.text.md.size};
      --pn-typo-text-md-line: ${tokens.typography.text.md.line};
      --pn-typo-text-md-track: ${tokens.typography.text.md.tracking};
      --pn-typo-text-sm-size: ${tokens.typography.text.sm.size};
      --pn-typo-text-sm-line: ${tokens.typography.text.sm.line};
      --pn-typo-text-sm-track: ${tokens.typography.text.sm.tracking};
      --pn-typo-text-xs-size: ${tokens.typography.text.xs.size};
      --pn-typo-text-xs-line: ${tokens.typography.text.xs.line};
      --pn-typo-text-xs-track: ${tokens.typography.text.xs.tracking};
      --pn-typo-text-2xs-size: ${tokens.typography.text.x2s.size};
      --pn-typo-text-2xs-line: ${tokens.typography.text.x2s.line};
      --pn-typo-text-2xs-track: ${tokens.typography.text.x2s.tracking};
      /* shadows */
      --pn-elevation-sm: ${tokens.elevation.sm};

      /* badge palette */
      --pn-badge-gray-bg: ${tokens.badge.gray.bg};
      --pn-badge-gray-fg: ${tokens.badge.gray.fg};
      --pn-badge-purple-bg: ${tokens.badge.purple.bg};
      --pn-badge-purple-fg: ${tokens.badge.purple.fg};
      --pn-badge-red-bg: ${tokens.badge.red.bg};
      --pn-badge-red-fg: ${tokens.badge.red.fg};
      --pn-badge-orange-bg: ${tokens.badge.orange.bg};
      --pn-badge-orange-fg: ${tokens.badge.orange.fg};
      --pn-badge-yellow-bg: ${tokens.badge.yellow.bg};
      --pn-badge-yellow-fg: ${tokens.badge.yellow.fg};
      --pn-badge-green-bg: ${tokens.badge.green.bg};
      --pn-badge-green-fg: ${tokens.badge.green.fg};
      --pn-badge-teal-bg: ${tokens.badge.teal.bg};
      --pn-badge-teal-fg: ${tokens.badge.teal.fg};
      --pn-badge-blue-bg: ${tokens.badge.blue.bg};
      --pn-badge-blue-fg: ${tokens.badge.blue.fg};
      --pn-badge-pink-bg: ${tokens.badge.pink.bg};
      --pn-badge-pink-fg: ${tokens.badge.pink.fg};

      /* palette base */
      --pn-palette-base-white: ${palette.base.white};
      --pn-palette-base-black: ${palette.base.black};
      /* palette scales */
      ${buildScale('gray-light', palette.grayLight)}
      ${buildScale('gray-dark', palette.grayDark)}
      ${buildScale('brand', palette.brand)}
      ${buildScale('brand-secondary', palette.brandSecondary)}
      ${buildScale('error', palette.error)}
      ${buildScale('warning', palette.warning)}
      ${buildScale('success', palette.success)}
      ${buildScale('blue', palette.blue)}
      ${buildScale('pink', palette.pink)}
      ${buildScale('teal', palette.teal)}
    }
  `;
}

export function PinnateProvider({ tokens, children }: PinnateProviderProps) {
  const merged: DesignTokens = {
    ...defaultTokens,
    ...tokens,
    colors: { ...defaultTokens.colors, ...(tokens?.colors ?? {}) },
    radius: { ...defaultTokens.radius, ...(tokens?.radius ?? {}) },
    spacing: { ...defaultTokens.spacing, ...(tokens?.spacing ?? {}) },
    typography: { ...defaultTokens.typography, ...(tokens?.typography ?? {}) },
    elevation: { ...defaultTokens.elevation, ...(tokens?.elevation ?? {}) },
  } as DesignTokens;

  return (
    <>
      <style>{toCssVars(merged)}</style>
      {children}
    </>
  );
}

