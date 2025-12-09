'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { DashboardLayout } from './DashboardLayout';
import { DashboardSection } from './DashboardSection';
import { DashboardStatCard } from './DashboardStatCard';
import { DashboardActionCard } from './DashboardActionCard';

// Icons
function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9m9 9a9 9 0 009-9m-9 9V3m0 18c-1.5 0-4.5-.5-6.5-2m6.5 2c1.5 0 4.5-.5 6.5-2M12 3a2 2 0 100 4 2 2 0 000-4z" />
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

function BoatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 6l1-1M16 6l-1-1M4 17l2.5-2.5M20 17l-2.5-2.5M3 22h18M6 17l6-5 6 5M6 17v5h12v-5" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

function ExploreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

interface CharterDashboardProps {
  userName?: string;
  companyName?: string;
}

/**
 * CharterDashboard
 * 
 * Dashboard for charter companies.
 * Shows fleet stats, charter listings, and availability management.
 */
export function CharterDashboard({ userName, companyName }: CharterDashboardProps) {
  const t = useTranslations('dashboard.charter');
  const tCommon = useTranslations('dashboard.common');

  // Mock data
  const stats = {
    fleetSize: 5,
    activeCharters: 3,
    upcomingBookings: 8,
    regions: 'Mediterranean',
  };

  // Role badge
  const badge = (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-brand-primary-100)] rounded-full">
      <AnchorIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
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
      {t('cta.createCharterListing')}
    </Link>
  );

  return (
    <DashboardLayout
      title={userName ? t('titleWithName', { name: userName }) : t('title')}
      subtitle={t('subtitle')}
      badge={badge}
      primaryAction={primaryAction}
    >
      {/* Fleet Stats Section */}
      <DashboardSection title={t('sections.fleetSummary')}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardStatCard
            label={t('stats.fleetSize')}
            value={stats.fleetSize}
            icon={<BoatIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="primary"
          />
          <DashboardStatCard
            label={t('stats.activeCharters')}
            value={stats.activeCharters}
            icon={<AnchorIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="success"
          />
          <DashboardStatCard
            label={t('stats.upcomingBookings')}
            value={stats.upcomingBookings}
            icon={<CalendarIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="warning"
          />
          <DashboardStatCard
            label={t('stats.mainRegion')}
            value={stats.regions}
            icon={<MapPinIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
            variant="default"
          />
        </div>
      </DashboardSection>

      {/* Charter Fleet Section */}
      <DashboardSection
        title={t('sections.charterFleet')}
        action={{ label: tCommon('viewAll'), href: '/fleet' }}
      >
        <div className="space-y-3">
          {/* Mock charter boat rows */}
          {[
            { name: 'Bavaria Cruiser 46', status: 'available', region: 'Aegean', pricePerWeek: '€3,500' },
            { name: 'Jeanneau Sun Odyssey 440', status: 'booked', region: 'Mediterranean', pricePerWeek: '€4,200' },
            { name: 'Beneteau Oceanis 51.1', status: 'available', region: 'Adriatic', pricePerWeek: '€5,000' },
          ].map((boat, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-[var(--color-bg-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BoatIcon className="w-6 h-6 text-[var(--color-text-tertiary)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-[var(--color-text-primary)] truncate">
                    {boat.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {boat.region} · {boat.pricePerWeek}/week
                  </p>
                </div>
              </div>
              <span
                className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0
                  ${boat.status === 'available'
                    ? 'bg-[var(--color-success-100)] text-[var(--color-success-700)]'
                    : 'bg-[var(--color-warning-100)] text-[var(--color-warning-700)]'
                  }
                `}
              >
                {tCommon(`status.${boat.status}`)}
              </span>
            </div>
          ))}
        </div>
      </DashboardSection>

      {/* Quick Actions Section */}
      <DashboardSection title={t('sections.shortcuts')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardActionCard
            title={t('actions.addBoat.title')}
            description={t('actions.addBoat.description')}
            icon={<PlusIcon className="w-6 h-6" />}
            href="/listings/new"
            variant="primary"
          />
          <DashboardActionCard
            title={t('actions.manageFleet.title')}
            description={t('actions.manageFleet.description')}
            icon={<ListIcon className="w-6 h-6" />}
            href="/fleet"
            variant="secondary"
          />
          <DashboardActionCard
            title={t('actions.viewCalendar.title')}
            description={t('actions.viewCalendar.description')}
            icon={<CalendarIcon className="w-6 h-6" />}
            href="/calendar"
            variant="secondary"
          />
        </div>
      </DashboardSection>
    </DashboardLayout>
  );
}

export default CharterDashboard;

