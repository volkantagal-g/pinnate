import React from 'react';
import { getButtonClass, buttonBaseStyles } from './Button.styles';

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
    <>
      <style>{buttonBaseStyles}</style>
      <button className={getButtonClass(variant, size)} disabled={isDisabled || loading} {...rest}>
        {leftIcon}
        {loading ? 'Loading' : label}
        {rightIcon}
      </button>
    </>
  );
}

