/**
 * Border Radius Tokens
 * 
 * Consistent border radius scale for rounded corners.
 */

export const radius = {
  none: '0',
  sm: '0.25rem',     // 4px - Subtle rounding
  md: '0.5rem',      // 8px - Default rounding
  lg: '0.75rem',     // 12px - Card rounding
  xl: '1rem',        // 16px - Large card rounding
  '2xl': '1.5rem',   // 24px - Modal rounding
  '3xl': '2rem',     // 32px - Extra large rounding
  full: '9999px',    // Pill shape
} as const;

export type Radius = typeof radius;

