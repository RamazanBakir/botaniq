'use client';

import Image from 'next/image';
import type { ListingSeller } from '@/types/listing';

export interface ListingSellerCardProps {
  seller: ListingSeller;
}

export function ListingSellerCard({ seller }: ListingSellerCardProps) {
  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center flex-shrink-0 overflow-hidden">
          {seller.avatarUrl ? (
            <Image
              src={seller.avatarUrl}
              alt={seller.name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg font-bold text-[var(--color-brand-primary-600)]">
              {seller.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] truncate">
            {seller.name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {seller.type === 'dealer' ? 'Dealer' : seller.type === 'broker' ? 'Broker' : 'Private Seller'}
          </p>
          <div className="flex items-center gap-1 mt-1 text-sm text-[var(--color-text-tertiary)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {seller.location}
          </div>
          {seller.responseTime && (
            <p className="text-xs text-[var(--color-success-600)] mt-1">
              {seller.responseTime}
            </p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 space-y-3">
        <button className="w-full py-3 px-4 bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          Send Message
        </button>
        
        {seller.phone && (
          <button className="w-full py-3 px-4 bg-[var(--color-bg-muted)] hover:bg-[var(--color-neutral-200)] text-[var(--color-text-primary)] font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Seller
          </button>
        )}
      </div>

      {/* Trust Signals */}
      <div className="mt-5 pt-5 border-t border-[var(--color-border-default)]">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <svg className="w-4 h-4 text-[var(--color-success-500)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified seller
        </div>
      </div>
    </div>
  );
}

export default ListingSellerCard;

