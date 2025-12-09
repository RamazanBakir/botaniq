/**
 * Z-Index Tokens
 * 
 * Layering scale for stacking context management.
 * Prevents z-index wars by providing a consistent scale.
 */

export const zIndex = {
  // Base layers
  behind: -1,
  base: 0,
  
  // Content layers
  dropdown: 10,
  sticky: 20,
  
  // Overlay layers
  overlay: 30,
  modal: 40,
  popover: 50,
  
  // Top layers
  toast: 60,
  tooltip: 70,
  
  // Maximum layer (use sparingly)
  max: 9999,
} as const;

export type ZIndex = typeof zIndex;

