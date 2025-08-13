import React from 'react';
import { Check } from '@App/icons/Check';
import { Dot } from '@App/icons/Dot';
import s from './Badge.module.scss';

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
  permissionId?: string;
}

export function Badge({
  children,
  size = 'md',
  variant = 'filled',
  color = 'gray',
  iconPosition = 'start',
  tone = 'filled',
  permissionId,
  ...rest
}: BadgeProps) {
  const icon =
    variant === 'withDot' ? (
      <Dot className={s[`pn-badge__dot__${iconPosition}`]} size={6} />
    ) : variant === 'withCheck' ? (
      <Check className={s[`pn-badge__check__${iconPosition}`]} size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />
    ) : null;
  return (
    <span
      className={`${s.badge} ${s[`size-${size}`]} ${s[`color-${color}`]} ${s[`tone-${tone}`]} ${
        iconPosition === 'end' ? s.iconEnd : ''
      }`}
      data-korucu-id={permissionId}
      {...rest}
    >
      {iconPosition === 'start' && icon}
      <span className={s.label}>{children}</span>
      {iconPosition === 'end' && icon}
    </span>
  );
}
