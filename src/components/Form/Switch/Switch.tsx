/**
 * @category Form Elements
 */

import React from 'react';
import { InfoBadge } from '@Components/Display/InfoBadge/InfoBadge';

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
  /** Controlled state - checked value */
  checked?: boolean;
  /** Callback when switch state changes */
  onToggle?: (checked: boolean) => void;
}

export function Switch({ 
  label, 
  hint,
  className, 
  size = 'md', 
  badge, 
  reverse = false, 
  spaceBetween = false, 
  checked,
  onToggle,
  onChange,
  ...rest 
}: SwitchProps): JSX.Element {
  const id = React.useId();
  
  // Handle controlled state - checked prop takes precedence
  const isChecked = checked !== undefined ? checked : rest.checked;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    
    // Call onToggle if provided
    if (onToggle) {
      onToggle(newChecked);
    }
    
    // Call original onChange if provided
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`${s.switch} ${s[`size-${size}`]} ${reverse ? s.reverse : ''} ${spaceBetween ? s.spaceBetween : ''}`}>
      <label htmlFor={id} className={s.control}>
        <input 
          id={id} 
          type="checkbox" 
          className={s.input} 
          checked={isChecked}
          onChange={handleChange}
          {...rest} 
        />
        <span className={s.track} />
        <span className={s.thumb} />
      </label>
      <div className={s.meta}>
        {(label || badge) && (
          <div className={s.label}>
            {label && <span className={s.text}>{label}</span>}
            {badge && <InfoBadge>{badge}</InfoBadge>}
          </div>
        )}
        {hint && <div className={s.hint}>{hint}</div>}
      </div>
    </div>
  );
}
