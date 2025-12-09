'use client';

import React from 'react';

export interface FormFieldProps {
  /** Label text */
  label?: string;
  /** Helper text shown below the input */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Unique ID for the field */
  id?: string;
  /** Child input element */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export function FormField({
  label,
  helperText,
  error,
  required = false,
  id,
  children,
  className = '',
}: FormFieldProps) {
  const hasError = Boolean(error);

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[var(--color-text-primary)]"
        >
          {label}
          {required && (
            <span className="ml-1 text-[var(--color-error-500)]">*</span>
          )}
        </label>
      )}
      
      {children}

      {(helperText || error) && (
        <p
          className={`text-sm ${
            hasError
              ? 'text-[var(--color-error-600)]'
              : 'text-[var(--color-text-tertiary)]'
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
}

export default FormField;

