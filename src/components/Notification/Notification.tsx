import React from 'react';
import s from './Notification.module.scss';
import { Button } from '@Components/Button/Button';
import type { ButtonVariant, ButtonSize } from '@Components/Button/Button';
import { Exclamation as IconError, Warning as IconWarning, Success as IconSuccess, NontificationInfo as IconInfo } from '@App/icons';
import CloseIcon from '@App/icons/Notification/Close';

export type NotificationVariant = 'info' | 'error' | 'warning' | 'success';
export type NotificationPosition =
  | 'top-left' | 'top-center' | 'top-right'
  | 'middle-left' | 'middle-center' | 'middle-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface NotificationAction {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  error?: boolean;
  color?: boolean;
}

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  variant?: NotificationVariant;
  position?: NotificationPosition;
  title: string;
  description?: string;
  primaryAction?: NotificationAction;
  secondaryAction?: NotificationAction;
  onClose?: () => void;
  permissionId?: string;
  /** auto close duration in milliseconds */
  durationMs?: number;
  /** vertical offset in pixels to support stacking */
  offsetPx?: number;
}

const variantToIcon: Record<NotificationVariant, React.ReactNode> = {
  info: <IconInfo />,
  error: <IconError />,
  warning: <IconWarning />,
  success: <IconSuccess />,
};

const positionClass: Record<NotificationPosition, string> = {
  'top-left': s.topLeft,
  'top-center': s.topCenter,
  'top-right': s.topRight,
  'middle-left': s.middleLeft,
  'middle-center': s.middleCenter,
  'middle-right': s.middleRight,
  'bottom-left': s.bottomLeft,
  'bottom-center': s.bottomCenter,
  'bottom-right': s.bottomRight,
};

function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <button aria-label="Close" className={s.closeBtn} onClick={onClose}>
      <CloseIcon width={9} height={9} />
    </button>
  );
}

export function Notification({
  open = false,
  variant = 'info',
  position = 'top-right',
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  className = '',
  permissionId,
  durationMs,
  offsetPx = 0,
  ...rest
}: NotificationProps): React.ReactNode | null {
  const [visible, setVisible] = React.useState(open);
  const [closing, setClosing] = React.useState(false);
  const [entered, setEntered] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);
  const startRef = React.useRef<number>(0);
  const remainingRef = React.useRef<number>(0);
  const closeDelay: number = 500;

  React.useEffect(() => { setVisible(open); }, [open]);
  React.useEffect(() => { if (visible) requestAnimationFrame(() => setEntered(true)); else setEntered(false); }, [visible]);

  // Auto close setup (independent per instance)
  React.useEffect(() => {
    const hasActions = Boolean(primaryAction || secondaryAction);
    if (!visible || hasActions || !durationMs) return;
    // (re)start countdown
    remainingRef.current = durationMs;
    startRef.current = Date.now();
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setClosing(true), remainingRef.current + closeDelay);
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [visible, durationMs, primaryAction, secondaryAction]);

  // When closing starts, wait 500ms for fade-out, then unmount
  React.useEffect(() => {
    if (!closing) return;
    const t = window.setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 500);
    return () => window.clearTimeout(t);
  }, [closing, onClose]);
  if (!visible) return null;

  const gap = 16;
  const add = `${gap + offsetPx}px`;
  const posStyle: React.CSSProperties | undefined =
    position.startsWith('top')
      ? { top: add }
      : position.startsWith('bottom')
      ? { bottom: add }
      : position.startsWith('middle')
      ? { transform: `translateY(calc(-50% + ${offsetPx}px))` }
      : undefined;

  return (
    <div className={`${s.container}`} aria-live="polite" data-korucu-id={permissionId}>
      <div className={`${s.pos} ${positionClass[position]}`} style={posStyle}>
        <div
          className={`${s.card} ${s.accent} ${entered ? s.entered : ''} ${!primaryAction && !secondaryAction ? s.progress : ''} ${closing ? s.closing : ''} ${className}`}
          role="status"
          style={{ ['--pn-notif-duration' as unknown as string]: `${durationMs ?? 0}ms` }}
          onAnimationEnd={(e) => {
            const el = e.target as HTMLElement;
            // close after fade finishes (class 'progress' has delayed fade)
            if (el.classList.contains(s.card)) {
              if (closing) {
                setVisible(false);
                onClose?.();
              }
            }
          }}
          onMouseEnter={() => {
            if (timerRef.current) {
              window.clearTimeout(timerRef.current);
              timerRef.current = null;
              const elapsed = Date.now() - startRef.current;
              remainingRef.current = Math.max(0, (remainingRef.current || 0) - elapsed);
            }
          }}
          onMouseLeave={() => {
            const hasActions = Boolean(primaryAction || secondaryAction);
            if (!hasActions && durationMs && remainingRef.current > 0 && !closing) {
              startRef.current = Date.now();
              timerRef.current = window.setTimeout(() => setClosing(true), remainingRef.current);
            }
          }}
          {...rest}
        >
          <div className={s.icon} aria-hidden>
            {variantToIcon[variant]}
          </div>
          <div className={s.content}>
            <div className={s.title}>{title}</div>
            {description && <div className={s.desc}>{description}</div>}
          </div>
          {(primaryAction || secondaryAction) && (
            <div className={s.actions}>
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant ?? 'tertiary'}
                  size={secondaryAction.size ?? 'sm'}
                  error={secondaryAction.error}
                  color={secondaryAction.color}
                  label={secondaryAction.label}
                  onClick={secondaryAction.onClick}
                />
              )}
              {primaryAction && (
                <Button
                  variant={primaryAction.variant ?? 'primary'}
                  size={primaryAction.size ?? 'sm'}
                  error={primaryAction.error}
                  color={primaryAction.color}
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                />
              )}
            </div>
          )}
          <CloseButton
            onClose={() => {
              if (timerRef.current) {
                window.clearTimeout(timerRef.current);
                timerRef.current = null;
              }
              setClosing(false);
              setVisible(false);
              onClose?.();
            }}
          />
        </div>
      </div>
    </div>
  );
}

