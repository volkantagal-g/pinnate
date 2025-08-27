/**
 * @category Form Elements
 */

import React from 'react';
import { Badge } from '@Components/Display/Badge/Badge';

import s from './Switch.module.scss';

export type SwitchSize = 'sm' | 'md';

/** Switch component props */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  hint?: string;
  size?: SwitchSize;
  badge?: string;
  reverse?: boolean; // if true, control on right and meta on left
  spaceBetween?: boolean; // if true, justify content space-between on wrapper
}

export function Switch({ label, hint, size = 'md', badge, reverse = false, spaceBetween = false, ...rest }: SwitchProps): JSX.Element {
  const id = React.useId();
  return (
    <div className={`${s.switch} ${s[`size-${size}`]} ${reverse ? s.reverse : ''} ${spaceBetween ? s.spaceBetween : ''}`}>
      <label htmlFor={id} className={s.control}>
        <input id={id} type="checkbox" className={s.input} {...rest} />
        <span className={s.track} />
        <span className={s.thumb} />
      </label>
      <div className={s.meta}>
        {(label || badge) && (
          <div className={s.label}>
            {label && <span className={s.text}>{label}</span>}
            {badge && <Badge size="sm">{badge}</Badge>}
          </div>
        )}
        {hint && <div className={s.hint}>{hint}</div>}
      </div>
    </div>
  );
}
