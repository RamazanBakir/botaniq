'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { WizardHeader } from '@/components/wizard';
import type { ListingFormData } from './types';
import { BOAT_TYPES, COUNTRIES, CURRENCIES } from './types';

export interface StepSummaryProps {
  data: ListingFormData;
  onEdit: (step: number) => void;
}

function SummarySection({
  title,
  stepIndex,
  onEdit,
  editLabel,
  children,
}: {
  title: string;
  stepIndex: number;
  onEdit: (step: number) => void;
  editLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[var(--color-text-primary)]">{title}</h3>
        <button
          type="button"
          onClick={() => onEdit(stepIndex)}
          className="text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
        >
          {editLabel}
        </button>
      </div>
      {children}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between py-2 border-b border-[var(--color-border-muted)] last:border-0">
      <span className="text-sm text-[var(--color-text-secondary)]">{label}</span>
      <span className="text-sm font-medium text-[var(--color-text-primary)] text-right">{value}</span>
    </div>
  );
}

export function StepSummary({ data, onEdit }: StepSummaryProps) {
  const t = useTranslations('wizard.summary');
  const tPricing = useTranslations('wizard.pricing');

  const boatTypeLabel = BOAT_TYPES.find((bt) => bt.value === data.boatType)?.label || data.boatType;
  const countryLabel = COUNTRIES.find((c) => c.value === data.country)?.label || data.country;
  const currencySymbol = CURRENCIES.find((c) => c.value === data.currency)?.label || data.currency;
  const primaryPhoto = data.photos.find((p) => p.isPrimary) || data.photos[0];

  const formatPrice = (price: number | '') => {
    if (price === '') return '-';
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div className="space-y-6">
      <WizardHeader
        title={t('title')}
        description={t('subtitle')}
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />

      <div className="space-y-4">
        {/* Photo Preview */}
        {primaryPhoto && (
          <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-bg-muted)]">
            <Image
              src={primaryPhoto.previewUrl}
              alt="Primary listing photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            {data.photos.length > 1 && (
              <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                +{data.photos.length - 1} more
              </div>
            )}
          </div>
        )}

        {/* Boat Basics */}
        <SummarySection title={t('boatDetails')} stepIndex={0} onEdit={onEdit} editLabel={t('edit')}>
          <SummaryRow label="Type" value={boatTypeLabel} />
          <SummaryRow label="Brand" value={data.brand || '-'} />
          <SummaryRow label="Model" value={data.model || '-'} />
          <SummaryRow label="Year" value={data.year || '-'} />
          <SummaryRow label="Length" value={data.length ? `${data.length} ${data.lengthUnit}` : '-'} />
        </SummarySection>

        {/* Location */}
        <SummarySection title={t('locationDetails')} stepIndex={1} onEdit={onEdit} editLabel={t('edit')}>
          <SummaryRow label="Country" value={countryLabel} />
          <SummaryRow label="City / Port" value={data.city || '-'} />
          {data.marina && <SummaryRow label="Marina" value={data.marina} />}
        </SummarySection>

        {/* Pricing */}
        <SummarySection title={t('pricingDetails')} stepIndex={3} onEdit={onEdit} editLabel={t('edit')}>
          <SummaryRow label="Listing type" value={data.saleType === 'charter' ? tPricing('forCharter') : tPricing('forSale')} />
          <SummaryRow 
            label="Price" 
            value={`${currencySymbol.split(' ')[0]} ${formatPrice(data.price)}`} 
          />
          <SummaryRow label="Negotiable" value={data.negotiable ? 'Yes' : 'No'} />
        </SummarySection>
      </div>
    </div>
  );
}

export default StepSummary;
