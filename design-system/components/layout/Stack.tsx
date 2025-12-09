import { type ReactNode, type ElementType } from 'react';

/**
 * Stack component props
 */
export interface StackProps {
  /** Content to render inside the stack */
  children: ReactNode;
  /** HTML element to render as */
  as?: ElementType;
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Horizontal alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Content justification */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Gap size mappings (Tailwind classes)
 */
const gapClasses: Record<NonNullable<StackProps['gap']>, string> = {
  none: 'gap-0',
  xs: 'gap-1',      // 4px
  sm: 'gap-2',      // 8px
  md: 'gap-4',      // 16px
  lg: 'gap-6',      // 24px
  xl: 'gap-8',      // 32px
  '2xl': 'gap-12',  // 48px
  '3xl': 'gap-16',  // 64px
};

/**
 * Alignment mappings (Tailwind classes)
 */
const alignClasses: Record<NonNullable<StackProps['align']>, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

/**
 * Justify mappings (Tailwind classes)
 */
const justifyClasses: Record<NonNullable<StackProps['justify']>, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

/**
 * Stack
 * 
 * A vertical flex layout component that stacks children with consistent
 * spacing. Useful for creating vertical flows of content.
 * 
 * @example
 * ```tsx
 * <Stack gap="md" align="center">
 *   <Heading>Title</Heading>
 *   <Text>Description</Text>
 * </Stack>
 * ```
 */
export function Stack({
  children,
  as: Component = 'div',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = '',
}: StackProps) {
  const baseClasses = 'flex flex-col';
  const gapClass = gapClasses[gap];
  const alignClass = alignClasses[align];
  const justifyClass = justifyClasses[justify];
  
  const combinedClasses = [baseClasses, gapClass, alignClass, justifyClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
}

export default Stack;

