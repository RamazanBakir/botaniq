'use client';

import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { Spinner } from '../feedback/Spinner';

/**
 * Button variant types
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * Button size types
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: ReactNode;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size variant */
  size?: ButtonSize;
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Base button styles
 */
const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-medium
  rounded-[var(--radius-lg)]
  transition-all duration-[var(--transition-normal)]
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  focus-visible:ring-[var(--color-brand-primary-500)]
  disabled:opacity-50 disabled:cursor-not-allowed
  select-none
`.replace(/\s+/g, ' ').trim();

/**
 * Variant style mappings
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-brand-primary-500)]
    text-[var(--color-text-inverse)]
    hover:bg-[var(--color-brand-primary-600)]
    active:bg-[var(--color-brand-primary-700)]
    shadow-sm hover:shadow-md
  `.replace(/\s+/g, ' ').trim(),
  secondary: `
    bg-[var(--color-bg-surface)]
    text-[var(--color-text-primary)]
    border border-[var(--color-border-default)]
    hover:bg-[var(--color-bg-muted)]
    hover:border-[var(--color-border-strong)]
    active:bg-[var(--color-neutral-200)]
  `.replace(/\s+/g, ' ').trim(),
  ghost: `
    bg-transparent
    text-[var(--color-text-primary)]
    hover:bg-[var(--color-bg-muted)]
    active:bg-[var(--color-neutral-200)]
  `.replace(/\s+/g, ' ').trim(),
};

/**
 * Size style mappings
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};

/**
 * Button
 *
 * A versatile button component with multiple variants and sizes.
 * Supports loading state with an integrated spinner.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" isLoading>
 *   Submitting...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const combinedClasses = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={combinedClasses}
        {...props}
      >
        {isLoading && (
          <Spinner
            size={size === 'sm' ? 'sm' : 'md'}
            className={variant === 'primary' ? 'text-white' : ''}
          />
        )}
        <span className={isLoading ? 'opacity-70' : ''}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

