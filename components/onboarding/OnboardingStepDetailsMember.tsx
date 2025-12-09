'use client';

import { useTranslations } from 'next-intl';
import type { ExperienceLevel } from '@/types/user';
import type { OnboardingStepProps } from './types';

const experienceLevels: { id: ExperienceLevel; labelKey: string }[] = [
  { id: 'beginner', labelKey: 'onboarding.details.member.experience.beginner' },
  { id: 'intermediate', labelKey: 'onboarding.details.member.experience.intermediate' },
  { id: 'expert', labelKey: 'onboarding.details.member.experience.expert' },
];

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
  { value: 'OTHER', label: 'Other' },
];

/**
 * OnboardingStepDetailsMember
 * 
 * Detail questions for boat enthusiasts/members.
 */
export function OnboardingStepDetailsMember({
  onNext,
  onBack,
  state,
  onUpdateState,
}: OnboardingStepProps) {
  const t = useTranslations();

  const handleCountryChange = (country: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        country,
      },
    });
  };

  const handleExperienceChange = (level: ExperienceLevel) => {
    onUpdateState({
      profile: {
        ...state.profile,
        experienceLevel: level,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {t('onboarding.details.member.title')}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          {t('onboarding.details.member.subtitle')}
        </p>
      </div>

      {/* Country Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.member.country')}
        </label>
        <select
          value={state.profile.country || ''}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
        >
          <option value="">{t('onboarding.details.member.selectCountry')}</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Level */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.member.experienceLabel')}
        </label>
        <div className="grid gap-2">
          {experienceLevels.map((level) => {
            const isSelected = state.profile.experienceLevel === level.id;
            return (
              <button
                key={level.id}
                type="button"
                onClick={() => handleExperienceChange(level.id)}
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
                  <span className="font-medium">{t(level.labelKey)}</span>
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
          className="flex-1 py-3 px-6 rounded-xl font-semibold text-base bg-[var(--color-brand-primary-500)] !text-white hover:bg-[var(--color-brand-primary-600)] transition-all"
        >
          {t('onboarding.buttons.continue')}
        </button>
      </div>
    </div>
  );
}

export default OnboardingStepDetailsMember;

