/**
 * Shadow Tokens
 * 
 * Box shadow scale for elevation and depth.
 * Uses neutral colors for consistency.
 */

export const shadows = {
  none: 'none',
  
  // Subtle shadow for hover states and slight elevation
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  
  // Default shadow for cards and containers
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  
  // Elevated shadow for dropdowns and popovers
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  
  // Strong shadow for modals and overlays
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  
  // Maximum elevation
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  
  // Inner shadow for inset effects
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  
  // Ring shadow for focus states (brand color)
  ring: '0 0 0 3px rgb(0 139 139 / 0.2)',
  ringError: '0 0 0 3px rgb(239 68 68 / 0.2)',
} as const;

export type Shadows = typeof shadows;

