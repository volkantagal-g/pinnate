import React from 'react';
import { Textbox, TextboxProps } from '../Textbox/Textbox';
import { InfoTooltip } from '@Components/InfoTooltip/InfoTooltip';
import { InputHint } from '@Components/Form/InputHint/InputHint';
import s from './TextboxGroup.module.scss';

export interface TextboxGroupProps extends Omit<TextboxProps, 'aria-describedby'> {
  label: string;
  required?: boolean;
  tooltip?: string;
  showInfo?: boolean;
  hint?: string;
  errorMessage?: string;
  permissionId?: string;
}

export function TextboxGroup({
  label,
  required,
  tooltip,
  showInfo = true,
  hint,
  error,
  errorMessage,
  id,
  permissionId,
  ...textboxProps
}: TextboxGroupProps): JSX.Element {
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
          <span className={s.tooltip}>
            <InfoTooltip content={tooltip} placement="top" scheme="light" />
          </span>
        )}
      </div>
      <Textbox id={id} error={showError} aria-describedby={hintId} required={required} {...textboxProps} />
      {(hint || errorMessage) && (
        <div id={hintId} className={s.hint}>
          <InputHint type={showError ? 'error' : 'info'} text={showError ? errorMessage || '' : hint || ''} />
        </div>
      )}
    </div>
  );
}

