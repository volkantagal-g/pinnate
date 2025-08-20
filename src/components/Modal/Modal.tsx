import React from 'react';
import s from './Modal.module.scss';
import { Icon } from '../Icon/Icon';
import { Close } from '@App/icons/Notification/Close';

export type ModalSize = 'sm' | 'md' | 'lg';
export type ModalVariant = 'default' | 'success' | 'warning' | 'error';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  variant?: ModalVariant;
  footerActions?: React.ReactNode;
}

interface VariantIcon {
  name: 'CheckCircle' | 'WarningBold' | 'ErrorFill';
  color: string;
}

const getVariantIcon = (variant: ModalVariant): VariantIcon | null => {
  switch (variant) {
    case 'success':
      return { name: 'CheckCircle', color: '#10B981' };
    case 'warning':
      return { name: 'WarningBold', color: '#F59E0B' };
    case 'error':
      return { name: 'ErrorFill', color: '#EF4444' };
    default:
      return null;
  }
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  variant = 'default',
  footerActions,
}: ModalProps) {
  if (!isOpen) return null;

  const variantIcon = getVariantIcon(variant);

  return (
    <div
      className={s.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClose()}
      aria-label="Close modal"
    >
      <div
        className={`${s.modal} ${s[`size-${size}`]} ${s[`variant-${variant}`]}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {(title || true) && (
          <div className={s.header}>
            {title && (
              <h2 id="modal-title" className={s.title}>
                {variantIcon && (
                  <Icon
                    name={variantIcon.name}
                    size={20}
                    className={s.titleIcon}
                    style={{ color: variantIcon.color }}
                  />
                )}
                {title}
              </h2>
            )}
            <button className={s.closeButton} onClick={onClose} aria-label="Close">
              <Close width={16} height={16} />
            </button>
          </div>
        )}

        <div className={s.slot}>{children}</div>

        {footerActions && <div className={s.footer}>{footerActions}</div>}
      </div>
    </div>
  );
}
