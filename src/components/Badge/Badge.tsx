import React from 'react';
import { Check } from '../../icons/Check';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeColor =
  | 'gray'
  | 'purple'
  | 'getir'
  | 'red'
  | 'orange'
  | 'green'
  | 'yellow'
  | 'riteg'
  | 'blue'
  | 'pink'
  | 'teal';
export type BadgeVariant = 'filled' | 'withDot' | 'withCheck';

/** Badge component props */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: BadgeColor;
  iconPosition?: 'start' | 'end';
  tone?: 'filled' | 'light';
}

export function Badge({
  children,
  size = 'md',
  variant = 'filled',
  color = 'gray',
  iconPosition = 'start',
  tone = 'filled',
  ...rest
}: BadgeProps) {
  const icon =
    variant === 'withDot' ? (
      <span className="pn-badge__dot" aria-hidden />
    ) : variant === 'withCheck' ? (
      <Check className="pn-badge__check" size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />
    ) : null;
  return (
    <span
      className={`pn-badge pn-badge--${size} pn-badge--${variant} pn-badge--${color} pn-badge--tone-${tone} ${
        iconPosition === 'end' ? 'pn-badge--icon-end' : ''
      }`}
      {...rest}
    >
      {iconPosition === 'start' && icon}
      <span className="pn-badge__label">{children}</span>
      {iconPosition === 'end' && icon}
      <style>{styles}</style>
    </span>
  );
}

const styles = `
.pn-badge { display: inline-flex; align-items: center; justify-content: center; border-radius: var(--pn-radius-full); padding: 0 var(--pn-space-xs); box-sizing: border-box; height: auto; border: 1px solid transparent; }
.pn-badge--tone-filled.pn-badge--gray { background: var(--pn-palette-gray-light-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--purple { background: var(--pn-palette-brand-700); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--red { background: var(--pn-palette-error-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--orange { background: var(--pn-palette-warning-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--yellow { background: var(--pn-palette-brand-secondary-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--getir { background: var(--pn-palette-brand-700); color: var(--pn-palette-brand-secondary-500); }
.pn-badge--tone-filled.pn-badge--riteg { background: var(--pn-palette-brand-secondary-500); color: var(--pn-palette-brand-700); }
.pn-badge--tone-filled.pn-badge--green { background: var(--pn-palette-success-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--teal { background: var(--pn-palette-teal-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--blue { background: var(--pn-palette-blue-500); color: var(--pn-palette-base-white); }
.pn-badge--tone-filled.pn-badge--pink { background: var(--pn-palette-pink-500); color: var(--pn-palette-base-white); }

/* light tone explicit colors per spec (bg, text, border) */
.pn-badge--tone-light.pn-badge--gray { background: #FAFAFA; color: #414651; border-color: #E9EAEB; }
.pn-badge--tone-light.pn-badge--purple { background: #F4F3FE; color: #5D3EBC; border-color: #D9D6FE; }
.pn-badge--tone-light.pn-badge--red { background: #FEF3F2; color: #B42318; border-color: #FECDCA; }
.pn-badge--tone-light.pn-badge--orange { background: #FFFAEB; color: #B54708; border-color: #FEDF89; }
.pn-badge--tone-light.pn-badge--green { background: #ECFDF3; color: #067647; border-color: #ABEFC6; }
.pn-badge--tone-light.pn-badge--yellow { background: #FEFBE8; color: #BC9E03; border-color: #FFE380; }
.pn-badge--tone-light.pn-badge--blue { background: #EFF8FF; color: #175CD3; border-color: #B2DDFF; }
.pn-badge--tone-light.pn-badge--pink { background: #FDF2FA; color: #C11574; border-color: #FCCEEE; }
.pn-badge--tone-light.pn-badge--teal { background: #F0FDF9; color: #107569; border-color: #99F6E0; }
.pn-badge__label { font-family: var(--pn-font-family); font-weight: var(--pn-font-weight-md); letter-spacing: var(--pn-typo-text-xs-track); text-align: center; }
.pn-badge--sm { height: 16px; padding: var(--pn-space-xxs) var(--pn-space-xs); }
.pn-badge--md { height: 20px; padding: var(--pn-space-xxs) var(--pn-space-sm); }
.pn-badge--lg { height: 24px; padding: var(--pn-space-xxs) var(--pn-space-md); }
.pn-badge--sm .pn-badge__label { font-size: var(--pn-typo-text-2xs-size); line-height: var(--pn-typo-text-2xs-line); }
.pn-badge--md .pn-badge__label { font-size: var(--pn-typo-text-xs-size); line-height: var(--pn-typo-text-xs-line); }
.pn-badge--lg .pn-badge__label { font-size: var(--pn-typo-text-sm-size); line-height: var(--pn-typo-text-sm-line); }
.pn-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; opacity: 0.9; margin-right: 6px; }
.pn-badge__check { display: inline-block; margin-right: 6px; color: currentColor; }
.pn-badge--icon-end .pn-badge__dot, .pn-badge--icon-end .pn-badge__check { margin-right: 0; margin-left: 6px; }
`;

