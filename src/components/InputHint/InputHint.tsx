import React from 'react';

export type InputHintType = 'info' | 'success' | 'warning' | 'error' | 'help' | 'default';

export interface InputHintProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: InputHintType;
}

export function InputHint({ text, type = 'info', ...rest }: InputHintProps) {
  const resolved = type === 'default' ? 'info' : type;
  return (
    <div className={`pn-input-hint pn-input-hint--${resolved}`} {...rest}>
      {text}
      <style>{styles}</style>
    </div>
  );
}

const styles = `
.pn-input-hint {
  font-family: var(--pn-font-family);
  font-size: var(--pn-typo-text-xs-size);
  line-height: var(--pn-typo-text-xs-line);
  letter-spacing: var(--pn-typo-text-xs-track);
  font-weight: var(--pn-font-weight-regular);
  font-style: normal;
}

.pn-input-hint--info { color: var(--pn-palette-gray-light-500); }
.pn-input-hint--success { color: var(--pn-palette-success-600); }
.pn-input-hint--warning { color: var(--pn-palette-warning-600); }
.pn-input-hint--error { color: var(--pn-palette-error-600); }
.pn-input-hint--help { color: var(--pn-palette-brand-700); }
`;

