'use client';

import type { ReactNode } from 'react';

/**
 * DashboardStatCard Props
 */
interface DashboardStatCardProps {
  /** Stat label */
  label: string;
  /** Stat value */
  value: string | number;
  /** Optional icon */
  icon?: ReactNode;
  /** Optional change indicator */
  change?: {
    value: string;
    positive?: boolean;
  };
  /** Background color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

const variantStyles = {
  default: 'bg-[var(--color-bg-surface)] border-[var(--color-border-default)]',
  primary: 'bg-[var(--color-brand-primary-50)] border-[var(--color-brand-primary-200)]',
  success: 'bg-[var(--color-success-50)] border-[var(--color-success-200)]',
  warning: 'bg-[var(--color-warning-50)] border-[var(--color-warning-200)]',
};

const iconBgStyles = {
  default: 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]',
  primary: 'bg-[var(--color-brand-primary-100)] text-[var(--color-brand-primary-600)]',
  success: 'bg-[var(--color-success-100)] text-[var(--color-success-600)]',
  warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-600)]',
};

/**
 * DashboardStatCard
 * 
 * Card component for displaying statistics/metrics on dashboards.
 */
export function DashboardStatCard({
  label,
  value,
  icon,
  change,
  variant = 'default',
}: DashboardStatCardProps) {
  return (
    <div
      className={`
        rounded-xl border p-4 lg:p-5
        ${variantStyles[variant]}
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[var(--color-text-secondary)] mb-1">
            {label}
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)]">
            {value}
          </p>
          {change && (
            <p
              className={`
                mt-1 text-sm font-medium
                ${change.positive ? 'text-[var(--color-success-600)]' : 'text-[var(--color-error-600)]'}
              `}
            >
              {change.positive ? '↑' : '↓'} {change.value}
            </p>
          )}
        </div>
        {icon && (
          <div
            className={`
              flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl
              flex items-center justify-center
              ${iconBgStyles[variant]}
            `}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardStatCard;

