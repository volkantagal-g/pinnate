/**
 * @category Form Elements
 * @export false
 */

import React from 'react';
import s from './Select.module.scss';
import { ChevronDown } from '../../../icons/ChevronDown';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  emptyText?: string;
  title?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  permissionId?: string;
}

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select',
  emptyText = 'No Results Found',
  required,
  disabled,
  error,
  id,
  permissionId,
  ...rest
}: SelectProps): JSX.Element {
  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue);
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const currentValue = isControlled ? value : internalValue;
  const selectedOption = options?.find((o) => o.value === currentValue);

  const setValue = (v: string) => {
    if (!isControlled) setInternalValue(v);
    onChange?.(v);
  };

  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const toggle = () => {
    if (disabled) return;
    setOpen((v) => !v);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className={s.wrapper} data-korucu-id={permissionId} {...rest}>
      <div
        ref={rootRef}
        className={`${s.root} ${open ? s.open : ''} ${disabled ? s.isDisabled : ''} ${error ? s.isError : ''}`}
      >
        <div
          id={id}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? `${id}-listbox` : undefined}
          tabIndex={disabled ? -1 : 0}
          className={s.control}
          onClick={toggle}
          onKeyDown={onKeyDown}
        >
          <span className={`${s.label} ${!selectedOption ? s.placeholder : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span aria-hidden className={s.chevron}>
            <ChevronDown width={16} height={16} />
          </span>
        </div>

        {open && (
          <div role="listbox" id={`${id}-listbox`} className={s.menu}>
            <div className={s.menuInner}>
              {options.length === 0 ? (
                <div className={s.empty}>{emptyText}</div>
              ) : (
                options.map((opt) => {
                  const isActive = opt.value === currentValue;
                  return (
                    <div
                      key={opt.value}
                      role="option"
                      aria-selected={isActive}
                      aria-disabled={opt.disabled || undefined}
                      className={`${s.option} ${isActive ? s.optionActive : ''} ${opt.disabled ? s.optionDisabled : ''}`}
                      tabIndex={opt.disabled ? -1 : 0}
                      onClick={() => {
                        if (opt.disabled) return;
                        setValue(opt.value);
                        setOpen(false);
                      }}
                      onKeyDown={(e) => {
                        if (opt.disabled) return;
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setValue(opt.value);
                          setOpen(false);
                        }
                      }}
                    >
                      {opt.label}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

