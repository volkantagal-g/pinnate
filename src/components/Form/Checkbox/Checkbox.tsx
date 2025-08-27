import React from 'react';
import s from './Checkbox.module.scss';

/**
 * @category Form Elements
 * @export false
 */
import { Check } from '../../../icons/Check';
import { CheckDisable } from '../../../icons/CheckDisable';
import { Indeterminate } from '../../../icons/Indeterminate';
import { IndeterminateDisable } from '../../../icons/IndeterminateDisable';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  error?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { checked, indeterminate = false, disabled, error, onChange, ...rest }: CheckboxProps,
  forwardedRef,
) {
  const isControlled = typeof checked === 'boolean';
  const [internalChecked, setInternalChecked] = React.useState<boolean>(Boolean(checked));
  React.useEffect(() => {
    if (isControlled) setInternalChecked(Boolean(checked));
  }, [isControlled, checked]);

  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = Boolean(indeterminate);
  }, [indeterminate]);

  // merge refs
  React.useEffect(() => {
    const node = inputRef.current;
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else (forwardedRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current]);

  const currentChecked = internalChecked;
  const stateClass = currentChecked ? (indeterminate ? s.indet : s.checked) : '';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalChecked(e.target.checked);
    onChange?.(e);
  };
  return (
    <label className={s.root}>
      <span className={`${s.box} ${stateClass} ${disabled ? s.disabled : ''} ${error ? s.error : ''}`}>
        {indeterminate ? (
          <span className={s.icon}>{disabled ? <IndeterminateDisable /> : <Indeterminate />}</span>
        ) : currentChecked ? (
          <span className={s.icon}>{disabled ? <CheckDisable /> : <Check />}</span>
        ) : null}
        <input
          ref={inputRef}
          className={s.input}
          type="checkbox"
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
          aria-checked={indeterminate && currentChecked ? 'mixed' : currentChecked}
          {...rest}
        />
      </span>
    </label>
  );
});

