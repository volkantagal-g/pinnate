import React, { useState } from 'react';
import s from './ClipboardCopy.module.scss';
import { Copy, Check } from '../../icons';

export interface ClipboardCopyProps {
  value: string;
  disabled?: boolean;
  className?: string;
  onCopy?: (value: string) => void;
  copyText?: string;
  copiedText?: string;
  showText?: boolean;
}

export function ClipboardCopy({
  value,
  disabled = false,
  className = '',
  onCopy,
  copyText = 'Copy',
  copiedText = '',
  showText = true,
}: ClipboardCopyProps): React.ReactNode {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy?.(value);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const classes = [s.clipboardCopy, disabled ? s.isDisabled : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={handleCopy}
      disabled={disabled}
      type="button"
      aria-label={copied ? copiedText : copyText}
    >
      {showText && <span className={s.text}>{copied && copiedText ? copiedText : copyText}</span>}
      <span className={s.icon} aria-hidden>
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </span>
    </button>
  );
}
