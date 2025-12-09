'use client';

import type { ReactNode } from 'react';
import { DashboardHeader } from './DashboardHeader';

/**
 * DashboardLayout Props
 */
interface DashboardLayoutProps {
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
  /** Main content */
  children: ReactNode;
  /** Optional sidebar content (shows on right on desktop) */
  sidebar?: ReactNode;
}

/**
 * DashboardLayout
 * 
 * Unified layout component for all dashboard types.
 * Provides consistent structure with header, main content, and optional sidebar.
 */
export function DashboardLayout({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  badge,
  children,
  sidebar,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <DashboardHeader
          title={title}
          subtitle={subtitle}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
          badge={badge}
        />

        {/* Content Area */}
        {sidebar ? (
          // Two-column layout with sidebar
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0">{children}</div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
              {sidebar}
            </aside>
          </div>
        ) : (
          // Single column layout
          <div>{children}</div>
        )}
      </div>
    </div>
  );
}

export default DashboardLayout;

