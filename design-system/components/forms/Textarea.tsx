'use client';

import React, { forwardRef, useId } from 'react';
import { FormField } from './FormField';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Textarea size variant */
  textareaSize?: 'sm' | 'md' | 'lg';
  /** Full width */
  fullWidth?: boolean;
  /** Show character count */
  showCount?: boolean;
  /** Max character count */
  maxCount?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      textareaSize = 'md',
      fullWidth = true,
      showCount = false,
      maxCount,
      className = '',
      id,
      required,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const hasError = Boolean(error);
    const textareaId = id || generatedId;
    const currentLength = typeof value === 'string' ? value.length : 0;

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm min-h-[80px]',
      md: 'px-4 py-3 text-base min-h-[120px]',
      lg: 'px-4 py-3 text-lg min-h-[160px]',
    };

    const baseTextareaClasses = `
      w-full rounded-lg resize-y
      bg-[var(--color-bg-surface)]
      border transition-all duration-200
      placeholder:text-[var(--color-text-tertiary)]
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:opacity-50 disabled:cursor-not-allowed disabled:resize-none
      ${sizeClasses[textareaSize]}
      ${
        hasError
          ? 'border-[var(--color-error-500)] focus:border-[var(--color-error-500)] focus:ring-[var(--color-error-200)]'
          : 'border-[var(--color-border-default)] focus:border-[var(--color-brand-primary-500)] focus:ring-[var(--color-brand-primary-100)]'
      }
      ${disabled ? 'bg-[var(--color-bg-muted)]' : ''}
    `;

    const showCharCount = showCount || maxCount;

    return (
      <FormField
        label={label}
        helperText={!showCharCount ? helperText : undefined}
        error={error}
        required={required}
        id={textareaId}
        className={fullWidth ? 'w-full' : ''}
      >
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          disabled={disabled}
          value={value}
          maxLength={maxCount}
          className={`${baseTextareaClasses} ${className}`}
          aria-invalid={hasError}
          {...props}
        />
        
        {showCharCount && (
          <div className="flex justify-between mt-1.5">
            <span className="text-sm text-[var(--color-text-tertiary)]">
              {helperText}
            </span>
            <span
              className={`text-sm ${
                maxCount && currentLength >= maxCount
                  ? 'text-[var(--color-error-500)]'
                  : 'text-[var(--color-text-tertiary)]'
              }`}
            >
              {currentLength}
              {maxCount && `/${maxCount}`}
            </span>
          </div>
        )}
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

