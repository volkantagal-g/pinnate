import React from 'react';
import s from './CheckboxGroupBadge.module.scss';

export interface CheckboxGroupBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  disabled?: boolean;
}

export function CheckboxGroupBadge({ text, disabled, className = '', ...rest }: CheckboxGroupBadgeProps): JSX.Element {
  return (
    <span className={`${s.badge} ${disabled ? s.disabled : ''} ${className}`} {...rest}>
      <span className={s.label}>{text}</span>
    </span>
  );
}

