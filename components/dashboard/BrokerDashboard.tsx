'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { DashboardLayout } from './DashboardLayout';
import { DashboardSection } from './DashboardSection';
import { DashboardStatCard } from './DashboardStatCard';
import { DashboardActionCard } from './DashboardActionCard';

// Icons
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
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

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function BoatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 6l1-1M16 6l-1-1M4 17l2.5-2.5M20 17l-2.5-2.5M3 22h18M6 17l6-5 6 5M6 17v5h12v-5" />
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

interface BrokerDashboardProps {
  userName?: string;
  companyName?: string;
}

/**
 * BrokerDashboard
 * 
 * Dashboard for yacht brokers/dealers.
 * Shows portfolio stats, listings management, and professional tools.
 */
export function BrokerDashboard({ userName, companyName }: BrokerDashboardProps) {
  const t = useTranslations('dashboard.broker');
  const tCommon = useTranslations('dashboard.common');

  // Mock data
  const stats = {
    totalListings: 12,
    activeListings: 8,
    pendingApproval: 2,
    totalViews: 2450,
  };

  // Role badge
  const badge = (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-brand-primary-100)] rounded-full">
      <BriefcaseIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
      <span className="text-sm font-medium text-[var(--color-brand-primary-700)]">
        {companyName || t('badge')}
      </span>
    </div>
  );

  // Primary action button
  const primaryAction = (
    <Link
      href="/listings/new"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl shadow-sm hover:shadow-md transition-all"
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
      {/* Portfolio Stats Section */}
      <DashboardSection title={t('sections.portfolioSummary')}>
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
            label={t('stats.pendingApproval')}
            value={stats.pendingApproval}
            icon={<ClockIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="warning"
          />
          <DashboardStatCard
            label={t('stats.totalViews')}
            value={stats.totalViews.toLocaleString()}
            icon={<ChartIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="default"
          />
        </div>
      </DashboardSection>

      {/* Recent Listings Section */}
      <DashboardSection
        title={t('sections.recentListings')}
        action={{ label: tCommon('viewAll'), href: '/listings' }}
      >
        <div className="space-y-3">
          {/* Mock listing rows */}
          {[
            { name: 'Azimut Grande 27M', status: 'active', price: '€2,450,000' },
            { name: 'Princess V65', status: 'pending', price: '€1,850,000' },
            { name: 'Sunseeker Predator 74', status: 'active', price: '€3,200,000' },
          ].map((listing, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-[var(--color-bg-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BoatIcon className="w-6 h-6 text-[var(--color-text-tertiary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-[var(--color-text-primary)] truncate">
                    {listing.name}
                  </h3>
                  <p className="text-sm text-[var(--color-brand-primary-600)] font-semibold">
                    {listing.price}
                  </p>
                </div>
              </div>
              <span
                className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0
                  ${listing.status === 'active'
                    ? 'bg-[var(--color-success-100)] text-[var(--color-success-700)]'
                    : 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]'
                  }
                `}
              >
                {tCommon(`status.${listing.status}`)}
              </span>
            </div>
          ))}
        </div>
      </DashboardSection>

      {/* Quick Actions Section */}
      <DashboardSection title={t('sections.tools')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardActionCard
            title={t('actions.createListing.title')}
            description={t('actions.createListing.description')}
            icon={<PlusIcon className="w-6 h-6" />}
            href="/listings/new"
            variant="primary"
          />
          <DashboardActionCard
            title={t('actions.managePortfolio.title')}
            description={t('actions.managePortfolio.description')}
            icon={<ListIcon className="w-6 h-6" />}
            href="/listings"
            variant="secondary"
          />
          <DashboardActionCard
            title={t('actions.viewAnalytics.title')}
            description={t('actions.viewAnalytics.description')}
            icon={<ChartIcon className="w-6 h-6" />}
            href="/analytics"
            variant="secondary"
          />
        </div>
      </DashboardSection>
    </DashboardLayout>
  );
}

export default BrokerDashboard;

