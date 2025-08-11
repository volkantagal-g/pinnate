import React from 'react';
import { Tooltip, TooltipPlacement } from '../Tooltip/Tooltip';
import { Info } from '../../icons';

export interface InfoTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  placement?: TooltipPlacement;
  scheme?: 'dark' | 'light';
  visible?: boolean; // if true, tooltip is forced visible (besides hover)
}

export function InfoTooltip({
  title = 'Info',
  content,
  placement = 'top',
  scheme = 'dark',
  visible = false,
  ...rest
}: InfoTooltipProps) {
  return (
    <div
      className={`pn-info-tooltip pn-info-tooltip--${placement} ${visible ? 'pn-info-tooltip--force' : ''}`}
      {...rest}
    >
      <Info className="pn-info-tooltip__icon" />
      <div className="pn-info-tooltip__panel">
        <Tooltip title={title} content={content} placement={placement} scheme={scheme} />
      </div>
      <style>{styles}</style>
    </div>
  );
}

const styles = `
.pn-info-tooltip { width: 16px; position: relative; display: inline-flex; align-items: center; --pn-gap: 8px; --pn-arrow: 6px; }
.pn-info-tooltip__icon { width: 18px; height: 18px; display: inline-block; }
.pn-info-tooltip__panel { position: absolute; opacity: 0; pointer-events: none; transition: opacity 120ms ease; }
.pn-info-tooltip:hover .pn-info-tooltip__panel,
.pn-info-tooltip:focus-within .pn-info-tooltip__panel,
.pn-info-tooltip--force .pn-info-tooltip__panel { opacity: 1; pointer-events: auto; }

/* Align panel so that inner arrow centers on the icon */
/* Add arrow protrusion to maintain 8px between icon and arrow tip */
.pn-info-tooltip--top .pn-info-tooltip__panel { left: 50%; top: 0; transform: translate(-50%, calc(-100% - (var(--pn-gap) + var(--pn-arrow)))); }
.pn-info-tooltip--top-start .pn-info-tooltip__panel { left: 50%; top: 0; transform: translate(-30px, calc(-100% - (var(--pn-gap) + var(--pn-arrow)))); }
.pn-info-tooltip--top-end .pn-info-tooltip__panel { left: 50%; top: 0; transform: translate(calc(-100% + 30px), calc(-100% - (var(--pn-gap) + var(--pn-arrow)))); }
.pn-info-tooltip--bottom .pn-info-tooltip__panel { left: 50%; top: 100%; transform: translate(-50%, calc(var(--pn-gap) + var(--pn-arrow))); }
.pn-info-tooltip--bottom-start .pn-info-tooltip__panel { left: 50%; top: 100%; transform: translate(-30px, calc(var(--pn-gap) + var(--pn-arrow))); }
.pn-info-tooltip--bottom-end .pn-info-tooltip__panel { left: 50%; top: 100%; transform: translate(calc(-100% + 30px), calc(var(--pn-gap) + var(--pn-arrow))); }
.pn-info-tooltip--right .pn-info-tooltip__panel { left: 100%; top: 50%; transform: translate(calc(var(--pn-gap) + var(--pn-arrow)), -50%); }
.pn-info-tooltip--right-start .pn-info-tooltip__panel { left: 100%; top: 50%; transform: translate(calc(var(--pn-gap) + var(--pn-arrow)), -30px); }
.pn-info-tooltip--right-end .pn-info-tooltip__panel { left: 100%; top: 50%; transform: translate(calc(var(--pn-gap) + var(--pn-arrow)), calc(-100% + 30px)); }
.pn-info-tooltip--left .pn-info-tooltip__panel { left: 0; top: 50%; transform: translate(calc(-100% - (var(--pn-gap) + var(--pn-arrow))), -50%); }
.pn-info-tooltip--left-start .pn-info-tooltip__panel { left: 0; top: 50%; transform: translate(calc(-100% - (var(--pn-gap) + var(--pn-arrow))), -30px); }
.pn-info-tooltip--left-end .pn-info-tooltip__panel { left: 0; top: 50%; transform: translate(calc(-100% - (var(--pn-gap) + var(--pn-arrow))), calc(-100% + 30px)); }
`;

