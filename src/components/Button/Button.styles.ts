import type { ButtonVariant, ButtonSize } from './Button';

export function getButtonClass(variant: ButtonVariant, size: ButtonSize) {
  return `pn-btn pn-btn--${variant} pn-btn--${size}`;
}

export const buttonBaseStyles = `
.pn-btn {
  appearance: none;
  border: 1px solid transparent;
  border-radius: var(--pn-radius-lg);
  font-family: var(--pn-font-family);
  font-weight: var(--pn-font-weight-sb);
  font-size: var(--pn-typo-text-md-size);
  line-height: var(--pn-typo-text-md-line);
  padding: calc(var(--pn-space-2)) var(--pn-space-4);
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease,
    color 120ms ease, border-color 120ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--pn-space-2);
}

.pn-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.pn-btn--sm {
  font-size: var(--pn-typo-size-sm, var(--pn-font-size-md));
  line-height: var(--pn-typo-line-sm, var(--pn-line-md));
  padding: calc(var(--pn-space-2)) var(--pn-space-3);
  border-radius: var(--pn-radius-md);
}

.pn-btn--md {
  font-size: var(--pn-font-size-md);
  line-height: var(--pn-line-md);
}

.pn-btn--lg {
  font-size: var(--pn-typo-size-lg, var(--pn-font-size-md));
  line-height: var(--pn-typo-line-lg, var(--pn-line-md));
  padding: calc(var(--pn-space-3)) var(--pn-space-5);
  border-radius: var(--pn-radius-pill);
}

.pn-btn--primary {
  color: var(--pn-color-text-on-primary);
  background: linear-gradient(180deg, var(--pn-color-primary-500), var(--pn-color-primary-600));
  border-color: var(--pn-color-primary-600);
  box-shadow: var(--pn-elevation-sm);
}

.pn-btn--primary:hover {
  transform: translateY(-1px);
}

.pn-btn--secondary {
  color: var(--pn-color-text-primary);
  background: var(--pn-color-surface);
  border-color: var(--pn-color-border);
}

.pn-btn--secondary:hover {
  border-color: var(--pn-color-primary-500);
}
.pn-btn--danger {
  color: var(--pn-color-text-on-danger);
  background: linear-gradient(180deg, var(--pn-color-danger-500), var(--pn-color-danger-600));
  border-color: var(--pn-color-danger-600);
  box-shadow: var(--pn-elevation-sm);
}

.pn-btn--danger:hover { transform: translateY(-1px); }

.pn-btn--ghost {
  color: var(--pn-color-text-primary);
  background: transparent;
  border-color: transparent;
}

.pn-btn--ghost:hover {
  background: rgba(0,0,0,0.04);
}
`;

