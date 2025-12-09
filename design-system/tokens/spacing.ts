/**
 * Spacing Tokens
 * 
 * Consistent spacing scale for margins, paddings, and gaps.
 * Based on a 4px base unit for visual harmony.
 */

export const spacing = {
  // Pixel values for reference (converted to rem in CSS variables)
  px: {
    0: '0',
    1: '0.0625rem',   // 1px
    2: '0.125rem',    // 2px
    4: '0.25rem',     // 4px
    6: '0.375rem',    // 6px
    8: '0.5rem',      // 8px
    10: '0.625rem',   // 10px
    12: '0.75rem',    // 12px
    14: '0.875rem',   // 14px
    16: '1rem',       // 16px
    20: '1.25rem',    // 20px
    24: '1.5rem',     // 24px
    28: '1.75rem',    // 28px
    32: '2rem',       // 32px
    40: '2.5rem',     // 40px
    48: '3rem',       // 48px
    56: '3.5rem',     // 56px
    64: '4rem',       // 64px
    80: '5rem',       // 80px
    96: '6rem',       // 96px
    128: '8rem',      // 128px
  },

  // Semantic spacing aliases for common use cases
  semantic: {
    none: '0',
    xs: '0.25rem',    // 4px - Tight spacing
    sm: '0.5rem',     // 8px - Small spacing
    md: '1rem',       // 16px - Medium spacing (default)
    lg: '1.5rem',     // 24px - Large spacing
    xl: '2rem',       // 32px - Extra large spacing
    '2xl': '3rem',    // 48px - Section spacing
    '3xl': '4rem',    // 64px - Large section spacing
    '4xl': '6rem',    // 96px - Hero spacing
  },

  // Container-specific spacing
  container: {
    paddingX: {
      mobile: '1rem',     // 16px
      tablet: '1.5rem',   // 24px
      desktop: '2rem',    // 32px
    },
    paddingY: {
      section: '4rem',    // 64px
      page: '2rem',       // 32px
    },
  },
} as const;

export type Spacing = typeof spacing;

