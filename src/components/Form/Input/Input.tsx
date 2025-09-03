/**
 * @category Form Elements
 * @export false
 */

import React from 'react';
import s from './Input.module.scss';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  permissionId?: string;
  placeholder?: string;
}

export function Input({ className, icon, title, required, placeholder = 'Placeholder', disabled, error, permissionId, ...rest }: InputProps): React.ReactNode {
  return (
    <div className={s.wrapper} data-korucu-id={permissionId}>
      <label className={`${s.root} ${disabled ? s.isDisabled : ''} ${error ? s.isError : ''}`}>
        {icon && (
          <span aria-hidden className={s.indicator}>
            {icon}
          </span>
        )}
        <input className={s.control} placeholder={placeholder} disabled={disabled} {...rest} />
      </label>
    </div>
  );
}

// styles moved to Input.module.css

