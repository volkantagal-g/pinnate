import React from 'react';
import { Badge } from '../Badge/Badge';

export type SwitchSize = 'sm' | 'md';

/** Switch component props */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  hint?: string;
  size?: SwitchSize;
  badge?: string;
}

export function Switch({ label, hint, size = 'md', badge, ...rest }: SwitchProps) {
  const id = React.useId();
  return (
    <div className={`pn-switch pn-switch--${size}`}>
      <label htmlFor={id} className="pn-switch__control">
        <input id={id} type="checkbox" className="pn-switch__input" {...rest} />
        <span className="pn-switch__track" />
        <span className="pn-switch__thumb" />
      </label>
      <div className="pn-switch__meta">
        {(label || badge) && (
          <div className="pn-switch__label">
            {label && <span className="pn-switch__text">{label}</span>}
            {badge && <Badge size="sm">{badge}</Badge>}
          </div>
        )}
        {hint && <div className="pn-switch__hint">{hint}</div>}
      </div>
      <style>{styles}</style>
    </div>
  );
}

const styles = `
.pn-switch { font-family: var(--pn-font-family); color: var(--pn-color-text-primary); display: inline-flex; align-items: flex-start; }
.pn-switch__control { position: relative; display: inline-flex; align-items: center; }
.pn-switch__input { position: absolute; opacity: 0; inset: 0; width: 100%; height: 100%; }
.pn-switch__track { width: 44px; height: 24px; background-color: #EDEDED; border-radius: 999px; transition: background-color 160ms ease; display: inline-block; position: relative; overflow: hidden; }
.pn-switch__track::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, var(--pn-color-primary-500), var(--pn-color-primary-600)); opacity: 0; transition: opacity 160ms ease; border-radius: inherit; }
.pn-switch__thumb { position: absolute; left: 2px; width: 20px; height: 20px; background: #FFFFFF; border-radius: 50%; box-shadow: var(--pn-elevation-sm); transition: transform 120ms ease; transform: translateX(0); }
.pn-switch--sm .pn-switch__track { width: 32px; height: 20px; }
.pn-switch--sm .pn-switch__thumb { width: 16px; height: 16px; left: 2px; }
.pn-switch__meta { display: grid; gap: 4px; margin-left: 12px; }
.pn-switch__label { display: inline-flex; align-items: center; gap: 8px; }
.pn-switch--sm .pn-switch__text { font-family: var(--pn-font-family); font-size: var(--pn-typo-text-sm-size); line-height: var(--pn-typo-text-sm-line); letter-spacing: var(--pn-typo-text-sm-track); font-weight: var(--pn-font-weight-regular); }
.pn-switch--md .pn-switch__text { font-family: var(--pn-font-family); font-size: var(--pn-typo-text-md-size); line-height: var(--pn-typo-text-md-line); letter-spacing: var(--pn-typo-text-md-track); font-weight: var(--pn-font-weight-regular); }
.pn-switch__badge { background: rgba(108, 77, 230, 0.1); color: var(--pn-color-primary-600); border-radius: 999px; padding: 2px 6px; font-size: 12px; }
.pn-switch__hint { color: var(--pn-color-text-secondary); font-size: 12px; }

.pn-switch__input:checked + .pn-switch__track { background-color: var(--pn-color-primary-500); }
.pn-switch__input:checked + .pn-switch__track::before { opacity: 1; }
.pn-switch__input:checked + .pn-switch__track + .pn-switch__thumb { transform: translateX(20px); }
.pn-switch--sm .pn-switch__input:checked + .pn-switch__track + .pn-switch__thumb { transform: translateX(12px); }
`;

