'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('wizard.location');

  return (
    <div className="space-y-6">
      <WizardHeader
        title={t('title')}
        description={t('subtitle')}
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        }
      />

      <div className="space-y-5">
        {/* Country */}
        <Select
          label={t('country')}
          options={COUNTRIES}
          value={data.country}
          onChange={(e) => onChange({ country: e.target.value })}
          placeholder={t('selectCountry')}
          required
          error={errors.country}
        />

        {/* City */}
        <TextInput
          label={t('city')}
          placeholder={t('cityPlaceholder')}
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
          required
          error={errors.city}
        />

        {/* Marina (Optional) */}
        <TextInput
          label={t('marina')}
          placeholder={t('marinaPlaceholder')}
          value={data.marina || ''}
          onChange={(e) => onChange({ marina: e.target.value })}
        />
      </div>
    </div>
  );
}

export default StepLocation;
