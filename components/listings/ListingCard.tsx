'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { ListingSummary } from '@/types/listing';
import { formatPrice } from '@/lib/data/mockListings';

export interface ListingCardProps {
  listing: ListingSummary;
  variant?: 'vertical' | 'horizontal';
}

export function ListingCard({ listing, variant = 'vertical' }: ListingCardProps) {
  const isHorizontal = variant === 'horizontal';

  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <article
        className={`
          bg-[var(--color-bg-surface)] 
          border border-[var(--color-border-default)] 
          rounded-xl overflow-hidden
          transition-all duration-200
          hover:border-[var(--color-border-strong)]
          hover:shadow-lg
          ${isHorizontal ? 'flex flex-row' : 'flex flex-col'}
        `}
      >
        {/* Image */}
        <div 
          className={`
            relative bg-[var(--color-bg-muted)] overflow-hidden
            ${isHorizontal ? 'w-48 flex-shrink-0' : 'aspect-[4/3] w-full'}
          `}
        >
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={isHorizontal ? '192px' : '(max-width: 768px) 100vw, 400px'}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {listing.featured && (
              <span className="px-2 py-1 text-xs font-semibold text-white bg-[var(--color-brand-primary-500)] rounded-md">
                Featured
              </span>
            )}
            {listing.condition === 'new' && (
              <span className="px-2 py-1 text-xs font-semibold text-[var(--color-success-700)] bg-[var(--color-success-100)] rounded-md">
                New
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 p-4 ${isHorizontal ? 'flex flex-col justify-between' : ''}`}>
          {/* Header */}
          <div className="mb-3">
            <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
              {listing.boatType}
            </p>
            <h3 className="text-base font-semibold text-[var(--color-text-primary)] line-clamp-1 group-hover:text-[var(--color-brand-primary-600)] transition-colors">
              {listing.title}
            </h3>
          </div>

          {/* Details */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-text-secondary)] mb-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {listing.location}
            </span>
            <span className="text-[var(--color-border-strong)]">·</span>
            <span>{listing.length} {listing.lengthUnit}</span>
            <span className="text-[var(--color-border-strong)]">·</span>
            <span>{listing.year}</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-[var(--color-text-primary)]">
              {formatPrice(listing.price, listing.currency)}
            </p>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              {listing.condition === 'new' ? 'New' : 'Pre-owned'}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ListingCard;

