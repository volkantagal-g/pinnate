import React from 'react';
import s from './Alert.module.scss';
import { Button } from '../Button/Button';
import {
  CircleBold,
  InfoCircle,
  Exclamation,
  WarningBold,
  CheckCircle,
  NontificationClose,
} from '../../icons';

export type AlertVariant = 'purple' | 'info' | 'error' | 'warning' | 'success';

export interface AlertAction {
  label: string;
  onClick: () => void;
}

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  actions?: AlertAction[];
  className?: string;
}

const variantIcons = {
  purple: CircleBold,
  info: InfoCircle,
  error: Exclamation,
  warning: WarningBold,
  success: CheckCircle,
};

export function Alert({
  variant = 'info',
  title,
  children,
  onClose,
  actions,
  className = '',
}: AlertProps): JSX.Element {
  const IconComponent = variantIcons[variant];
  const hasActions = actions && actions.length > 0;
  const hasTitle = Boolean(title);

  const classes = [
    s.alert,
    s[`variant-${variant}`],
    hasTitle ? s.hasTitle : s.simple,
    hasActions ? s.hasActions : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="alert">
      <div className={s.content}>
        <div className={s.iconContainer}>
          <IconComponent />
        </div>

        <div className={s.textContent}>
          {hasTitle && <div className={s.title}>{title}</div>}
          <div className={`${s.body} ${hasTitle ? s.bodyWithTitle : ''}`}>{children}</div>
        </div>

        {onClose && (
          <Button
            className={s.closeButton}
            onClick={onClose}
            aria-label="Close alert"
            icon={<NontificationClose />}
            onlyIcon
            variant="tertiary"
            size="sm"
          />
        )}
      </div>

      {hasActions && (
        <div className={s.actions}>
          {actions.map((action, index) => (
            <Button
              key={index}
              className={s.actionButton}
              onClick={action.onClick}
              label={action.label}
              variant="tertiary"
              size="sm"
            />
          ))}
        </div>
      )}
    </div>
  );
}
