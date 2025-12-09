'use client';

import React from 'react';
import { WizardHeader } from '@/components/wizard';
import { TextInput, Select, NumberInput } from '@/design-system/components/forms';
import type { ListingFormData } from './types';
import { BOAT_TYPES } from './types';

export interface StepBasicsProps {
  data: ListingFormData;
  onChange: (updates: Partial<ListingFormData>) => void;
  errors?: Record<string, string>;
}

export function StepBasics({ data, onChange, errors = {} }: StepBasicsProps) {
  return (
    <div className="space-y-8">
      <WizardHeader
        title="Boat basics"
        description="Tell us about your boat. This information helps buyers find the right vessel."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        }
      />

      <div className="grid gap-6">
        {/* Boat Type */}
        <Select
          label="Boat type"
          options={BOAT_TYPES}
          value={data.boatType}
          onChange={(e) => onChange({ boatType: e.target.value })}
          placeholder="Select boat type"
          required
          error={errors.boatType}
        />

        {/* Brand & Model - Two columns on desktop */}
        <div className="grid sm:grid-cols-2 gap-4">
          <TextInput
            label="Brand"
            placeholder="e.g., Sea Ray, Beneteau"
            value={data.brand}
            onChange={(e) => onChange({ brand: e.target.value })}
            required
            error={errors.brand}
          />
          <TextInput
            label="Model"
            placeholder="e.g., Sundancer 320"
            value={data.model}
            onChange={(e) => onChange({ model: e.target.value })}
            required
            error={errors.model}
          />
        </div>

        {/* Year & Length - Two columns on desktop */}
        <div className="grid sm:grid-cols-2 gap-4">
          <NumberInput
            label="Year"
            placeholder="e.g., 2021"
            value={data.year}
            onChange={(e) => onChange({ year: e.target.value ? Number(e.target.value) : '' })}
            min={1900}
            max={new Date().getFullYear() + 1}
            required
            error={errors.year}
          />
          <div className="flex gap-2">
            <div className="flex-1">
              <NumberInput
                label="Length"
                placeholder="e.g., 32"
                value={data.length}
                onChange={(e) => onChange({ length: e.target.value ? Number(e.target.value) : '' })}
                min={1}
                required
                error={errors.length}
              />
            </div>
            <div className="w-24 pt-7">
              <Select
                options={[
                  { value: 'ft', label: 'ft' },
                  { value: 'm', label: 'm' },
                ]}
                value={data.lengthUnit}
                onChange={(e) => onChange({ lengthUnit: e.target.value as 'ft' | 'm' })}
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepBasics;

