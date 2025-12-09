'use client';

import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

/**
 * DashboardActionCard Props
 */
interface DashboardActionCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Icon element */
  icon: ReactNode;
  /** Link href */
  href: string;
  /** Icon background color variant */
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

const iconBgStyles = {
  primary: 'bg-[var(--color-brand-primary-100)] text-[var(--color-brand-primary-600)]',
  secondary: 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]',
  success: 'bg-[var(--color-success-100)] text-[var(--color-success-600)]',
  warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-600)]',
};

/**
 * DashboardActionCard
 * 
 * Clickable action card for dashboard shortcuts.
 */
export function DashboardActionCard({
  title,
  description,
  icon,
  href,
  variant = 'primary',
}: DashboardActionCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5 hover:border-[var(--color-brand-primary-300)] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`
            flex-shrink-0 w-11 h-11 lg:w-12 lg:h-12 rounded-xl
            flex items-center justify-center
            group-hover:scale-110 transition-transform
            ${iconBgStyles[variant]}
          `}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary-600)] transition-colors">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              {description}
            </p>
          )}
        </div>

        {/* Arrow */}
        <svg
          className="flex-shrink-0 w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-primary-500)] group-hover:translate-x-1 transition-all"
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
      </div>
    </Link>
  );
}

export default DashboardActionCard;

