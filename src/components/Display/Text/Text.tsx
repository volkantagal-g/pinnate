import React from 'react';
import s from './Text.module.scss';

/**
 * @category Display
 */

export interface TextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Text content */
  children: React.ReactNode;
  /** Typography variant - uses tokens from design system */
  variant?: 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | 'display-xs' | 'text-xl' | 'text-lg' | 'text-md' | 'text-sm' | 'text-xs' | 'text-x2s';
  /** Font weight */
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  /** Text color */
  color?: 'default' | 'muted' | 'brand' | 'error' | 'success' | 'warning' | 'info';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Text transform */
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  /** Text decoration */
  decoration?: 'none' | 'underline' | 'line-through' | 'overline';
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** Maximum lines before truncation */
  maxLines?: number;
  /** Interactive text (clickable) */
  interactive?: boolean;
  /** Hover effect */
  hover?: 'none' | 'underline' | 'color' | 'scale';
  /** Semantic HTML element */
  as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong' | 'em' | 'small';
  /** Custom font family override */
  fontFamily?: 'default' | 'modal';
}

export function Text({
  children,
  variant = 'text-md',
  weight = 'regular',
  color = 'default',
  align = 'left',
  transform = 'none',
  decoration = 'none',
  truncate = false,
  maxLines,
  interactive = false,
  hover = 'none',
  as = 'span',
  fontFamily = 'default',
  className,
  style,
  ...props
}: TextProps): React.ReactNode {
  const textClasses = [
    s.text,
    s[`variant-${variant}`],
    s[`weight-${weight}`],
    s[`color-${color}`],
    s[`align-${align}`],
    s[`transform-${transform}`],
    s[`decoration-${decoration}`],
    s[`font-${fontFamily}`],
    truncate && s.truncate,
    interactive && s.interactive,
    s[`hover-${hover}`],
    className
  ].filter(Boolean).join(' ');

  const textStyle: React.CSSProperties = {
    ...style,
    ...(maxLines && maxLines > 1 ? {
      display: '-webkit-box',
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    } : {})
  };

  // Render based on semantic element
  const commonProps = {
    className: textClasses,
    style: textStyle,
    ...props
  };

  switch (as) {
    case 'h1':
      return <h1 {...commonProps}>{children}</h1>;
    case 'h2':
      return <h2 {...commonProps}>{children}</h2>;
    case 'h3':
      return <h3 {...commonProps}>{children}</h3>;
    case 'h4':
      return <h4 {...commonProps}>{children}</h4>;
    case 'h5':
      return <h5 {...commonProps}>{children}</h5>;
    case 'h6':
      return <h6 {...commonProps}>{children}</h6>;
    case 'p':
      return <p {...commonProps}>{children}</p>;
    case 'div':
      return <div {...commonProps}>{children}</div>;
    case 'label':
      return <label {...commonProps}>{children}</label>;
    case 'strong':
      return <strong {...commonProps}>{children}</strong>;
    case 'em':
      return <em {...commonProps}>{children}</em>;
    case 'small':
      return <small {...commonProps}>{children}</small>;
    default:
      return <span {...commonProps}>{children}</span>;
  }
}
