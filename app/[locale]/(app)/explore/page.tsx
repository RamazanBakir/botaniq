import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ListingList, ListingFilters } from '@/components/listings';
import { MapShell } from '@/components/map';
import { mockListings } from '@/lib/data/mockListings';

interface ExplorePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ExplorePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('explore.title'),
    description: t('explore.description'),
    openGraph: {
      title: t('explore.title'),
      description: t('explore.description'),
      url: '/explore',
    },
  };
}

export default async function ExplorePage({ params }: ExplorePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ExplorePageContent />;
}

function ExplorePageContent() {
  const t = useTranslations('explore');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
                {t('title')}
              </h1>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {t('subtitle', { count: mockListings.length })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex items-center bg-[var(--color-bg-muted)] rounded-lg p-1">
                <button className="px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] rounded-md shadow-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="hidden sm:inline">{t('views.grid')}</span>
                </button>
                <button className="px-3 py-2 text-sm font-medium text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <span className="hidden sm:inline">{t('views.map')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-4">
          <ListingFilters />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Listings Panel - Wider on desktop */}
          <div className="w-full lg:w-[500px] xl:w-[560px] 2xl:w-[640px] flex-shrink-0 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto lg:pr-3 scrollbar-thin">
              <ListingList listings={mockListings} />
            </div>
          </div>

          {/* Map Panel */}
          <div className="flex-1 order-1 lg:order-2 min-w-0">
            <div className="lg:sticky lg:top-24 h-[350px] sm:h-[450px] lg:h-[calc(100vh-10rem)]">
              <MapShell className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

