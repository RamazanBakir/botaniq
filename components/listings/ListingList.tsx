'use client';

import { ListingCard } from './ListingCard';
import type { ListingSummary } from '@/types/listing';

export interface ListingListProps {
  listings: ListingSummary[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export function ListingList({ 
  listings, 
  isLoading = false,
  emptyMessage = 'No boats match your search.'
}: ListingListProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl overflow-hidden animate-pulse"
          >
            <div className="aspect-[4/3] bg-[var(--color-bg-muted)]" />
            <div className="p-4 space-y-3">
              <div className="h-3 bg-[var(--color-bg-muted)] rounded w-1/4" />
              <div className="h-5 bg-[var(--color-bg-muted)] rounded w-3/4" />
              <div className="h-4 bg-[var(--color-bg-muted)] rounded w-1/2" />
              <div className="h-6 bg-[var(--color-bg-muted)] rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state
  if (listings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          No results found
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
          {emptyMessage}
        </p>
      </div>
    );
  }

  // Listings grid
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default ListingList;

