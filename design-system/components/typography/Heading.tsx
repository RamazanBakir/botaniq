import { type ReactNode, type ElementType } from 'react';

/**
 * Heading variant types
 */
export type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4';

/**
 * Heading component props
 */
export interface HeadingProps {
  /** Content to render */
  children: ReactNode;
  /** Visual variant (affects size, weight, spacing) */
  variant?: HeadingVariant;
  /** HTML element to render as (defaults to matching variant) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Text color */
  color?: 'default' | 'muted' | 'brand' | 'inherit';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Variant style mappings (Tailwind classes using CSS variables)
 * Includes responsive scaling for larger displays
 */
const variantClasses: Record<HeadingVariant, string> = {
  display: `
    text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]
    leading-[1.1]
    tracking-[-0.02em]
    font-bold
  `.replace(/\s+/g, ' ').trim(),
  h1: `
    text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]
    leading-[1.2]
    tracking-[-0.02em]
    font-bold
  `.replace(/\s+/g, ' ').trim(),
  h2: `
    text-[1.5rem] md:text-[1.75rem] lg:text-[2rem]
    leading-[1.25]
    tracking-[-0.01em]
    font-semibold
  `.replace(/\s+/g, ' ').trim(),
  h3: `
    text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]
    leading-[1.3]
    tracking-[-0.01em]
    font-semibold
  `.replace(/\s+/g, ' ').trim(),
  h4: `
    text-[1.125rem] md:text-[1.25rem]
    leading-[1.4]
    tracking-normal
    font-medium
  `.replace(/\s+/g, ' ').trim(),
};

/**
 * Default HTML elements for each variant
 */
const defaultElements: Record<HeadingVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

/**
 * Alignment mappings (Tailwind classes)
 */
const alignClasses: Record<NonNullable<HeadingProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Color mappings (Tailwind classes using CSS variables)
 */
const colorClasses: Record<NonNullable<HeadingProps['color']>, string> = {
  default: 'text-[var(--color-text-primary)]',
  muted: 'text-[var(--color-text-secondary)]',
  brand: 'text-[var(--color-brand-primary-600)]',
  inherit: 'text-inherit',
};

/**
 * Heading
 * 
 * A typographic component for headings with consistent styling
 * based on the design system tokens. Supports responsive scaling
 * and semantic HTML element control.
 * 
 * @example
 * ```tsx
 * <Heading variant="h1">Welcome to Botaniq</Heading>
 * <Heading variant="h2" align="center" color="muted">
 *   Discover your perfect boat
 * </Heading>
 * ```
 */
export function Heading({
  children,
  variant = 'h2',
  as,
  align = 'left',
  color = 'default',
  className = '',
}: HeadingProps) {
  const Component = as || defaultElements[variant];
  
  const variantClass = variantClasses[variant];
  const alignClass = alignClasses[align];
  const colorClass = colorClasses[color];
  
  const combinedClasses = [
    'font-sans',
    variantClass,
    alignClass,
    colorClass,
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

export default Heading;

