'use client';

import React from 'react';
import Image from 'next/image';
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
  children,
}: {
  title: string;
  stepIndex: number;
  onEdit: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[var(--color-text-primary)]">{title}</h3>
        <button
          type="button"
          onClick={() => onEdit(stepIndex)}
          className="text-sm font-medium text-[var(--color-brand-primary-600)] hover:text-[var(--color-brand-primary-700)] transition-colors"
        >
          Edit
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
      <span className="text-sm font-medium text-[var(--color-text-primary)]">{value}</span>
    </div>
  );
}

export function StepSummary({ data, onEdit }: StepSummaryProps) {
  const boatTypeLabel = BOAT_TYPES.find((t) => t.value === data.boatType)?.label || data.boatType;
  const countryLabel = COUNTRIES.find((c) => c.value === data.country)?.label || data.country;
  const currencySymbol = CURRENCIES.find((c) => c.value === data.currency)?.label || data.currency;
  const primaryPhoto = data.photos.find((p) => p.isPrimary) || data.photos[0];

  const formatPrice = (price: number | '') => {
    if (price === '') return '-';
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div className="space-y-8">
      <WizardHeader
        title="Review your listing"
        description="Make sure everything looks correct before publishing."
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
        <SummarySection title="Boat basics" stepIndex={0} onEdit={onEdit}>
          <SummaryRow label="Type" value={boatTypeLabel} />
          <SummaryRow label="Brand" value={data.brand || '-'} />
          <SummaryRow label="Model" value={data.model || '-'} />
          <SummaryRow label="Year" value={data.year || '-'} />
          <SummaryRow label="Length" value={data.length ? `${data.length} ${data.lengthUnit}` : '-'} />
        </SummarySection>

        {/* Location */}
        <SummarySection title="Location" stepIndex={1} onEdit={onEdit}>
          <SummaryRow label="Country" value={countryLabel} />
          <SummaryRow label="City / Port" value={data.city || '-'} />
          {data.marina && <SummaryRow label="Marina" value={data.marina} />}
        </SummarySection>

        {/* Photos */}
        <SummarySection title="Photos" stepIndex={2} onEdit={onEdit}>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {data.photos.length} photo{data.photos.length !== 1 ? 's' : ''} uploaded
          </p>
        </SummarySection>

        {/* Pricing */}
        <SummarySection title="Price & conditions" stepIndex={3} onEdit={onEdit}>
          <SummaryRow label="Listing type" value={data.saleType === 'charter' ? 'For charter' : 'For sale'} />
          <SummaryRow 
            label={data.saleType === 'charter' ? 'Price per day' : 'Price'} 
            value={`${currencySymbol.split(' ')[0]} ${formatPrice(data.price)}`} 
          />
          <SummaryRow label="Negotiable" value={data.negotiable ? 'Yes' : 'No'} />
          {data.notes && <SummaryRow label="Notes" value={data.notes} />}
        </SummarySection>
      </div>

      {/* Terms Notice */}
      <div className="bg-[var(--color-bg-muted)] rounded-xl p-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          By creating this listing, you agree to our{' '}
          <span className="text-[var(--color-brand-primary-600)] hover:underline cursor-pointer">Terms of Service</span>
          {' '}and{' '}
          <span className="text-[var(--color-brand-primary-600)] hover:underline cursor-pointer">Listing Guidelines</span>.
        </p>
      </div>
    </div>
  );
}

export default StepSummary;

