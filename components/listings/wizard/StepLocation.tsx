'use client';

import React from 'react';
import { WizardHeader } from '@/components/wizard';
import { TextInput, Select } from '@/design-system/components/forms';
import type { ListingFormData } from './types';
import { COUNTRIES } from './types';

export interface StepLocationProps {
  data: ListingFormData;
  onChange: (updates: Partial<ListingFormData>) => void;
  errors?: Record<string, string>;
}

export function StepLocation({ data, onChange, errors = {} }: StepLocationProps) {
  return (
    <div className="space-y-8">
      <WizardHeader
        title="Location"
        description="Where is the boat currently located? This helps buyers in your area find it."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        }
      />

      <div className="grid gap-6">
        {/* Country */}
        <Select
          label="Country"
          options={COUNTRIES}
          value={data.country}
          onChange={(e) => onChange({ country: e.target.value })}
          placeholder="Select country"
          required
          error={errors.country}
        />

        {/* City */}
        <TextInput
          label="City / Port"
          placeholder="e.g., Miami, Monaco"
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
          required
          error={errors.city}
        />

        {/* Marina (Optional) */}
        <TextInput
          label="Marina (optional)"
          placeholder="e.g., Marina Bay"
          value={data.marina || ''}
          onChange={(e) => onChange({ marina: e.target.value })}
          helperText="Enter the marina name if applicable"
        />
      </div>

      {/* Map placeholder */}
      <div className="mt-6 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-muted)] p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-[var(--color-bg-surface)] flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
        </div>
        <p className="text-sm text-[var(--color-text-tertiary)]">
          Map picker coming soon
        </p>
      </div>
    </div>
  );
}

export default StepLocation;

