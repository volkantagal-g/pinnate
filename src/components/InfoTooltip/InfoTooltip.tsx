import React from 'react';
import { Tooltip, TooltipPlacement } from '@Components/Tooltip/Tooltip';
import { Info } from '@App/icons';

import s from './InfoTooltip.module.scss';

export interface InfoTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content: string;
  placement?: TooltipPlacement;
  scheme?: 'dark' | 'light';
  visible?: boolean; // if true, tooltip is forced visible (besides hover)
  permissionId?: string;
}

export function InfoTooltip({
  title = 'Info',
  content,
  placement = 'top',
  scheme = 'dark',
  visible = false,
  permissionId,
  ...rest
}: InfoTooltipProps): JSX.Element {
  return (
    <div className={`${s.info} ${s[`placement-${placement}`]} ${visible ? s.force : ''}`} data-korucu-id={permissionId} {...rest}>
      <Info className={s.icon} />
      <div className={s.panel}>
        <Tooltip title={title} content={content} placement={placement} scheme={scheme} />
      </div>
    </div>
  );
}

const styles = ``;

