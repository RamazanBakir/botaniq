'use client';

import React, { forwardRef, useId } from 'react';
import { FormField } from './FormField';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Options array */
  options: SelectOption[];
  /** Placeholder option */
  placeholder?: string;
  /** Select size variant */
  selectSize?: 'sm' | 'md' | 'lg';
  /** Full width */
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      placeholder = 'Select an option',
      selectSize = 'md',
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
    const selectId = id || generatedId;

    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-12 px-4 text-lg',
    };

    const baseSelectClasses = `
      w-full rounded-lg appearance-none cursor-pointer
      bg-[var(--color-bg-surface)]
      border transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:opacity-50 disabled:cursor-not-allowed
      pr-10
      ${sizeClasses[selectSize]}
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
        id={selectId}
        className={fullWidth ? 'w-full' : ''}
      >
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled}
            className={`${baseSelectClasses} ${className}`}
            aria-invalid={hasError}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Dropdown Arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-tertiary)]">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </FormField>
    );
  }
);

Select.displayName = 'Select';

export default Select;

