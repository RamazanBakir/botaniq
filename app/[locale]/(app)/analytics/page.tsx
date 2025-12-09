'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Icons
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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

function ArrowTrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

// Mock analytics data
const MOCK_STATS = {
  totalViews: 2450,
  viewsChange: '+12%',
  totalInquiries: 45,
  inquiriesChange: '+8%',
  avgTimeOnPage: '2m 34s',
  conversionRate: '1.8%',
};

const MOCK_TOP_LISTINGS = [
  { id: '1', title: 'Azimut Grande 27M', views: 567, inquiries: 12 },
  { id: '2', title: 'Sunseeker Manhattan 52', views: 234, inquiries: 5 },
  { id: '3', title: 'Princess V65', views: 123, inquiries: 2 },
];

const MOCK_MONTHLY_DATA = [
  { month: 'Jan', views: 180, inquiries: 8 },
  { month: 'Feb', views: 220, inquiries: 12 },
  { month: 'Mar', views: 310, inquiries: 15 },
  { month: 'Apr', views: 280, inquiries: 10 },
  { month: 'May', views: 420, inquiries: 18 },
  { month: 'Jun', views: 480, inquiries: 22 },
];

/**
 * Analytics Page
 * 
 * Shows performance analytics for broker listings.
 */
export default function AnalyticsPage() {
  const t = useTranslations('analytics');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
            {t('title')}
          </h1>
          <p className="mt-1 text-[var(--color-text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{t('stats.totalViews')}</p>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mt-1">
                  {MOCK_STATS.totalViews.toLocaleString()}
                </p>
                <p className="text-sm text-[var(--color-success-600)] mt-1">
                  {MOCK_STATS.viewsChange}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary-100)] flex items-center justify-center">
                <EyeIcon className="w-5 h-5 text-[var(--color-brand-primary-600)]" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{t('stats.totalInquiries')}</p>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mt-1">
                  {MOCK_STATS.totalInquiries}
                </p>
                <p className="text-sm text-[var(--color-success-600)] mt-1">
                  {MOCK_STATS.inquiriesChange}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--color-success-100)] flex items-center justify-center">
                <ChatIcon className="w-5 h-5 text-[var(--color-success-600)]" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{t('stats.avgTimeOnPage')}</p>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mt-1">
                  {MOCK_STATS.avgTimeOnPage}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--color-warning-100)] flex items-center justify-center">
                <ChartIcon className="w-5 h-5 text-[var(--color-warning-600)]" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{t('stats.conversionRate')}</p>
                <p className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mt-1">
                  {MOCK_STATS.conversionRate}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-5 h-5 text-[var(--color-text-secondary)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Chart Placeholder */}
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5 lg:p-6">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
              {t('chart.title')}
            </h2>
            <div className="h-64 flex items-end justify-between gap-2">
              {MOCK_MONTHLY_DATA.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col gap-1">
                    <div
                      className="w-full bg-[var(--color-brand-primary-500)] rounded-t"
                      style={{ height: `${(data.views / 500) * 150}px` }}
                    />
                    <div
                      className="w-full bg-[var(--color-success-500)] rounded-b"
                      style={{ height: `${(data.inquiries / 25) * 50}px` }}
                    />
                  </div>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <span className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="w-3 h-3 rounded bg-[var(--color-brand-primary-500)]" />
                {t('chart.views')}
              </span>
              <span className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="w-3 h-3 rounded bg-[var(--color-success-500)]" />
                {t('chart.inquiries')}
              </span>
            </div>
          </div>

          {/* Top Performing Listings */}
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5 lg:p-6">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
              {t('topListings.title')}
            </h2>
            <div className="space-y-4">
              {MOCK_TOP_LISTINGS.map((listing, index) => (
                <div
                  key={listing.id}
                  className="flex items-center gap-4 p-3 bg-[var(--color-bg-muted)] rounded-lg"
                >
                  <span className="w-8 h-8 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center text-sm font-bold text-[var(--color-brand-primary-600)]">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[var(--color-text-primary)] truncate">
                      {listing.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {listing.views} {t('topListings.views')} · {listing.inquiries} {t('topListings.inquiries')}
                    </p>
                  </div>
                  <Link
                    href={`/listings/${listing.id}`}
                    className="text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)]"
                  >
                    {t('topListings.view')}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

