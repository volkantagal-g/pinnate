/**
 * @category Form Elements
 * @export false
 */

import React from 'react';

import s from './Textbox.module.scss';

export interface TextboxProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  required?: boolean;
  maxLength?: number;
  error?: boolean;
  permissionId?: string;
  placeholder?: string;
}

export function Textbox({ title, required, maxLength, placeholder = 'Placeholder', disabled, error, id, permissionId, ...rest }: TextboxProps): JSX.Element {
  const [value, setValue] = React.useState(rest.defaultValue?.toString() ?? '');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    rest.onChange?.(e);
  };
  const showCounter = typeof maxLength === 'number' && maxLength > 0;
  return (
    <div className={s.wrapper} data-korucu-id={permissionId}>
      <div className={`${s.root} ${disabled ? s.isDisabled : ''} ${error ? s.isError : ''}`}>
        <textarea
          id={id}
          className={s.area}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          value={'value' in rest ? (rest.value as string) : value}
          onChange={onChange}
          {...rest}
        />
      </div>
      {showCounter && (
        <div className={s.counter}>{`${('value' in rest ? (rest.value as string)?.length ?? 0 : value.length)}/${maxLength}`}</div>
      )}
    </div>
  );
}

