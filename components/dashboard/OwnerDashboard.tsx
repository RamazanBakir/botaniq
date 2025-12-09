'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { DashboardLayout } from './DashboardLayout';
import { DashboardSection } from './DashboardSection';
import { DashboardStatCard } from './DashboardStatCard';
import { DashboardActionCard } from './DashboardActionCard';

// Icons
function BoatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 6l1-1M16 6l-1-1M4 17l2.5-2.5M20 17l-2.5-2.5M3 22h18M6 17l6-5 6 5M6 17v5h12v-5" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function ExploreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

interface OwnerDashboardProps {
  userName?: string;
}

/**
 * OwnerDashboard
 * 
 * Dashboard for boat owners.
 * Shows listing stats, create listing CTA, and shortcuts.
 */
export function OwnerDashboard({ userName }: OwnerDashboardProps) {
  const t = useTranslations('dashboard.owner');
  const tCommon = useTranslations('dashboard.common');

  // Mock data
  const stats = {
    totalListings: 2,
    activeListings: 1,
    views: 156,
    inquiries: 3,
  };

  // Role badge
  const badge = (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-brand-primary-100)] rounded-full">
      <BoatIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
      <span className="text-sm font-medium text-[var(--color-brand-primary-700)]">
        {t('badge')}
      </span>
    </div>
  );

  // Primary action button
  const primaryAction = (
    <Link
      href="/listings/new"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <PlusIcon className="w-5 h-5" />
      {t('cta.createListing')}
    </Link>
  );

  return (
    <DashboardLayout
      title={userName ? t('titleWithName', { name: userName }) : t('title')}
      subtitle={t('subtitle')}
      badge={badge}
      primaryAction={primaryAction}
    >
      {/* Stats Section */}
      <DashboardSection title={t('sections.overview')}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardStatCard
            label={t('stats.totalListings')}
            value={stats.totalListings}
            icon={<ListIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="primary"
          />
          <DashboardStatCard
            label={t('stats.activeListings')}
            value={stats.activeListings}
            icon={<BoatIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="success"
          />
          <DashboardStatCard
            label={t('stats.views')}
            value={stats.views}
            icon={<EyeIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="default"
          />
          <DashboardStatCard
            label={t('stats.inquiries')}
            value={stats.inquiries}
            icon={<ChatIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="warning"
          />
        </div>
      </DashboardSection>

      {/* Your Listings Section */}
      <DashboardSection
        title={t('sections.yourListings')}
        action={{ label: tCommon('viewAll'), href: '/listings' }}
      >
        {stats.totalListings > 0 ? (
          <div className="space-y-4">
            {/* Mock listing cards */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-32 h-24 bg-[var(--color-bg-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
                <BoatIcon className="w-8 h-8 text-[var(--color-text-tertiary)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">
                      Sunseeker Manhattan 52
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                      2019 · 52 ft · Monaco
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-700)]">
                    {tCommon('status.active')}
                  </span>
                </div>
                <p className="text-lg font-bold text-[var(--color-brand-primary-600)] mt-2">
                  €850,000
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-6 text-center">
            <BoatIcon className="w-12 h-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
            <p className="text-[var(--color-text-secondary)]">
              {t('emptyListings.title')}
            </p>
            <Link
              href="/listings/new"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)]"
            >
              <PlusIcon className="w-4 h-4" />
              {t('emptyListings.cta')}
            </Link>
          </div>
        )}
      </DashboardSection>

      {/* Quick Actions Section */}
      <DashboardSection title={t('sections.quickActions')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardActionCard
            title={t('actions.createListing.title')}
            description={t('actions.createListing.description')}
            icon={<PlusIcon className="w-6 h-6" />}
            href="/listings/new"
            variant="primary"
          />
          <DashboardActionCard
            title={t('actions.manageListings.title')}
            description={t('actions.manageListings.description')}
            icon={<ListIcon className="w-6 h-6" />}
            href="/listings"
            variant="secondary"
          />
          <DashboardActionCard
            title={t('actions.explore.title')}
            description={t('actions.explore.description')}
            icon={<ExploreIcon className="w-6 h-6" />}
            href="/explore"
            variant="secondary"
          />
        </div>
      </DashboardSection>
    </DashboardLayout>
  );
}

export default OwnerDashboard;

