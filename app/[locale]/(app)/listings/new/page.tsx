'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ListingWizard } from '@/components/listings/wizard';
import type { ListingFormData } from '@/components/listings/wizard';

export default function NewListingPage() {
  const router = useRouter();
  const t = useTranslations('wizard');
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = (data: ListingFormData) => {
    console.log('Listing data:', data);
    setIsComplete(true);
  };

  const handleCancel = () => {
    router.back();
  };

  if (isComplete) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-success-100)] flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--color-success-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            {t('success.title')}
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            {t('success.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
            >
              {t('success.viewListings')}
            </Link>
            <button
              onClick={() => {
                setIsComplete(false);
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
            >
              {t('success.createAnother')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-default)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={handleCancel}
              className="w-10 h-10 rounded-xl hover:bg-[var(--color-bg-muted)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                {t('title')}
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wizard */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <ListingWizard onComplete={handleComplete} onCancel={handleCancel} />
      </div>
    </div>
  );
}

