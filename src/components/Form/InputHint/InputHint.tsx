import React from 'react';
import s from './InputHint.module.scss';

export type InputHintType = 'info' | 'success' | 'warning' | 'error' | 'help' | 'disabled' | 'default';

export interface InputHintProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: InputHintType;
}

export function InputHint({ text, type = 'info', ...rest }: InputHintProps) {
  const resolved = type === 'default' ? 'info' : type;
  return (
    <div className={`${s.hint} ${s[resolved]}`} {...rest}>{text}</div>
  );
}

const styles = ``;

