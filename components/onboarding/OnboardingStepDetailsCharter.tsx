'use client';

import { useTranslations } from 'next-intl';
import type { FleetSize } from '@/types/user';
import type { OnboardingStepProps } from './types';

const fleetSizes: { id: FleetSize; labelKey: string }[] = [
  { id: '1-3', labelKey: 'onboarding.details.charter.fleet.small' },
  { id: '4-10', labelKey: 'onboarding.details.charter.fleet.medium' },
  { id: '10+', labelKey: 'onboarding.details.charter.fleet.large' },
];

const charterRegions = [
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'aegean', label: 'Aegean Sea' },
  { value: 'adriatic', label: 'Adriatic' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'bahamas', label: 'Bahamas' },
  { value: 'florida', label: 'Florida / Keys' },
  { value: 'bvi', label: 'British Virgin Islands' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'other', label: 'Other' },
];

/**
 * OnboardingStepDetailsCharter
 * 
 * Detail questions for charter companies.
 */
export function OnboardingStepDetailsCharter({
  onNext,
  onBack,
  state,
  onUpdateState,
}: OnboardingStepProps) {
  const t = useTranslations();

  const handleFleetSizeChange = (size: FleetSize) => {
    onUpdateState({
      profile: {
        ...state.profile,
        fleetSize: size,
      },
    });
  };

  const handleRegionChange = (region: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        charterRegion: region,
      },
    });
  };

  const handleUsesOtherPlatformsChange = (uses: boolean) => {
    onUpdateState({
      profile: {
        ...state.profile,
        usesOtherPlatforms: uses,
        // Reset other platforms text if not using other platforms
        ...(uses === false && { otherPlatforms: undefined }),
      },
    });
  };

  const handleOtherPlatformsChange = (platforms: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        otherPlatforms: platforms,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {t('onboarding.details.charter.title')}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          {t('onboarding.details.charter.subtitle')}
        </p>
      </div>

      {/* Fleet Size */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.charter.fleetLabel')}
        </label>
        <div className="grid gap-2">
          {fleetSizes.map((size) => {
            const isSelected = state.profile.fleetSize === size.id;
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => handleFleetSizeChange(size.id)}
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
                  <span className="font-medium">{t(size.labelKey)}</span>
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

      {/* Charter Region */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.charter.regionLabel')}
        </label>
        <select
          value={state.profile.charterRegion || ''}
          onChange={(e) => handleRegionChange(e.target.value)}
          className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
        >
          <option value="">{t('onboarding.details.charter.selectRegion')}</option>
          {charterRegions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.label}
            </option>
          ))}
        </select>
      </div>

      {/* Uses Other Platforms */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.charter.usesOtherPlatforms')}
        </label>
        <div className="flex gap-3">
          {[true, false].map((value) => {
            const isSelected = state.profile.usesOtherPlatforms === value;
            return (
              <button
                key={String(value)}
                type="button"
                onClick={() => handleUsesOtherPlatformsChange(value)}
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

      {/* Which Platforms */}
      {state.profile.usesOtherPlatforms && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--color-text-primary)]">
            {t('onboarding.details.charter.whichPlatforms')}
          </label>
          <input
            type="text"
            value={state.profile.otherPlatforms || ''}
            onChange={(e) => handleOtherPlatformsChange(e.target.value)}
            placeholder={t('onboarding.details.charter.platformsPlaceholder')}
            className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
          />
        </div>
      )}

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

export default OnboardingStepDetailsCharter;

