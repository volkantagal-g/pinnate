/**
 * @category Form Elements
 */

import React from 'react';
import s from './CheckboxGroup.module.scss';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { InputHint } from '@Components/Form/InputHint/InputHint';
import { CheckboxGroupBadge } from '../CheckboxGroupBadge/CheckboxGroupBadge';

export interface CheckboxGroupProps extends Omit<CheckboxProps, 'aria-describedby'> {
  label: string;
  badge?: string;
  disabled?: boolean;
  checked?: boolean;
  hint?: string;
  id?: string;
}

export function CheckboxGroup({ label = "Checkbox Group", badge, hint, disabled, id, ...checkboxProps }: CheckboxGroupProps): JSX.Element {
  const [checked, setChecked] = React.useState(checkboxProps.checked);
  const hintId = id ? `${id}-hint` : undefined;

  console.log('checkboxProps', checkboxProps);
  return (
    <div className={`${s.group} ${disabled ? s.disabled : ''}`}>
      <div className={s.row}>
        <Checkbox id={id} aria-describedby={hintId} disabled={disabled} checked={checked} {...checkboxProps} />
        <div
          className={s.texts}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={() => !disabled && setChecked(!checked)}
          onKeyDown={(e) => {
            if (disabled) return;
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setChecked(!checked);
            }
          }}
        >
          <div className={s.header}>
            <span className={s.label}>{label}</span>
            {badge && <CheckboxGroupBadge text={badge} disabled={disabled} />}
          </div>
          {hint && (
            <div id={hintId} className={s.hint}>
              <InputHint type={disabled ? 'disabled' : 'info'} text={hint} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

