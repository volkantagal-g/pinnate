import React from 'react';
import { Input, InputProps } from '@Components/Form/Input/Input';
import { InfoTooltip } from '@Components/InfoTooltip/InfoTooltip';
import { InputHint } from '@Components/InputHint/InputHint';

import s from './InputGroup.module.scss';

export interface InputGroupProps extends Omit<InputProps, 'aria-describedby'> {
  label: string;
  required?: boolean;
  tooltip?: string;
  showInfo?: boolean;
  hint?: string;
  errorMessage?: string;
}

export function InputGroup({
  label,
  required,
  tooltip,
  showInfo = true,
  hint,
  error,
  errorMessage,
  id,
  ...inputProps
}: InputGroupProps) {
  const hintId = id ? `${id}-hint` : undefined;
  const showError = Boolean(error || errorMessage);
  return (
    <div className={s.group}>
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
      <Input id={id} error={showError} aria-describedby={hintId} {...inputProps} />
      {(hint || errorMessage) && (
        <div id={hintId} className={s.hint}>
          <InputHint type={showError ? 'error' : 'info'} text={showError ? errorMessage || '' : hint || ''} />
        </div>
      )}
    </div>
  );
}
