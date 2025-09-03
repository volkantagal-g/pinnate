import React from 'react';
import { defaultTokens } from '../tokens/default';
import type { DesignTokens } from '../tokens/types';

export interface PinnateProviderProps {
  tokens?: Partial<DesignTokens>;
  children: React.ReactNode;
}

function toCssVars(tokens: DesignTokens) {
  const palette = tokens.palette;

  return `
    :root {
      /* radius */
      --pn-radius-xs: ${tokens.radius.xs};
      --pn-radius-sm: ${tokens.radius.sm};
      --pn-radius-md: ${tokens.radius.md};
      --pn-radius-lg: ${tokens.radius.lg};
      --pn-radius-xl: ${tokens.radius.xl};
      --pn-radius-pill: ${tokens.radius.pill};
      --pn-radius-full: ${tokens.radius.full};
      /* spacing */
      --pn-space-none: ${tokens.spacing.none};
      --pn-space-xxs: ${tokens.spacing.xxs};
      --pn-space-xs: ${tokens.spacing.xs};
      --pn-space-sm: ${tokens.spacing.sm};
      --pn-space-md: ${tokens.spacing.md};
      --pn-space-lg: ${tokens.spacing.lg};
      --pn-space-xl: ${tokens.spacing.xl};
      --pn-space-2xl: ${tokens.spacing['2xl']};
      --pn-space-3xl: ${tokens.spacing['3xl']};
      --pn-space-4xl: ${tokens.spacing['4xl']};
      --pn-space-5xl: ${tokens.spacing['5xl']};
      --pn-space-6xl: ${tokens.spacing['6xl']};
      --pn-space-7xl: ${tokens.spacing['7xl']};
      --pn-space-8xl: ${tokens.spacing['8xl']};
      --pn-space-9xl: ${tokens.spacing['9xl']};
      --pn-space-10xl: ${tokens.spacing['10xl']};
      --pn-space-11xl: ${tokens.spacing['11xl']};
      --pn-space-12xl: ${tokens.spacing['12xl']};
      --pn-space-13xl: ${tokens.spacing['13xl']};
      /* typography */
      --pn-font-family: ${tokens.typography.fontFamily};
      --pn-font-family-modal: ${tokens.typography.modalFontFamily};
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
      
      /* palette scales - gray-light */
      --pn-palette-gray-light-25: ${palette['gray-light'][25]};
      --pn-palette-gray-light-50: ${palette['gray-light'][50]};
      --pn-palette-gray-light-100: ${palette['gray-light'][100]};
      --pn-palette-gray-light-200: ${palette['gray-light'][200]};
      --pn-palette-gray-light-300: ${palette['gray-light'][300]};
      --pn-palette-gray-light-400: ${palette['gray-light'][400]};
      --pn-palette-gray-light-500: ${palette['gray-light'][500]};
      --pn-palette-gray-light-600: ${palette['gray-light'][600]};
      --pn-palette-gray-light-700: ${palette['gray-light'][700]};
      --pn-palette-gray-light-800: ${palette['gray-light'][800]};
      --pn-palette-gray-light-900: ${palette['gray-light'][900]};
      --pn-palette-gray-light-950: ${palette['gray-light'][950]};
      
      /* palette scales - gray-dark */
        --pn-palette-gray-dark-25: ${palette['gray-dark'][25]};
      --pn-palette-gray-dark-50: ${palette['gray-dark'][50]};
      --pn-palette-gray-dark-100: ${palette['gray-dark'][100]};
      --pn-palette-gray-dark-200: ${palette['gray-dark'][200]};
      --pn-palette-gray-dark-300: ${palette['gray-dark'][300]};
      --pn-palette-gray-dark-400: ${palette['gray-dark'][400]};
      --pn-palette-gray-dark-500: ${palette['gray-dark'][500]};
      --pn-palette-gray-dark-600: ${palette['gray-dark'][600]};
      --pn-palette-gray-dark-700: ${palette['gray-dark'][700]};
      --pn-palette-gray-dark-800: ${palette['gray-dark'][800]};
      --pn-palette-gray-dark-900: ${palette['gray-dark'][900]};
      --pn-palette-gray-dark-950: ${palette['gray-dark'][950]};
      
      /* palette scales - brand */
      --pn-palette-brand-25: ${palette.brand[25]};
      --pn-palette-brand-50: ${palette.brand[50]};
      --pn-palette-brand-100: ${palette.brand[100]};
      --pn-palette-brand-200: ${palette.brand[200]};
      --pn-palette-brand-300: ${palette.brand[300]};
      --pn-palette-brand-400: ${palette.brand[400]};
      --pn-palette-brand-500: ${palette.brand[500]};
      --pn-palette-brand-600: ${palette.brand[600]};
      --pn-palette-brand-700: ${palette.brand[700]};
      --pn-palette-brand-800: ${palette.brand[800]};
      --pn-palette-brand-900: ${palette.brand[900]};
      --pn-palette-brand-950: ${palette.brand[950]};
      
      /* palette scales - brand-secondary */
      --pn-palette-brand-secondary-25: ${palette['brand-secondary'][25]};
      --pn-palette-brand-secondary-50: ${palette['brand-secondary'][50]};
      --pn-palette-brand-secondary-100: ${palette['brand-secondary'][100]};
      --pn-palette-brand-secondary-200: ${palette['brand-secondary'][200]};
      --pn-palette-brand-secondary-300: ${palette['brand-secondary'][300]};
      --pn-palette-brand-secondary-400: ${palette['brand-secondary'][400]};
      --pn-palette-brand-secondary-500: ${palette['brand-secondary'][500]};
      --pn-palette-brand-secondary-600: ${palette['brand-secondary'][600]};
      --pn-palette-brand-secondary-700: ${palette['brand-secondary'][700]};
      --pn-palette-brand-secondary-800: ${palette['brand-secondary'][800]};
      --pn-palette-brand-secondary-900: ${palette['brand-secondary'][900]};
      --pn-palette-brand-secondary-950: ${palette['brand-secondary'][950]};
      
      /* palette scales - error */
      --pn-palette-error-25: ${palette.error[25]};
      --pn-palette-error-50: ${palette.error[50]};
      --pn-palette-error-100: ${palette.error[100]};
      --pn-palette-error-200: ${palette.error[200]};
      --pn-palette-error-300: ${palette.error[300]};
      --pn-palette-error-400: ${palette.error[400]};
      --pn-palette-error-500: ${palette.error[500]};
      --pn-palette-error-600: ${palette.error[600]};
      --pn-palette-error-700: ${palette.error[700]};
      --pn-palette-error-800: ${palette.error[800]};
      --pn-palette-error-900: ${palette.error[900]};
      --pn-palette-error-950: ${palette.error[950]};
      
      /* palette scales - warning */
      --pn-palette-warning-25: ${palette.warning[25]};
      --pn-palette-warning-50: ${palette.warning[50]};
      --pn-palette-warning-100: ${palette.warning[100]};
      --pn-palette-warning-200: ${palette.warning[200]};
      --pn-palette-warning-300: ${palette.warning[300]};
      --pn-palette-warning-400: ${palette.warning[400]};
      --pn-palette-warning-500: ${palette.warning[500]};
      --pn-palette-warning-600: ${palette.warning[600]};
      --pn-palette-warning-700: ${palette.warning[700]};
      --pn-palette-warning-800: ${palette.warning[800]};
      --pn-palette-warning-900: ${palette.warning[900]};
      --pn-palette-warning-950: ${palette.warning[950]};
      
      /* palette scales - success */
      --pn-palette-success-25: ${palette.success[25]};
      --pn-palette-success-50: ${palette.success[50]};
      --pn-palette-success-100: ${palette.success[100]};
      --pn-palette-success-200: ${palette.success[200]};
      --pn-palette-success-300: ${palette.success[300]};
      --pn-palette-success-400: ${palette.success[400]};
      --pn-palette-success-500: ${palette.success[500]};
      --pn-palette-success-600: ${palette.success[600]};
      --pn-palette-success-700: ${palette.success[700]};
      --pn-palette-success-800: ${palette.success[800]};
      --pn-palette-success-900: ${palette.success[900]};
      --pn-palette-success-950: ${palette.success[950]};
      
      /* palette scales - blue */
      --pn-palette-blue-25: ${palette.blue[25]};
      --pn-palette-blue-50: ${palette.blue[50]};
      --pn-palette-blue-100: ${palette.blue[100]};
      --pn-palette-blue-200: ${palette.blue[200]};
      --pn-palette-blue-300: ${palette.blue[300]};
      --pn-palette-blue-400: ${palette.blue[400]};
      --pn-palette-blue-500: ${palette.blue[500]};
      --pn-palette-blue-600: ${palette.blue[600]};
      --pn-palette-blue-700: ${palette.blue[700]};
      --pn-palette-blue-800: ${palette.blue[800]};
      --pn-palette-blue-900: ${palette.blue[900]};
      --pn-palette-blue-950: ${palette.blue[950]};
      
      /* palette scales - pink */
      --pn-palette-pink-25: ${palette.pink[25]};
      --pn-palette-pink-50: ${palette.pink[50]};
      --pn-palette-pink-100: ${palette.pink[100]};
      --pn-palette-pink-200: ${palette.pink[200]};
      --pn-palette-pink-300: ${palette.pink[300]};
      --pn-palette-pink-400: ${palette.pink[400]};
      --pn-palette-pink-500: ${palette.pink[500]};
      --pn-palette-pink-600: ${palette.pink[600]};
      --pn-palette-pink-700: ${palette.pink[700]};
      --pn-palette-pink-800: ${palette.pink[800]};
      --pn-palette-pink-900: ${palette.pink[900]};
      --pn-palette-pink-950: ${palette.pink[950]};
      
      /* palette scales - teal */
      --pn-palette-teal-25: ${palette.teal[25]};
      --pn-palette-teal-50: ${palette.teal[50]};
      --pn-palette-teal-100: ${palette.teal[100]};
      --pn-palette-teal-200: ${palette.teal[200]};
      --pn-palette-teal-300: ${palette.teal[300]};
      --pn-palette-teal-400: ${palette.teal[400]};
      --pn-palette-teal-500: ${palette.teal[500]};
      --pn-palette-teal-600: ${palette.teal[600]};
      --pn-palette-teal-700: ${palette.teal[700]};
      --pn-palette-teal-800: ${palette.teal[800]};
      --pn-palette-teal-900: ${palette.teal[900]};
      --pn-palette-teal-950: ${palette.teal[950]};
    }
  `;
}

export function PinnateProvider({ tokens, children }: PinnateProviderProps): JSX.Element {
  const merged: DesignTokens = {
    ...defaultTokens,
    ...tokens,
    radius: { ...defaultTokens.radius, ...(tokens?.radius ?? {}) },
    spacing: { ...defaultTokens.spacing, ...(tokens?.spacing ?? {}) },
    typography: { ...defaultTokens.typography, ...(tokens?.typography ?? {}) },
    elevation: { ...defaultTokens.elevation, ...(tokens?.elevation ?? {}) },
    badge: { ...defaultTokens.badge, ...(tokens?.badge ?? {}) },
    palette: { ...defaultTokens.palette, ...(tokens?.palette ?? {}) },
  } as DesignTokens;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{toCssVars(merged)}</style>
      {children}
    </>
  );
}
