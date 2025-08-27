import React from 'react';
import { Select, SelectProps } from '../Select/Select';
import { InfoTooltip } from '../../InfoTooltip/InfoTooltip';
import { InputHint } from '../InputHint/InputHint';

import s from './SelectGroup.module.scss';

export interface SelectGroupProps extends Omit<SelectProps, 'aria-describedby' | 'title'> {
  label: string;
  required?: boolean;
  tooltip?: string;
  showInfo?: boolean;
  hint?: string;
  errorMessage?: string;
  permissionId?: string;
}

export function SelectGroup({
  label = 'Label',
  required = false,
  tooltip = 'Helper info',
  showInfo = true,
  hint = 'Helper info',
  error = false,
  errorMessage,
  id,
  permissionId,
  // Select'teki tüm props'ları da al
  options = [],
  value = '',
  defaultValue = '',
  onChange = () => {},
  placeholder = 'Select',
  emptyText,
  disabled,
  ...selectProps
}: SelectGroupProps): React.ReactNode {
  const hintId = id ? `${id}-hint` : undefined;
  const showError = Boolean(error || errorMessage);

  return (
    <div className={s.group} data-korucu-id={permissionId}>
      <div className={s.header}>
        <label className={s.label} htmlFor={id}>
          {label}
          {required && <span className={s.req} aria-hidden>*</span>}
        </label>
        {tooltip && showInfo && (
          <div className={s.tooltip}>
            <InfoTooltip content={tooltip} placement="top" scheme="light" />
          </div>
        )}
      </div>
      <Select 
        id={id} 
        error={showError} 
        aria-describedby={hintId}
        options={options}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        emptyText={emptyText}
        disabled={disabled}
        {...selectProps} 
      />
      {(hint || errorMessage) && (
        <div id={hintId} className={s.hint}>
          <InputHint type={showError ? 'error' : 'info'} text={showError ? errorMessage || '' : hint || ''} />
        </div>
      )}
    </div>
  );
}

