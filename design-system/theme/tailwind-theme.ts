/**
 * Tailwind Theme Configuration
 * 
 * Maps CSS variables to Tailwind theme values.
 * Used for reference and documentation.
 * 
 * In Tailwind v4, theme customization is done via CSS @theme blocks
 * which read from CSS variables directly. This file serves as a
 * TypeScript reference for the theme structure.
 */

export const tailwindTheme = {
  colors: {
    // Brand
    brand: {
      50: 'var(--color-brand-primary-50)',
      100: 'var(--color-brand-primary-100)',
      200: 'var(--color-brand-primary-200)',
      300: 'var(--color-brand-primary-300)',
      400: 'var(--color-brand-primary-400)',
      500: 'var(--color-brand-primary-500)',
      600: 'var(--color-brand-primary-600)',
      700: 'var(--color-brand-primary-700)',
      800: 'var(--color-brand-primary-800)',
      900: 'var(--color-brand-primary-900)',
    },
    // Neutral
    neutral: {
      50: 'var(--color-neutral-50)',
      100: 'var(--color-neutral-100)',
      200: 'var(--color-neutral-200)',
      300: 'var(--color-neutral-300)',
      400: 'var(--color-neutral-400)',
      500: 'var(--color-neutral-500)',
      600: 'var(--color-neutral-600)',
      700: 'var(--color-neutral-700)',
      800: 'var(--color-neutral-800)',
      900: 'var(--color-neutral-900)',
      950: 'var(--color-neutral-950)',
    },
    // Semantic
    background: {
      canvas: 'var(--color-bg-canvas)',
      surface: 'var(--color-bg-surface)',
      muted: 'var(--color-bg-muted)',
      elevated: 'var(--color-bg-elevated)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
      inverse: 'var(--color-text-inverse)',
      link: 'var(--color-text-link)',
    },
    border: {
      default: 'var(--color-border-default)',
      muted: 'var(--color-border-muted)',
      strong: 'var(--color-border-strong)',
    },
    // Feedback
    success: {
      50: 'var(--color-success-50)',
      500: 'var(--color-success-500)',
      600: 'var(--color-success-600)',
    },
    warning: {
      50: 'var(--color-warning-50)',
      500: 'var(--color-warning-500)',
      600: 'var(--color-warning-600)',
    },
    error: {
      50: 'var(--color-error-50)',
      500: 'var(--color-error-500)',
      600: 'var(--color-error-600)',
    },
    info: {
      50: 'var(--color-info-50)',
      500: 'var(--color-info-500)',
      600: 'var(--color-info-600)',
    },
  },
  fontFamily: {
    sans: 'var(--font-family-sans)',
    mono: 'var(--font-family-mono)',
  },
  fontSize: {
    display: ['var(--font-size-display)', { lineHeight: 'var(--line-height-display)' }],
    h1: ['var(--font-size-h1)', { lineHeight: 'var(--line-height-h1)' }],
    h2: ['var(--font-size-h2)', { lineHeight: 'var(--line-height-h2)' }],
    h3: ['var(--font-size-h3)', { lineHeight: 'var(--line-height-h3)' }],
    h4: ['var(--font-size-h4)', { lineHeight: 'var(--line-height-h4)' }],
    body: ['var(--font-size-body)', { lineHeight: 'var(--line-height-body)' }],
    small: ['var(--font-size-small)', { lineHeight: 'var(--line-height-small)' }],
    caption: ['var(--font-size-caption)', { lineHeight: 'var(--line-height-caption)' }],
  },
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
    '3xl': 'var(--spacing-3xl)',
    '4xl': 'var(--spacing-4xl)',
  },
  borderRadius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    '3xl': 'var(--radius-3xl)',
    full: 'var(--radius-full)',
  },
  boxShadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    '2xl': 'var(--shadow-2xl)',
    inner: 'var(--shadow-inner)',
    ring: 'var(--shadow-ring)',
  },
  zIndex: {
    behind: 'var(--z-behind)',
    base: 'var(--z-base)',
    dropdown: 'var(--z-dropdown)',
    sticky: 'var(--z-sticky)',
    overlay: 'var(--z-overlay)',
    modal: 'var(--z-modal)',
    popover: 'var(--z-popover)',
    toast: 'var(--z-toast)',
    tooltip: 'var(--z-tooltip)',
    max: 'var(--z-max)',
  },
} as const;

export type TailwindTheme = typeof tailwindTheme;

