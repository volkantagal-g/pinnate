/**
 * @category Display Elements
 */

import React from 'react';
import s from './Line.module.scss';

export type LineVariant = 'solid' | 'dashed' | 'dotted';
export type LineColor = 'default' | 'muted' | 'brand' | 'error' | 'success' | 'warning' | 'info';
export type LineSize = 'sm' | 'md' | 'lg';

/** Line component props */
export interface LineProps {
  /** Line variant */
  variant?: LineVariant;
  /** Line color */
  color?: LineColor;
  /** Line thickness */
  size?: LineSize;
  /** Custom className */
  className?: string;
  /** Custom style */
  style?: React.CSSProperties;
}

export function Line({
  variant = 'solid',
  color = 'default',
  size = 'md',
  className,
  style,
}: LineProps): JSX.Element {
  return (
    <hr
      className={`${s.line} ${s[`variant-${variant}`]} ${s[`color-${color}`]} ${s[`size-${size}`]} ${className || ''}`}
      style={style}
    />
  );
}
