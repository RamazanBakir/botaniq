'use client';

import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

/**
 * DashboardSection Props
 */
interface DashboardSectionProps {
  /** Section title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Action element (e.g., "View all" link) */
  action?: {
    label: string;
    href: string;
  };
  /** Custom action element */
  customAction?: ReactNode;
  /** Section content */
  children: ReactNode;
  /** Optional className for the container */
  className?: string;
}

/**
 * DashboardSection
 * 
 * Reusable section component for dashboard content blocks.
 * Provides consistent header with title/subtitle/action and content area.
 */
export function DashboardSection({
  title,
  subtitle,
  action,
  customAction,
  children,
  className = '',
}: DashboardSectionProps) {
  return (
    <section className={`mb-8 lg:mb-10 ${className}`}>
      {/* Section Header */}
      <div className="flex items-start justify-between gap-4 mb-4 lg:mb-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg lg:text-xl font-semibold text-[var(--color-text-primary)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Action */}
        {action && (
          <Link
            href={action.href}
            className="flex-shrink-0 text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
          >
            {action.label}
            <svg
              className="inline-block ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
        {customAction}
      </div>

      {/* Section Content */}
      <div>{children}</div>
    </section>
  );
}

export default DashboardSection;

