'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useUser } from '@/contexts/UserContext';

// Icons
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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

// Mock listings data
const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Sunseeker Manhattan 52',
    brand: 'Sunseeker',
    model: 'Manhattan 52',
    year: 2019,
    length: 52,
    price: 850000,
    currency: 'EUR',
    status: 'active',
    views: 234,
    inquiries: 5,
    image: null,
  },
  {
    id: '2',
    title: 'Azimut Grande 27M',
    brand: 'Azimut',
    model: 'Grande 27M',
    year: 2021,
    length: 88,
    price: 2450000,
    currency: 'EUR',
    status: 'active',
    views: 567,
    inquiries: 12,
    image: null,
  },
  {
    id: '3',
    title: 'Princess V65',
    brand: 'Princess',
    model: 'V65',
    year: 2020,
    length: 65,
    price: 1850000,
    currency: 'EUR',
    status: 'pending',
    views: 123,
    inquiries: 2,
    image: null,
  },
];

/**
 * Listings Management Page
 * 
 * Shows user's boat listings with management options.
 */
export default function ListingsPage() {
  const t = useTranslations('listings');
  const tCommon = useTranslations('dashboard.common');
  const { user } = useUser();

  const userRole = user?.role || 'owner';

  // Get page title based on role
  const getTitle = () => {
    switch (userRole) {
      case 'broker':
        return t('title.broker');
      case 'charter':
        return t('title.charter');
      default:
        return t('title.owner');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              {getTitle()}
            </h1>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              {t('subtitle', { count: MOCK_LISTINGS.length })}
            </p>
          </div>
          <Link
            href="/listings/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
            {t('createNew')}
          </Link>
        </div>

        {/* Listings Grid */}
        {MOCK_LISTINGS.length > 0 ? (
          <div className="space-y-4">
            {MOCK_LISTINGS.map((listing) => (
              <div
                key={listing.id}
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-4 lg:p-5"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Image */}
                  <div className="w-full sm:w-40 h-32 bg-[var(--color-bg-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoatIcon className="w-10 h-10 text-[var(--color-text-tertiary)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                          {listing.title}
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {listing.year} · {listing.length} ft · {listing.brand}
                        </p>
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

                    <p className="text-xl font-bold text-[var(--color-brand-primary-600)] mb-3">
                      €{listing.price.toLocaleString()}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-4">
                      <span className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        {listing.views} {t('views')}
                      </span>
                      <span>{listing.inquiries} {t('inquiries')}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/listings/${listing.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-muted)] hover:bg-[var(--color-border-default)] rounded-lg transition-colors"
                      >
                        <EyeIcon className="w-4 h-4" />
                        {t('actions.view')}
                      </Link>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-muted)] hover:bg-[var(--color-border-default)] rounded-lg transition-colors"
                      >
                        <PencilIcon className="w-4 h-4" />
                        {t('actions.edit')}
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--color-error-600)] bg-[var(--color-error-50)] hover:bg-[var(--color-error-100)] rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-4 h-4" />
                        {t('actions.delete')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-8 lg:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center">
              <BoatIcon className="w-8 h-8 text-[var(--color-text-tertiary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
              {t('empty.title')}
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
              {t('empty.description')}
            </p>
            <Link
              href="/listings/new"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              {t('empty.cta')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

