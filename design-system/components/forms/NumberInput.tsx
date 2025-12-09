'use client';

import React, { forwardRef, useId } from 'react';
import { FormField } from './FormField';

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Input size variant */
  inputSize?: 'sm' | 'md' | 'lg';
  /** Prefix text (e.g., "$") */
  prefix?: string;
  /** Suffix text (e.g., "ft", "m") */
  suffix?: string;
  /** Full width */
  fullWidth?: boolean;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = 'md',
      prefix,
      suffix,
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
      sm: 'h-9 text-sm',
      md: 'h-11 text-base',
      lg: 'h-12 text-lg',
    };

    const inputPadding = {
      sm: prefix ? 'pl-8' : 'pl-3',
      md: prefix ? 'pl-10' : 'pl-4',
      lg: prefix ? 'pl-12' : 'pl-4',
    };

    const baseInputClasses = `
      w-full rounded-lg
      bg-[var(--color-bg-surface)]
      border transition-all duration-200
      placeholder:text-[var(--color-text-tertiary)]
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:opacity-50 disabled:cursor-not-allowed
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
      ${sizeClasses[inputSize]}
      ${inputPadding[inputSize]}
      ${suffix ? 'pr-12' : 'pr-4'}
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
          {prefix && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] font-medium">
              {prefix}
            </div>
          )}
          
          <input
            ref={ref}
            type="number"
            id={inputId}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} ${className}`}
            aria-invalid={hasError}
            {...props}
          />
          
          {suffix && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)] font-medium">
              {suffix}
            </div>
          )}
        </div>
      </FormField>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

