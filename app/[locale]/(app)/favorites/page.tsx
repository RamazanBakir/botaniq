'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Icons
function HeartIcon({ className, filled = false }: { className?: string; filled?: boolean }) {
  if (filled) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

// Mock favorites data
const MOCK_FAVORITES = [
  {
    id: '1',
    title: 'Sunseeker Manhattan 52',
    brand: 'Sunseeker',
    model: 'Manhattan 52',
    year: 2019,
    length: 52,
    price: 850000,
    currency: 'EUR',
    location: 'Monaco',
    savedAt: '2024-02-15',
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
    location: 'Bodrum, Turkey',
    savedAt: '2024-02-10',
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
    location: 'Barcelona, Spain',
    savedAt: '2024-02-05',
  },
];

/**
 * Favorites Page
 * 
 * Shows user's saved favorite boats.
 */
export default function FavoritesPage() {
  const t = useTranslations('favorites');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              {t('title')}
            </h1>
            <p className="mt-1 text-[var(--color-text-secondary)]">
              {t('subtitle', { count: MOCK_FAVORITES.length })}
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
          >
            <ExploreIcon className="w-5 h-5" />
            {t('exploreMore')}
          </Link>
        </div>

        {/* Favorites Grid */}
        {MOCK_FAVORITES.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {MOCK_FAVORITES.map((boat) => (
              <div
                key={boat.id}
                className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-[var(--color-bg-muted)] flex items-center justify-center">
                  <BoatIcon className="w-12 h-12 text-[var(--color-text-tertiary)]" />
                  {/* Remove from favorites button */}
                  <button
                    type="button"
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-[var(--color-error-500)] hover:bg-white hover:scale-110 transition-all shadow-sm"
                    title={t('removeFavorite')}
                  >
                    <HeartIcon className="w-5 h-5" filled />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 lg:p-5">
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-brand-primary-600)] transition-colors">
                    {boat.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                    {boat.year} · {boat.length} ft · {boat.brand}
                  </p>

                  <div className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] mb-3">
                    <MapPinIcon className="w-4 h-4" />
                    {boat.location}
                  </div>

                  <p className="text-xl font-bold text-[var(--color-brand-primary-600)] mb-4">
                    €{boat.price.toLocaleString()}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                      {t('savedOn')} {new Date(boat.savedAt).toLocaleDateString()}
                    </p>
                    <Link
                      href={`/listings/${boat.id}`}
                      className="text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
                    >
                      {t('viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-8 lg:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center">
              <HeartIcon className="w-8 h-8 text-[var(--color-text-tertiary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
              {t('empty.title')}
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
              {t('empty.description')}
            </p>
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
            >
              <ExploreIcon className="w-5 h-5" />
              {t('empty.cta')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

