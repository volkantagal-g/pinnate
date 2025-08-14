import React from 'react';
import * as Icons from '../../icons';
import s from './Icon.module.scss';

export type IconName = keyof typeof Icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className, ...rest }: IconProps) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={`${s.icon} ${className || ''}`} {...rest} />;
}
