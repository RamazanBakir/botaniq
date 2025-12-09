import { type SVGProps } from 'react';

/**
 * Logo component props
 */
export interface LogoProps extends SVGProps<SVGSVGElement> {
  /** Logo variant */
  variant?: 'full' | 'mark';
  /** Size preset or custom size */
  size?: 'sm' | 'md' | 'lg' | number;
}

/**
 * Size mappings
 */
const sizeMap = {
  sm: { width: 100, height: 28 },
  md: { width: 140, height: 40 },
  lg: { width: 180, height: 52 },
};

/**
 * Logo
 * 
 * Botaniq brand logo component. Placeholder implementation
 * for Sprint 1 - will be replaced with actual brand assets.
 * 
 * @example
 * ```tsx
 * <Logo size="md" />
 * <Logo variant="mark" size={32} />
 * ```
 */
export function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  ...props
}: LogoProps) {
  const dimensions = typeof size === 'number' 
    ? { width: size, height: size * 0.29 }
    : sizeMap[size];

  if (variant === 'mark') {
    // Icon-only version
    const markSize = typeof size === 'number' ? size : sizeMap[size].height;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={markSize}
        height={markSize}
        fill="none"
        className={className}
        aria-label="Botaniq"
        role="img"
        {...props}
      >
        {/* Stylized wave/boat mark */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="var(--color-brand-primary-500)"
        />
        <path
          d="M10 24C12 20 16 18 20 18C24 18 28 20 30 24"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 20C15 17 17 15 20 15C23 15 25 17 26 20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="20"
          cy="13"
          r="2"
          fill="white"
        />
      </svg>
    );
  }

  // Full logo with text
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 40"
      width={dimensions.width}
      height={dimensions.height}
      fill="none"
      className={className}
      aria-label="Botaniq"
      role="img"
      {...props}
    >
      {/* Mark */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="var(--color-brand-primary-500)"
      />
      <path
        d="M10 24C12 20 16 18 20 18C24 18 28 20 30 24"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 20C15 17 17 15 20 15C23 15 25 17 26 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="20"
        cy="13"
        r="2"
        fill="white"
      />
      
      {/* Wordmark */}
      <text
        x="48"
        y="27"
        fontFamily="var(--font-family-sans)"
        fontSize="22"
        fontWeight="600"
        fill="var(--color-text-primary)"
        letterSpacing="-0.02em"
      >
        botaniq
      </text>
    </svg>
  );
}

export default Logo;

