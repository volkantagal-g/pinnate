import React from 'react';
import { Circle, CircleDisable } from '../../icons';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  leftIndicator?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export function Input({ leftIndicator = true, placeholder = 'Placeholder', disabled, error, ...rest }: InputProps) {
  return (
    <label className={`pn-input ${disabled ? 'pn-input--disabled' : ''} ${error ? 'pn-input--error' : ''}`}>
      {leftIndicator && (
        <span aria-hidden className="pn-input__indicator">
          {disabled ? <CircleDisable /> : <Circle />}
        </span>
      )}
      <input className="pn-input__control" placeholder={placeholder} disabled={disabled} {...rest} />
      <style>{styles}</style>
    </label>
  );
}

const styles = `
.pn-input { position: relative; display: flex; align-items: center; width: 100%; background: #FFFFFF; border: 1px solid var(--pn-palette-gray-light-300); border-radius: var(--pn-radius-lg); height: 40px; padding: 0 var(--pn-space-md) 0 var(--pn-space-md); gap: 12px; }
.pn-input:not(.pn-input--disabled):not(.pn-input--error):hover { border-color: var(--pn-palette-brand-600); }
.pn-input--disabled { background: var(--pn-palette-gray-light-50); border-color: var(--pn-palette-gray-light-200); }
.pn-input--error { border-color: var(--pn-palette-error-600); }
.pn-input__indicator { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; }
.pn-input__control { flex: 1; border: none; outline: none; background: transparent; font-family: var(--pn-font-family); font-size: var(--pn-typo-text-sm-size); line-height: var(--pn-typo-text-sm-line); color: var(--pn-palette-gray-dark-900); }
.pn-input--disabled .pn-input__control { color: var(--pn-palette-gray-light-300); }
.pn-input__control::placeholder { font-family: var(--pn-font-family); font-weight: var(--pn-font-weight-regular); font-size: var(--pn-typo-text-sm-size); line-height: var(--pn-typo-text-sm-line); letter-spacing: var(--pn-typo-text-sm-track); color: var(--pn-palette-gray-light-400); }
.pn-input--disabled .pn-input__control::placeholder { color: var(--pn-palette-gray-light-300); }
`;

