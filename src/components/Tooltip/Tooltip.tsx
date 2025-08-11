import React from 'react';

export type TooltipPlacement =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  placement?: TooltipPlacement;
  scheme?: 'dark' | 'light';
}

// Colors and styles defined before component to satisfy no-use-before-define
const textColorLight = '#13161B';
const textColorDark = '#FAFAFA';

const styles = `
.pn-tooltip { position: relative; width: 280px; }
.pn-tooltip__panel {
  border-radius: var(--pn-radius-md);
  padding: 12px;
  display: grid;
  gap: 4px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.pn-tooltip--scheme-light .pn-tooltip__panel { background: #0C0E12; color: ${textColorDark}; }
.pn-tooltip--scheme-dark .pn-tooltip__panel { background: #FDFDFD; color: ${textColorLight}; }
.pn-tooltip__title {
  font-family: var(--pn-font-family);
  font-weight: var(--pn-font-weight-sb);
  font-size: var(--pn-typo-text-xs-size);
  line-height: var(--pn-typo-text-xs-line);
  letter-spacing: var(--pn-typo-text-xs-track);
  color: inherit;
}
.pn-tooltip__content {
  font-family: var(--pn-font-family);
  font-weight: var(--pn-font-weight-regular);
  font-size: var(--pn-typo-text-xs-size);
  line-height: var(--pn-typo-text-xs-line);
  letter-spacing: var(--pn-typo-text-xs-track);
  color: inherit;
}
.pn-tooltip__arrow { position: absolute; width: 12px; height: 12px; transform: rotate(45deg); }
.pn-tooltip--scheme-light .pn-tooltip__arrow { background: #0C0E12; }
.pn-tooltip--scheme-dark .pn-tooltip__arrow { background: #FDFDFD; }

/* placements */
.pn-tooltip--top .pn-tooltip__arrow { bottom: -6px; left: calc(50% - 6px); }
.pn-tooltip--top-start .pn-tooltip__arrow { bottom: -6px; left: 24px; }
.pn-tooltip--top-end .pn-tooltip__arrow { bottom: -6px; right: 24px; }

.pn-tooltip--bottom .pn-tooltip__arrow { top: -6px; left: calc(50% - 6px); }
.pn-tooltip--bottom-start .pn-tooltip__arrow { top: -6px; left: 24px; }
.pn-tooltip--bottom-end .pn-tooltip__arrow { top: -6px; right: 24px; }

.pn-tooltip--right .pn-tooltip__arrow { left: -6px; top: calc(50% - 6px); }
.pn-tooltip--right-start .pn-tooltip__arrow { left: -6px; top: 24px; }
.pn-tooltip--right-end .pn-tooltip__arrow { left: -6px; bottom: 24px; }

.pn-tooltip--left .pn-tooltip__arrow { right: -6px; top: calc(50% - 6px); }
.pn-tooltip--left-start .pn-tooltip__arrow { right: -6px; top: 24px; }
.pn-tooltip--left-end .pn-tooltip__arrow { right: -6px; bottom: 24px; }
`;

export function Tooltip({ title, content, placement = 'top', scheme = 'dark', ...rest }: TooltipProps) {
  return (
    <div className={`pn-tooltip pn-tooltip--${placement} pn-tooltip--scheme-${scheme}`} role="tooltip" {...rest}>
      <div className="pn-tooltip__panel">
        {title && <div className="pn-tooltip__title">{title}</div>}
        <div className="pn-tooltip__content">{content}</div>
      </div>
      <div className="pn-tooltip__arrow" aria-hidden />
      <style>{styles}</style>
    </div>
  );
}

