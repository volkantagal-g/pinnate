import React from 'react';
import * as Icons from '../../icons';
import s from './Icon.module.scss';

export type IconName = keyof typeof Icons;

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className, ...rest }: IconProps) {
  const IconComponent = Icons[name] as React.ComponentType<any>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const mergedClass = [s.icon, className].filter(Boolean).join(' ');
  return <IconComponent width={size} height={size} size={size} className={mergedClass} {...rest} />;
}
