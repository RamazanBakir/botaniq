'use client';

import { useTranslations } from 'next-intl';
import type { OnboardingStepProps } from './types';

const countries = [
  { value: 'TR', label: 'Turkey' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'GR', label: 'Greece' },
  { value: 'HR', label: 'Croatia' },
  { value: 'MC', label: 'Monaco' },
  { value: 'OTHER', label: 'Other' },
];

const boatCountOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5+' },
];

const listingPlans = [
  { id: 'sale', labelKey: 'onboarding.details.owner.planToList.sale' },
  { id: 'charter', labelKey: 'onboarding.details.owner.planToList.charter' },
  { id: 'both', labelKey: 'onboarding.details.owner.planToList.both' },
  { id: 'none', labelKey: 'onboarding.details.owner.planToList.none' },
] as const;

/**
 * OnboardingStepDetailsOwner
 * 
 * Detail questions for boat owners.
 */
export function OnboardingStepDetailsOwner({
  onNext,
  onBack,
  state,
  onUpdateState,
}: OnboardingStepProps) {
  const t = useTranslations();

  const handleOwnsBoatChange = (ownsBoat: boolean) => {
    onUpdateState({
      profile: {
        ...state.profile,
        ownsBoat,
        // Reset boat count if they don't own a boat
        ...(ownsBoat === false && { boatCount: undefined }),
      },
    });
  };

  const handleBoatCountChange = (count: number) => {
    onUpdateState({
      profile: {
        ...state.profile,
        boatCount: count,
      },
    });
  };

  const handleCountryChange = (country: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        boatLocationCountry: country,
      },
    });
  };

  const handlePlanToListChange = (plan: 'sale' | 'charter' | 'both' | 'none') => {
    onUpdateState({
      profile: {
        ...state.profile,
        planToList: plan,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {t('onboarding.details.owner.title')}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          {t('onboarding.details.owner.subtitle')}
        </p>
      </div>

      {/* Do you own a boat? */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.owner.ownsBoat')}
        </label>
        <div className="flex gap-3">
          {[true, false].map((value) => {
            const isSelected = state.profile.ownsBoat === value;
            return (
              <button
                key={String(value)}
                type="button"
                onClick={() => handleOwnsBoatChange(value)}
                className={`
                  flex-1 py-3 px-4 rounded-xl border text-center font-medium transition-all
                  ${
                    isSelected
                      ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)] text-[var(--color-brand-primary-700)]'
                      : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
                  }
                `}
              >
                {value ? t('common.yes') : t('common.no')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Boat Count (only if owns boat) */}
      {state.profile.ownsBoat && (
        <div className="space-y-3">
          <label className="block text-sm font-medium text-[var(--color-text-primary)]">
            {t('onboarding.details.owner.boatCount')}
          </label>
          <div className="flex flex-wrap gap-2">
            {boatCountOptions.map((option) => {
              const isSelected = state.profile.boatCount === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleBoatCountChange(option.value)}
                  className={`
                    w-14 h-14 rounded-xl border text-center font-semibold transition-all
                    ${
                      isSelected
                        ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-500)] text-white'
                        : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
                    }
                  `}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Boat Location */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.owner.boatLocation')}
        </label>
        <select
          value={state.profile.boatLocationCountry || ''}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
        >
          <option value="">{t('onboarding.details.owner.selectCountry')}</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      {/* Plan to List */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.owner.planToListLabel')}
        </label>
        <div className="grid gap-2">
          {listingPlans.map((plan) => {
            const isSelected = state.profile.planToList === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => handlePlanToListChange(plan.id)}
                className={`
                  w-full py-3 px-4 rounded-xl border text-left transition-all
                  ${
                    isSelected
                      ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)] text-[var(--color-brand-primary-700)]'
                      : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{t(plan.labelKey)}</span>
                  {isSelected && (
                    <svg className="w-5 h-5 text-[var(--color-brand-primary-500)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-4">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 px-6 rounded-xl font-semibold text-base border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] transition-all"
          >
            {t('onboarding.buttons.back')}
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="flex-1 py-3 px-6 rounded-xl font-semibold text-base bg-[var(--color-brand-primary-500)] text-white hover:bg-[var(--color-brand-primary-600)] transition-all"
        >
          {t('onboarding.buttons.continue')}
        </button>
      </div>
    </div>
  );
}

export default OnboardingStepDetailsOwner;

