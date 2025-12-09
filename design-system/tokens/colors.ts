/**
 * Color Tokens
 * 
 * Semantic color palette for the Botaniq design system.
 * These tokens define the visual language and should be used
 * to generate CSS variables.
 */

export const colors = {
  // Brand / Primary - Deep ocean teal inspired by maritime themes
  brand: {
    primary: {
      50: '#e6f4f4',
      100: '#cce9ea',
      200: '#99d3d5',
      300: '#66bdc0',
      400: '#33a7ab',
      500: '#008b8b', // Main brand color - dark cyan
      600: '#007070',
      700: '#005555',
      800: '#003a3a',
      900: '#001f1f',
    },
  },

  // Neutral / Gray scale
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Accent colors for charts, highlights, and secondary actions
  accent: {
    // Ocean blue for data visualization and links
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Sunset orange for highlights and CTAs
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    // Coral for special accents
    coral: {
      50: '#fff5f5',
      100: '#ffe3e3',
      200: '#ffc9c9',
      300: '#ffa8a8',
      400: '#ff8787',
      500: '#ff6b6b',
      600: '#fa5252',
      700: '#f03e3e',
      800: '#e03131',
      900: '#c92a2a',
    },
  },

  // Feedback colors
  feedback: {
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  },

  // Background and surface colors
  background: {
    canvas: '#fafafa',      // Main app background
    surface: '#ffffff',     // Cards, panels, modals
    muted: '#f5f5f5',       // Subtle backgrounds, hover states
    elevated: '#ffffff',    // Elevated surfaces with shadows
  },

  // Text colors
  text: {
    primary: '#171717',     // Main text
    secondary: '#525252',   // Secondary, muted text
    tertiary: '#737373',    // Placeholder, disabled text
    inverse: '#ffffff',     // Text on dark backgrounds
    link: '#008b8b',        // Link color (brand primary)
  },

  // Border colors
  border: {
    default: '#e5e5e5',
    muted: '#f5f5f5',
    strong: '#d4d4d4',
  },
} as const;

export type Colors = typeof colors;

