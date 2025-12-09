import { type ReactNode, type ElementType } from 'react';

/**
 * Container component props
 */
export interface ContainerProps {
  /** Content to render inside the container */
  children: ReactNode;
  /** HTML element to render as */
  as?: ElementType;
  /** Maximum width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Additional CSS classes */
  className?: string;
  /** Center the container horizontally */
  centered?: boolean;
}

/**
 * Max width mappings (Tailwind classes)
 */
const maxWidthClasses: Record<NonNullable<ContainerProps['maxWidth']>, string> = {
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
  full: 'max-w-full',
};

/**
 * Container
 * 
 * A responsive container that constrains content width and applies
 * consistent horizontal padding. Used as the primary content wrapper
 * throughout the application.
 * 
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <Content />
 * </Container>
 * ```
 */
export function Container({
  children,
  as: Component = 'div',
  maxWidth = 'xl',
  className = '',
  centered = true,
}: ContainerProps) {
  const baseClasses = 'w-full px-4 md:px-6 lg:px-8';
  const widthClass = maxWidthClasses[maxWidth];
  const centerClass = centered ? 'mx-auto' : '';
  
  const combinedClasses = [baseClasses, widthClass, centerClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
}

export default Container;

