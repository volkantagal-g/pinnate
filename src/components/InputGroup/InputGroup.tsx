import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { InfoTooltip } from '../InfoTooltip/InfoTooltip';
import { InputHint } from '../InputHint/InputHint';

export interface InputGroupProps extends Omit<InputProps, 'aria-describedby'> {
  label: string;
  required?: boolean;
  tooltip?: string;
  hint?: string;
  errorMessage?: string;
}

export function InputGroup({
  label,
  required,
  tooltip,
  hint,
  error,
  errorMessage,
  id,
  ...inputProps
}: InputGroupProps) {
  const hintId = id ? `${id}-hint` : undefined;
  const showError = Boolean(error || errorMessage);
  return (
    <div className="pn-input-group">
      <div className="pn-input-group__header">
        <label className="pn-input-group__label" htmlFor={id}>
          {label}
          {required && <span className="pn-input-group__req" aria-hidden>*</span>}
        </label>
        {tooltip && (
          <InfoTooltip content={tooltip} placement="top" scheme="light" />
        )}
      </div>
      <Input id={id} error={showError} aria-describedby={hintId} {...inputProps} />
      {(hint || errorMessage) && (
        <div id={hintId} className="pn-input-group__hint">
          <InputHint type={showError ? 'error' : 'info'} text={showError ? errorMessage || '' : hint || ''} />
        </div>
      )}
      <style>{styles}</style>
    </div>
  );
}

const styles = `
.pn-input-group { display: grid; gap: 0; }
.pn-input-group__header { display: inline-flex; align-items: center; margin-bottom: 8px; }
.pn-input-group__label { font-family: var(--pn-font-family); font-weight: var(--pn-font-weight-sb); font-size: var(--pn-typo-text-lg-size); line-height: var(--pn-typo-text-lg-line); color: var(--pn-palette-gray-dark-900); }
.pn-input-group__req { color: var(--pn-palette-error-600); margin-left: var(--pn-space-xxs); }
.pn-input-group__hint { margin-top: var(--pn-space-xxs); }
`;

