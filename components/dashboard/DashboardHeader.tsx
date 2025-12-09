'use client';

import type { ReactNode } from 'react';

/**
 * DashboardHeader Props
 */
interface DashboardHeaderProps {
  /** Main title */
  title: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Primary action button */
  primaryAction?: ReactNode;
  /** Secondary action */
  secondaryAction?: ReactNode;
  /** Role badge */
  badge?: ReactNode;
}

/**
 * DashboardHeader
 * 
 * Consistent header component for all dashboard types.
 * Shows title, subtitle, optional badge, and action buttons.
 */
export function DashboardHeader({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  badge,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8 lg:mb-12">
      {/* Badge */}
      {badge && <div className="mb-4">{badge}</div>}

      {/* Title and Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base lg:text-lg text-[var(--color-text-secondary)] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
            {secondaryAction}
            {primaryAction}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHeader;

