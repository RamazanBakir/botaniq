'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { DashboardLayout } from './DashboardLayout';
import { DashboardSection } from './DashboardSection';
import { DashboardActionCard } from './DashboardActionCard';

// Icons
function ExploreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

interface MemberDashboardProps {
  userName?: string;
}

/**
 * MemberDashboard
 * 
 * Dashboard for boat enthusiasts (member role).
 * Focuses on discovery, Snap-to-ID, and favorites.
 */
export function MemberDashboard({ userName }: MemberDashboardProps) {
  const t = useTranslations('dashboard.member');
  const tCommon = useTranslations('dashboard.common');

  // Role badge
  const badge = (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-brand-primary-100)] rounded-full">
      <SparklesIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
      <span className="text-sm font-medium text-[var(--color-brand-primary-700)]">
        {t('badge')}
      </span>
    </div>
  );

  // Primary action button
  const primaryAction = (
    <Link
      href="/explore"
      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <ExploreIcon className="w-5 h-5" />
      {t('cta.explore')}
    </Link>
  );

  return (
    <DashboardLayout
      title={userName ? t('titleWithName', { name: userName }) : t('title')}
      subtitle={t('subtitle')}
      badge={badge}
      primaryAction={primaryAction}
    >
      {/* Quick Actions Section */}
      <DashboardSection title={t('sections.quickActions')}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardActionCard
            title={t('actions.explore.title')}
            description={t('actions.explore.description')}
            icon={<ExploreIcon className="w-6 h-6" />}
            href="/explore"
            variant="primary"
          />
          <DashboardActionCard
            title={t('actions.snap.title')}
            description={t('actions.snap.description')}
            icon={<CameraIcon className="w-6 h-6" />}
            href="/snap"
            variant="primary"
          />
          <DashboardActionCard
            title={t('actions.favorites.title')}
            description={t('actions.favorites.description')}
            icon={<HeartIcon className="w-6 h-6" />}
            href="/favorites"
            variant="secondary"
          />
        </div>
      </DashboardSection>

      {/* Recent Activity Section */}
      <DashboardSection
        title={t('sections.recentActivity')}
        subtitle={t('sections.recentActivitySubtitle')}
      >
        <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-6 lg:p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center">
            <ExploreIcon className="w-8 h-8 text-[var(--color-text-tertiary)]" />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
            {t('emptyActivity.title')}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-md mx-auto">
            {t('emptyActivity.description')}
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
          >
            {t('emptyActivity.cta')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </DashboardSection>

      {/* Tips Section */}
      <DashboardSection title={t('sections.tips')}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-primary-100)] flex items-center justify-center flex-shrink-0">
                <CameraIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">
                  {t('tips.snap.title')}
                </h4>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {t('tips.snap.description')}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-primary-100)] flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-4 h-4 text-[var(--color-brand-primary-600)]" />
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">
                  {t('tips.save.title')}
                </h4>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {t('tips.save.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardSection>
    </DashboardLayout>
  );
}

export default MemberDashboard;

