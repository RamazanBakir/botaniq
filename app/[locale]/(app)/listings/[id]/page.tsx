import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getListingById, formatPrice } from '@/lib/data/mockListings';
import { ListingGallery } from '@/components/listings/ListingGallery';
import { ListingSpecs } from '@/components/listings/ListingSpecs';
import { ListingSellerCard } from '@/components/listings/ListingSellerCard';

interface ListingDetailPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: ListingDetailPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const listing = getListingById(id);
  
  if (!listing) {
    const t = await getTranslations({ locale, namespace: 'listing' });
    return { title: t('notFound') };
  }

  return {
    title: `${listing.brand} ${listing.model} – For Sale | Botaniq`,
    description: `${listing.year} ${listing.brand} ${listing.model} for sale in ${listing.location}. ${listing.length}ft ${listing.boatType}. ${formatPrice(listing.price, listing.currency)}.`,
    openGraph: {
      title: `${listing.brand} ${listing.model} – ${formatPrice(listing.price)}`,
      description: `${listing.year} ${listing.boatType} in ${listing.location}. ${listing.length}ft.`,
      url: `/listings/${listing.id}`,
      images: [{ url: listing.imageUrl, width: 800, height: 600, alt: listing.title }],
    },
  };
}

export default async function ListingDetailPage({ params }: ListingDetailPageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const listing = getListingById(id);
  if (!listing) {
    notFound();
  }

  return <ListingDetailContent listing={listing} />;
}

function ListingDetailContent({ listing }: { listing: NonNullable<ReturnType<typeof getListingById>> }) {
  const t = useTranslations('listing');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/explore" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              {t('breadcrumb')}
            </Link>
            <svg className="w-4 h-4 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-[var(--color-text-primary)] font-medium truncate max-w-[200px] sm:max-w-none">
              {listing.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Gallery */}
            <ListingGallery images={listing.images} title={listing.title} />

            {/* Header Info */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold text-[var(--color-brand-primary-700)] bg-[var(--color-brand-primary-100)] rounded-full">
                      {listing.boatType}
                    </span>
                    {listing.condition === 'new' && (
                      <span className="px-3 py-1 text-xs font-semibold text-[var(--color-success-700)] bg-[var(--color-success-100)] rounded-full">
                        {t('badges.new')}
                      </span>
                    )}
                    {listing.featured && (
                      <span className="px-3 py-1 text-xs font-semibold !text-white bg-[var(--color-brand-primary-500)] rounded-full">
                        {t('badges.featured')}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-3">
                    {listing.title}
                  </h1>
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{listing.location}</span>
                  </div>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
                    {formatPrice(listing.price, listing.currency)}
                  </p>
                  <p className="text-sm text-[var(--color-text-tertiary)] mt-2">
                    {listing.year} · {listing.length} {listing.lengthUnit}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-5">
                {t('sections.description')}
              </h2>
              <div className="prose prose-sm max-w-none text-[var(--color-text-secondary)]">
                {listing.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <ListingSpecs specs={listing.specs} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Seller Card */}
              <ListingSellerCard seller={listing.seller} />

              {/* Quick Actions */}
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5">
                <div className="flex items-center justify-between gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span className="hidden sm:inline">{t('actions.save')}</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    <span className="hidden sm:inline">{t('actions.share')}</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                    <span className="hidden sm:inline">{t('actions.report')}</span>
                  </button>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="bg-[var(--color-warning-50)] border border-[var(--color-warning-200)] rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-warning-600)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--color-warning-800)]">{t('safety.title')}</p>
                    <p className="text-sm text-[var(--color-warning-700)] mt-2 leading-relaxed">
                      {t('safety.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

