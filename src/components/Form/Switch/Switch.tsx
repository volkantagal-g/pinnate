/**
 * @category Form Elements
 */

import React from 'react';
import { InfoBadge } from '../../Display/InfoBadge/InfoBadge';

import s from './Switch.module.scss';

export type SwitchSize = 'sm' | 'md';

/** Switch component props */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  name?: string;
  hint?: string;
  size?: SwitchSize;
  badge?: string;
  reverse?: boolean; // if true, control on right and meta on left
  spaceBetween?: boolean; // if true, justify content space-between on wrapper
  /** Initial checked value - component manages its own state */
  checked?: boolean;
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
  onChange,
  name,
  ...rest 
}: SwitchProps): React.ReactElement {
  const id = React.useId();
  
  // Internal state - initial value from checked prop
  const [isChecked, setIsChecked] = React.useState(checked ?? false);
  
  // Update internal state when checked prop changes
  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update internal state
    setIsChecked(event.target.checked);
    
    // Call parent onChange if provided
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
          name={name}
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
