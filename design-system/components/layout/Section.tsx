import { type ReactNode } from 'react';

/**
 * Section component props
 */
export interface SectionProps {
  /** Content to render inside the section */
  children: ReactNode;
  /** Section ID for navigation/anchoring */
  id?: string;
  /** Vertical padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Background variant */
  background?: 'transparent' | 'canvas' | 'surface' | 'muted';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Padding mappings (Tailwind classes)
 */
const paddingClasses: Record<NonNullable<SectionProps['padding']>, string> = {
  none: 'py-0',
  sm: 'py-8 md:py-12',       // 32px / 48px
  md: 'py-12 md:py-16',      // 48px / 64px
  lg: 'py-16 md:py-24',      // 64px / 96px
  xl: 'py-24 md:py-32',      // 96px / 128px
};

/**
 * Background mappings (Tailwind classes using CSS variables)
 */
const backgroundClasses: Record<NonNullable<SectionProps['background']>, string> = {
  transparent: 'bg-transparent',
  canvas: 'bg-[var(--color-bg-canvas)]',
  surface: 'bg-[var(--color-bg-surface)]',
  muted: 'bg-[var(--color-bg-muted)]',
};

/**
 * Section
 * 
 * A semantic section element with consistent vertical padding
 * and optional background variants. Used for page sections.
 * 
 * @example
 * ```tsx
 * <Section id="features" padding="lg" background="muted">
 *   <Container>
 *     <Heading>Features</Heading>
 *   </Container>
 * </Section>
 * ```
 */
export function Section({
  children,
  id,
  padding = 'md',
  background = 'transparent',
  className = '',
}: SectionProps) {
  const baseClasses = 'w-full';
  const paddingClass = paddingClasses[padding];
  const backgroundClass = backgroundClasses[background];
  
  const combinedClasses = [baseClasses, paddingClass, backgroundClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
}

export default Section;

