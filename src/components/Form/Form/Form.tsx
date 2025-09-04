/**
 * @category Form Elements
 */

import React, { useState, useCallback } from 'react';
import { Notification } from '../../Notification/Notification';
import s from './Form.module.scss';

export type FormMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type FormEncoding = 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded';

/** Form component props */
export interface FormProps {
  /** API endpoint URL */
  endpoint: string;
  /** Form name attribute */
  name?: string;
  /** HTTP method */
  method?: FormMethod;
  /** Content type */
  encoding?: FormEncoding;
  /** Form submission handler */
  onSubmit?: (data: FormData | Record<string, string> | URLSearchParams | string) => Promise<unknown>;
  /** Success callback */
  onSuccess?: (response: unknown) => void;
  /** Error callback */
  onError?: (error: unknown) => void;
  /** Success message */
  successMessage?: string;
  /** Error message */
  errorMessage?: string;
  /** Show loading state */
  loading?: boolean;
  /** Disable form */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Form children */
  children: React.ReactNode;
  /** Additional form attributes */
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
}

export function Form({
  endpoint,
  name,
  method = 'POST',
  encoding = 'application/json',
  onSubmit,
  onSuccess,
  onError,
  successMessage = 'Form submitted successfully!',
  errorMessage = 'An error occurred while submitting the form.',
  loading = false,
  disabled = false,
  className,
  children,
  formProps,
}: FormProps): React.ReactElement {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isFormSubmitting = loading || isSubmitting;
  const [notification, setNotification] = useState<{
    open: boolean;
    variant: 'success' | 'error';
    message: string;
  }>({
    open: false,
    variant: 'success',
    message: '',
  });

  const showNotification = useCallback((variant: 'success' | 'error', message: string) => {
    setNotification({
      open: true,
      variant,
      message,
    });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, open: false }));
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (disabled || isFormSubmitting) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      let data: FormData | Record<string, string> | URLSearchParams | string;

      // Convert FormData based on encoding
      if (encoding === 'application/json') {
        data = Object.fromEntries(formData.entries()) as Record<string, string>;
      } else if (encoding === 'multipart/form-data') {
        data = formData;
      } else {
        data = new URLSearchParams(formData as unknown as Record<string, string>);
      }

      let response: Response | unknown;
      console.log('Form Data', data);

      if (onSubmit) {
        // Use custom submit handler
        response = await onSubmit(data);
      } else {
        // Default fetch request
        const fetchOptions: RequestInit = {
          method,
          headers: {},
        };

        if (encoding === 'application/json') {
          fetchOptions.headers = {
            'Content-Type': 'application/json',
          };
          fetchOptions.body = JSON.stringify(data);
        } else if (encoding === 'multipart/form-data') {
          // Don't set Content-Type for FormData, let browser set it
          fetchOptions.body = data as FormData;
        } else {
          fetchOptions.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
          };
          fetchOptions.body = data as URLSearchParams;
        }

        const fetchResponse = await fetch(endpoint, fetchOptions);

        if (!fetchResponse.ok) {
          throw new Error(`HTTP error! status: ${fetchResponse.status}`);
        }

        // Try to parse JSON response
        try {
          response = await fetchResponse.json() as unknown;
        } catch {
          // If not JSON, use text
          response = await fetchResponse.text() as unknown;
        }
      }

      // Success
      onSuccess?.(response);
      showNotification('success', successMessage);
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      const errorMsg = error instanceof Error ? error.message : errorMessage;
      onError?.(error);
      showNotification('error', errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    disabled,
    isFormSubmitting,
    endpoint,
    method,
    encoding,
    onSubmit,
    onSuccess,
    onError,
    successMessage,
    errorMessage,
    showNotification,
  ]);

  return (
    <>
      <form
        name={name}
        className={`${s.form} ${className || ''}`}
        onSubmit={handleSubmit}
        {...formProps}
      >
        <fieldset disabled={disabled || isFormSubmitting}>
          {children}
        </fieldset>
      </form>

      <Notification
        open={notification.open}
        variant={notification.variant}
        title={notification.variant === 'success' ? 'Success' : 'Error'}
        description={notification.message}
        onClose={hideNotification}
        position="top-right"
        durationMs={5000}
      />
    </>
  );
}
