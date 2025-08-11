import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  leftIndicator?: boolean;
}

export function Input({ leftIndicator = true, placeholder = 'Placeholder', ...rest }: InputProps) {
  return (
    <label className="pn-input">
      {leftIndicator && <span aria-hidden className="pn-input__indicator" />}
      <input className="pn-input__control" placeholder={placeholder} {...rest} />
      <style>{styles}</style>
    </label>
  );
}

const styles = `
.pn-input { position: relative; display: flex; align-items: center; width: 100%; background: #FFFFFF; border: 2px solid var(--pn-palette-gray-light-300); border-radius: 28px; padding: 16px 20px; gap: 16px; }
.pn-input__indicator { width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--pn-palette-gray-light-500); box-sizing: border-box; display: inline-block; }
.pn-input__control { flex: 1; border: none; outline: none; background: transparent; font-family: var(--pn-font-family); font-size: var(--pn-typo-display-sm-size); line-height: var(--pn-typo-display-sm-line); color: var(--pn-palette-gray-dark-900); }
.pn-input__control::placeholder { color: var(--pn-palette-gray-light-400); }
`;

