import React from 'react';
import s from './Input.module.scss';
import { FormLabel } from '../FormLabel/FormLabel';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: React.ReactNode;
  title?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  permissionId?: string;
}

export function Input({ icon, title, required, placeholder = 'Placeholder', disabled, error, permissionId, ...rest }: InputProps) {
  return (
    <div className={s.wrapper} data-korucu-id={permissionId}>
      {title && <FormLabel text={title} required={required} htmlFor={rest.id} />}
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

