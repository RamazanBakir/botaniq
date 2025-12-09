/**
 * Typography Tokens
 * 
 * Font families, sizes, weights, and line heights for the Botaniq design system.
 * These values will be mapped to CSS variables and Tailwind theme.
 */

export const typography = {
  // Font families
  fontFamily: {
    sans: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  },

  // Font sizes with corresponding line heights
  // Values in rem for accessibility (respects user font size preferences)
  fontSize: {
    // Display - Hero sections, large statements
    display: {
      size: '3.5rem',      // 56px
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    // Headings
    h1: {
      size: '2.5rem',      // 40px
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h2: {
      size: '2rem',        // 32px
      lineHeight: '1.25',
      letterSpacing: '-0.01em',
    },
    h3: {
      size: '1.5rem',      // 24px
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
    },
    h4: {
      size: '1.25rem',     // 20px
      lineHeight: '1.4',
      letterSpacing: '0',
    },
    // Body text
    body: {
      size: '1rem',        // 16px
      lineHeight: '1.6',
      letterSpacing: '0',
    },
    // Small text
    small: {
      size: '0.875rem',    // 14px
      lineHeight: '1.5',
      letterSpacing: '0',
    },
    // Caption text
    caption: {
      size: '0.75rem',     // 12px
      lineHeight: '1.4',
      letterSpacing: '0.01em',
    },
  },

  // Font weights
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export type Typography = typeof typography;

