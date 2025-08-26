import React from 'react';
import { Select, SelectProps } from '@Components/Form/Select/Select';
import { InfoTooltip } from '@Components/InfoTooltip/InfoTooltip';
import { InputHint } from '@Components/Form/InputHint/InputHint';

import s from './SelectGroup.module.scss';

export interface SelectGroupProps extends Omit<SelectProps, 'aria-describedby'> {
  label: string;
  required?: boolean;
  tooltip?: string;
  showInfo?: boolean;
  hint?: string;
  errorMessage?: string;
  permissionId?: string;
}

export function SelectGroup({
  label,
  required,
  tooltip,
  showInfo = true,
  hint,
  error,
  errorMessage,
  id,
  permissionId,
  ...selectProps
}: SelectGroupProps): JSX.Element {
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
      <Select id={id} error={showError} aria-describedby={hintId} {...selectProps} />
      {(hint || errorMessage) && (
        <div id={hintId} className={s.hint}>
          <InputHint type={showError ? 'error' : 'info'} text={showError ? errorMessage || '' : hint || ''} />
        </div>
      )}
    </div>
  );
}

