/**
 * Design Tokens Index
 * 
 * Central export for all design tokens.
 * Import tokens from here for consistency.
 */

export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { radius } from './radius';
export { shadows } from './shadows';
export { zIndex } from './z-index';

// Re-export types
export type { Colors } from './colors';
export type { Typography } from './typography';
export type { Spacing } from './spacing';
export type { Radius } from './radius';
export type { Shadows } from './shadows';
export type { ZIndex } from './z-index';

// Aggregated tokens object for convenience
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { zIndex } from './z-index';

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  zIndex,
} as const;

