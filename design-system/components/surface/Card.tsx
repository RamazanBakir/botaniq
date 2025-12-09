import { type ReactNode, type ElementType } from 'react';

/**
 * Card padding variants
 */
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/**
 * Card shadow variants
 */
export type CardShadow = 'none' | 'sm' | 'md' | 'lg';

/**
 * Card component props
 */
export interface CardProps {
  /** Content to render inside the card */
  children: ReactNode;
  /** HTML element to render as */
  as?: ElementType;
  /** Padding size */
  padding?: CardPadding;
  /** Shadow intensity */
  shadow?: CardShadow;
  /** Whether the card has a border */
  bordered?: boolean;
  /** Whether the card is interactive (adds hover states) */
  interactive?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Padding mappings
 */
const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3 md:p-4',
  md: 'p-4 md:p-6',
  lg: 'p-6 md:p-8',
};

/**
 * Shadow mappings
 */
const shadowClasses: Record<CardShadow, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

/**
 * Card
 *
 * A surface component for grouping related content.
 * Uses design system tokens for background, border, shadow, and radius.
 *
 * @example
 * ```tsx
 * <Card padding="md" shadow="sm">
 *   <Heading variant="h3">Card Title</Heading>
 *   <Text>Card content goes here.</Text>
 * </Card>
 *
 * <Card interactive bordered>
 *   <Text>Clickable card content</Text>
 * </Card>
 * ```
 */
export function Card({
  children,
  as: Component = 'div',
  padding = 'md',
  shadow = 'sm',
  bordered = true,
  interactive = false,
  className = '',
}: CardProps) {
  const baseClasses = `
    bg-[var(--color-bg-surface)]
    rounded-[var(--radius-xl)]
    overflow-hidden
  `.replace(/\s+/g, ' ').trim();

  const paddingClass = paddingClasses[padding];
  const shadowClass = shadowClasses[shadow];
  const borderClass = bordered ? 'border border-[var(--color-border-default)]' : '';
  const interactiveClass = interactive
    ? 'cursor-pointer transition-all duration-[var(--transition-normal)] hover:shadow-md hover:border-[var(--color-border-strong)]'
    : '';

  const combinedClasses = [
    baseClasses,
    paddingClass,
    shadowClass,
    borderClass,
    interactiveClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Component className={combinedClasses}>{children}</Component>;
}

export default Card;

