import { type SVGProps } from 'react';

/**
 * Spinner size types
 */
export type SpinnerSize = 'sm' | 'md' | 'lg';

/**
 * Spinner component props
 */
export interface SpinnerProps extends SVGProps<SVGSVGElement> {
  /** Size variant */
  size?: SpinnerSize;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  label?: string;
}

/**
 * Size mappings
 */
const sizeMap: Record<SpinnerSize, { width: number; height: number }> = {
  sm: { width: 16, height: 16 },
  md: { width: 20, height: 20 },
  lg: { width: 32, height: 32 },
};

/**
 * Spinner
 *
 * A simple, accessible loading spinner using CSS animations.
 * Uses currentColor so it inherits text color from parent.
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * <Spinner size="lg" label="Loading results..." />
 * ```
 */
export function Spinner({
  size = 'md',
  className = '',
  label = 'Loading',
  ...props
}: SpinnerProps) {
  const { width, height } = sizeMap[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`animate-spin ${className}`}
      role="status"
      aria-label={label}
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className="opacity-25"
        strokeWidth="3"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        className="opacity-75"
        strokeWidth="3"
      />
    </svg>
  );
}

export default Spinner;

