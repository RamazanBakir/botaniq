'use client';

import React from 'react';
import { WizardHeader } from '@/components/wizard';
import { Select, NumberInput, Textarea } from '@/design-system/components/forms';
import type { ListingFormData } from './types';
import { CURRENCIES } from './types';

export interface StepPricingProps {
  data: ListingFormData;
  onChange: (updates: Partial<ListingFormData>) => void;
  errors?: Record<string, string>;
}

export function StepPricing({ data, onChange, errors = {} }: StepPricingProps) {
  return (
    <div className="space-y-8">
      <WizardHeader
        title="Price & conditions"
        description="Set your asking price and sale conditions."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />

      <div className="grid gap-6">
        {/* Sale Type */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-[var(--color-text-primary)]">
            Listing type <span className="text-[var(--color-error-500)]">*</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onChange({ saleType: 'sale' })}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                data.saleType === 'sale'
                  ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)]'
                  : 'border-[var(--color-border-default)] hover:border-[var(--color-brand-primary-300)]'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                data.saleType === 'sale'
                  ? 'bg-[var(--color-brand-primary-100)] text-[var(--color-brand-primary-600)]'
                  : 'bg-[var(--color-bg-muted)] text-[var(--color-text-tertiary)]'
              }`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className={`font-medium ${
                  data.saleType === 'sale' 
                    ? 'text-[var(--color-brand-primary-700)]' 
                    : 'text-[var(--color-text-primary)]'
                }`}>
                  For sale
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Sell the boat
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onChange({ saleType: 'charter' })}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                data.saleType === 'charter'
                  ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)]'
                  : 'border-[var(--color-border-default)] hover:border-[var(--color-brand-primary-300)]'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                data.saleType === 'charter'
                  ? 'bg-[var(--color-brand-primary-100)] text-[var(--color-brand-primary-600)]'
                  : 'bg-[var(--color-bg-muted)] text-[var(--color-text-tertiary)]'
              }`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className={`font-medium ${
                  data.saleType === 'charter' 
                    ? 'text-[var(--color-brand-primary-700)]' 
                    : 'text-[var(--color-text-primary)]'
                }`}>
                  For charter
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Rent by day/week
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <NumberInput
              label={data.saleType === 'charter' ? 'Price per day' : 'Asking price'}
              placeholder="e.g., 189000"
              value={data.price}
              onChange={(e) => onChange({ price: e.target.value ? Number(e.target.value) : '' })}
              min={0}
              required
              error={errors.price}
            />
          </div>
          <div>
            <Select
              label="Currency"
              options={CURRENCIES}
              value={data.currency}
              onChange={(e) => onChange({ currency: e.target.value })}
              placeholder=""
            />
          </div>
        </div>

        {/* Negotiable */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.negotiable}
            onChange={(e) => onChange({ negotiable: e.target.checked })}
            className="w-5 h-5 rounded border-[var(--color-border-default)] text-[var(--color-brand-primary-500)] focus:ring-[var(--color-brand-primary-500)]"
          />
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            Price is negotiable
          </span>
        </label>

        {/* Notes */}
        <Textarea
          label="Additional notes (optional)"
          placeholder="Any special conditions, included equipment, or other details..."
          value={data.notes || ''}
          onChange={(e) => onChange({ notes: e.target.value })}
          maxCount={500}
          showCount
        />
      </div>
    </div>
  );
}

export default StepPricing;

