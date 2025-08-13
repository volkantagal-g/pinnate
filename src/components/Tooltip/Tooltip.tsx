import React from 'react';
import s from './Tooltip.module.scss';

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
  permissionId?: string;
}

export function Tooltip({ title, content, placement = 'top', scheme = 'dark', permissionId, ...rest }: TooltipProps) {
  return (
    <div className={`${s.tooltip} ${s[`placement-${placement}`]} ${s[`scheme-${scheme}`]}`} role="tooltip" data-korucu-id={permissionId} {...rest}>
      <div className={s.panel}>
        {title && <div className={s.title}>{title}</div>}
        <div className={s.content}>{content}</div>
      </div>
      <div className={s.arrow} aria-hidden />
    </div>
  );
}

