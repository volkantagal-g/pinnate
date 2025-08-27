import React from 'react';
import s from './Paragraph.module.scss';

/**
 * @category Display
 */

export interface ParagraphProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'> {
  /** Paragraph content */
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
  /** Maximum lines before truncation */
  maxLines?: number;
  /** Interactive paragraph (clickable) */
  interactive?: boolean;
  /** Hover effect */
  hover?: 'none' | 'underline' | 'color' | 'scale';
  /** Semantic HTML element */
  as?: 'p' | 'div' | 'span' | 'article' | 'section';
  /** Custom font family override */
  fontFamily?: 'default' | 'modal';
  /** Spacing between paragraphs */
  spacing?: 'none' | 'tight' | 'normal' | 'loose';
  /** Indent first line */
  indent?: boolean;
  /** Leading (line height) adjustment */
  leading?: 'tight' | 'normal' | 'loose';
}

export function Paragraph({
  children,
  variant = 'text-md',
  weight = 'regular',
  color = 'default',
  align = 'left',
  transform = 'none',
  decoration = 'none',
  maxLines,
  interactive = false,
  hover = 'none',
  as = 'p',
  fontFamily = 'default',
  spacing = 'normal',
  indent = false,
  leading = 'normal',
  className,
  style,
  ...props
}: ParagraphProps): React.ReactNode {
  const paragraphClasses = [
    s.paragraph,
    s[`variant-${variant}`],
    s[`weight-${weight}`],
    s[`color-${color}`],
    s[`align-${align}`],
    s[`transform-${transform}`],
    s[`decoration-${decoration}`],
    s[`font-${fontFamily}`],
    s[`spacing-${spacing}`],
    s[`leading-${leading}`],
    indent && s.indent,
    interactive && s.interactive,
    s[`hover-${hover}`],
    className
  ].filter(Boolean).join(' ');

  const paragraphStyle: React.CSSProperties = {
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
    className: paragraphClasses,
    style: paragraphStyle,
    ...props
  };

  switch (as) {
    case 'div':
      return <div {...commonProps}>{children}</div>;
    case 'span':
      return <span {...commonProps}>{children}</span>;
    case 'article':
      return <article {...commonProps}>{children}</article>;
    case 'section':
      return <section {...commonProps}>{children}</section>;
    default:
      return <p {...commonProps}>{children}</p>;
  }
}
