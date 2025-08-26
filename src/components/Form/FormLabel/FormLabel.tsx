import React from 'react';
import s from './FormLabel.module.scss';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  required?: boolean;
}

export function FormLabel({ text, required, htmlFor, className = '', ...rest }: FormLabelProps): JSX.Element {
  return (
    <label htmlFor={htmlFor} className={`${s.label} ${className}`} {...rest}>
      {text}
      {required && <span className={s.req} aria-hidden>*</span>}
    </label>
  );
}

