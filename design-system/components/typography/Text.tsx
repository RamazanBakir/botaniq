import { type ReactNode, type ElementType } from 'react';

/**
 * Text variant types
 */
export type TextVariant = 'body' | 'small' | 'caption';

/**
 * Text component props
 */
export interface TextProps {
  /** Content to render */
  children: ReactNode;
  /** Visual variant (affects size, line height) */
  variant?: TextVariant;
  /** HTML element to render as */
  as?: 'p' | 'span' | 'div' | 'label';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Text color */
  color?: 'default' | 'secondary' | 'muted' | 'brand' | 'success' | 'warning' | 'error' | 'inherit';
  /** Font weight */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Variant style mappings (Tailwind classes)
 */
const variantClasses: Record<TextVariant, string> = {
  body: 'text-base leading-[1.6]',
  small: 'text-sm leading-[1.5]',
  caption: 'text-xs leading-[1.4] tracking-wide',
};

/**
 * Default HTML elements for each variant
 */
const defaultElements: Record<TextVariant, ElementType> = {
  body: 'p',
  small: 'p',
  caption: 'span',
};

/**
 * Alignment mappings (Tailwind classes)
 */
const alignClasses: Record<NonNullable<TextProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

/**
 * Color mappings (Tailwind classes using CSS variables)
 */
const colorClasses: Record<NonNullable<TextProps['color']>, string> = {
  default: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  muted: 'text-[var(--color-text-tertiary)]',
  brand: 'text-[var(--color-brand-primary-600)]',
  success: 'text-[var(--color-success-600)]',
  warning: 'text-[var(--color-warning-600)]',
  error: 'text-[var(--color-error-600)]',
  inherit: 'text-inherit',
};

/**
 * Weight mappings (Tailwind classes)
 */
const weightClasses: Record<NonNullable<TextProps['weight']>, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

/**
 * Text
 * 
 * A typographic component for body text with consistent styling
 * based on the design system tokens. Supports various sizes,
 * colors, and weights.
 * 
 * @example
 * ```tsx
 * <Text>This is body text with default styling.</Text>
 * <Text variant="small" color="secondary">
 *   Secondary information in smaller text.
 * </Text>
 * <Text variant="caption" color="muted">
 *   Caption text for labels and metadata.
 * </Text>
 * ```
 */
export function Text({
  children,
  variant = 'body',
  as,
  align = 'left',
  color = 'default',
  weight = 'regular',
  className = '',
}: TextProps) {
  const Component = as || defaultElements[variant];
  
  const variantClass = variantClasses[variant];
  const alignClass = alignClasses[align];
  const colorClass = colorClasses[color];
  const weightClass = weightClasses[weight];
  
  const combinedClasses = [
    'font-sans',
    variantClass,
    alignClass,
    colorClass,
    weightClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
}

export default Text;

