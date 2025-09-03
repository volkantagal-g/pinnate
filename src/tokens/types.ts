export interface RadiusTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pill: string;
  full: string;
}

export interface SpacingTokens {
  none: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
  '10xl': string;
  '11xl': string;
  '12xl': string;
  '13xl': string;
}

export interface TypographyWeightTokens {
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
}

export interface TypographyScaleTokens {
  size: string;
  line: string;
  tracking: string; // letter-spacing
}

export interface TypographyTokens {
  fontFamily: string;
  modalFontFamily: string;
  weights: TypographyWeightTokens;
  display: {
    xl: TypographyScaleTokens;
    lg: TypographyScaleTokens;
    md: TypographyScaleTokens;
    sm: TypographyScaleTokens;
    xs: TypographyScaleTokens;
  };
  text: {
    xl: TypographyScaleTokens;
    lg: TypographyScaleTokens;
    md: TypographyScaleTokens;
    sm: TypographyScaleTokens;
    xs: TypographyScaleTokens;
    x2s: TypographyScaleTokens; // 2xs
  };
}

export interface ElevationTokens {
  sm: string;
}

export interface DesignTokens {
  radius: RadiusTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  elevation: ElevationTokens;
  badge: BadgeTokens;
  palette: PaletteTokens;
}

export interface BadgeColorTokens {
  bg: string;
  fg: string;
}

export interface BadgeTokens {
  gray: BadgeColorTokens;
  purple: BadgeColorTokens;
  red: BadgeColorTokens;
  orange: BadgeColorTokens;
  yellow: BadgeColorTokens;
  green: BadgeColorTokens;
  teal: BadgeColorTokens;
  blue: BadgeColorTokens;
  pink: BadgeColorTokens;
}

export type PaletteShade =
  | '25'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export type PaletteScale = Record<PaletteShade, string>;

export interface PaletteTokens {
  base: {
    white: string;
    black: string;
  };
  'gray-light': PaletteScale;
  grayDark: PaletteScale;
  brand: PaletteScale;
  'brand-secondary': PaletteScale;
  error: PaletteScale;
  warning: PaletteScale;
  success: PaletteScale;
  blue: PaletteScale;
  pink: PaletteScale;
  teal: PaletteScale;
}
