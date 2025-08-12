import React from 'react';
import s from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/** Button component props */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  label,
  variant = 'primary',
  isDisabled = false,
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${s.btn} ${s[`variant-${variant}`]} ${s[`size-${size}`]}`}
      disabled={isDisabled || loading}
      {...rest}
    >
      {leftIcon}
      {loading ? 'Loading' : label}
      {rightIcon}
    </button>
  );
}

