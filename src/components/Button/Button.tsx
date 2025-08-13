import React from 'react';
import s from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  onlyIcon?: boolean;
  error?: boolean;
  color?: boolean;
  permissionId?: string;
}

export function Button({
  label = 'Button',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  onlyIcon = false,
  error = false,
  color = false,
  className = '',
  disabled,
  permissionId,
  ...rest
}: ButtonProps) {
  const isOnlyIcon = Boolean(onlyIcon && icon);
  const iconStart = icon && iconPosition === 'start' ? icon : undefined;
  const iconEnd = icon && iconPosition === 'end' ? icon : undefined;

  const classes = [
    s.btn,
    s[`size-${size}`],
    s[`variant-${variant}`],
    error ? s.isError : '',
    color ? s.isColor : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} data-korucu-id={permissionId} {...rest}>
      {isOnlyIcon ? (
        <span className={s.icon} aria-hidden>
          {icon}
        </span>
      ) : (
        <>
          {iconStart && <span className={`${s.icon} ${s.iconStart}`}>{iconStart}</span>}
          <span className={s.label}>{label}</span>
          {iconEnd && <span className={`${s.icon} ${s.iconEnd}`}>{iconEnd}</span>}
        </>
      )}
    </button>
  );
}

