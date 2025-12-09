'use client';

import React, { forwardRef, useId } from 'react';
import { FormField } from './FormField';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Input size variant */
  inputSize?: 'sm' | 'md' | 'lg';
  /** Left icon/addon */
  leftIcon?: React.ReactNode;
  /** Right icon/addon */
  rightIcon?: React.ReactNode;
  /** Full width */
  fullWidth?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = 'md',
      leftIcon,
      rightIcon,
      fullWidth = true,
      className = '',
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const hasError = Boolean(error);
    const inputId = id || generatedId;

    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-12 px-4 text-lg',
    };

    const baseInputClasses = `
      w-full rounded-lg
      bg-[var(--color-bg-surface)]
      border transition-all duration-200
      placeholder:text-[var(--color-text-tertiary)]
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:opacity-50 disabled:cursor-not-allowed
      ${sizeClasses[inputSize]}
      ${leftIcon ? 'pl-10' : ''}
      ${rightIcon ? 'pr-10' : ''}
      ${
        hasError
          ? 'border-[var(--color-error-500)] focus:border-[var(--color-error-500)] focus:ring-[var(--color-error-200)]'
          : 'border-[var(--color-border-default)] focus:border-[var(--color-brand-primary-500)] focus:ring-[var(--color-brand-primary-100)]'
      }
      ${disabled ? 'bg-[var(--color-bg-muted)]' : ''}
    `;

    return (
      <FormField
        label={label}
        helperText={helperText}
        error={error}
        required={required}
        id={inputId}
        className={fullWidth ? 'w-full' : ''}
      >
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} ${className}`}
            aria-invalid={hasError}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]">
              {rightIcon}
            </div>
          )}
        </div>
      </FormField>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;

