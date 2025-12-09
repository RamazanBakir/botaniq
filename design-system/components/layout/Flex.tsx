import { type ReactNode, type ElementType } from 'react';

/**
 * Flex component props
 */
export interface FlexProps {
  /** Content to render inside the flex container */
  children: ReactNode;
  /** HTML element to render as */
  as?: ElementType;
  /** Flex direction */
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Alignment on cross axis */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Content justification on main axis */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Flex wrap behavior */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Direction mappings (Tailwind classes)
 */
const directionClasses: Record<NonNullable<FlexProps['direction']>, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
};

/**
 * Gap size mappings (Tailwind classes)
 */
const gapClasses: Record<NonNullable<FlexProps['gap']>, string> = {
  none: 'gap-0',
  xs: 'gap-1',      // 4px
  sm: 'gap-2',      // 8px
  md: 'gap-4',      // 16px
  lg: 'gap-6',      // 24px
  xl: 'gap-8',      // 32px
  '2xl': 'gap-12',  // 48px
};

/**
 * Alignment mappings (Tailwind classes)
 */
const alignClasses: Record<NonNullable<FlexProps['align']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

/**
 * Justify mappings (Tailwind classes)
 */
const justifyClasses: Record<NonNullable<FlexProps['justify']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

/**
 * Wrap mappings (Tailwind classes)
 */
const wrapClasses: Record<NonNullable<FlexProps['wrap']>, string> = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

/**
 * Flex
 * 
 * A flexible layout component for creating flex-based layouts.
 * Provides a semantic, prop-based API for common flex patterns.
 * 
 * @example
 * ```tsx
 * <Flex direction="row" gap="md" align="center" justify="between">
 *   <Logo />
 *   <Navigation />
 * </Flex>
 * ```
 */
export function Flex({
  children,
  as: Component = 'div',
  direction = 'row',
  gap = 'none',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  className = '',
}: FlexProps) {
  const baseClasses = 'flex';
  const directionClass = directionClasses[direction];
  const gapClass = gapClasses[gap];
  const alignClass = alignClasses[align];
  const justifyClass = justifyClasses[justify];
  const wrapClass = wrapClasses[wrap];
  
  const combinedClasses = [
    baseClasses,
    directionClass,
    gapClass,
    alignClass,
    justifyClass,
    wrapClass,
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

export default Flex;

