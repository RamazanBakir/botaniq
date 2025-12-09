'use client';

import { useTranslations } from 'next-intl';
import type { PortfolioSize } from '@/types/user';
import type { OnboardingStepProps } from './types';

const portfolioSizes: { id: PortfolioSize; labelKey: string }[] = [
  { id: 'small', labelKey: 'onboarding.details.broker.portfolio.small' },
  { id: 'medium', labelKey: 'onboarding.details.broker.portfolio.medium' },
  { id: 'large', labelKey: 'onboarding.details.broker.portfolio.large' },
];

const regions = [
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'northAmerica', label: 'North America' },
  { value: 'northernEurope', label: 'Northern Europe' },
  { value: 'asia', label: 'Asia Pacific' },
  { value: 'other', label: 'Other' },
];

/**
 * OnboardingStepDetailsBroker
 * 
 * Detail questions for brokers/dealers.
 */
export function OnboardingStepDetailsBroker({
  onNext,
  onBack,
  state,
  onUpdateState,
}: OnboardingStepProps) {
  const t = useTranslations();

  const handleCompanyNameChange = (name: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        companyName: name,
      },
    });
  };

  const handleWebsiteChange = (website: string) => {
    onUpdateState({
      profile: {
        ...state.profile,
        companyWebsite: website,
      },
    });
  };

  const handlePortfolioSizeChange = (size: PortfolioSize) => {
    onUpdateState({
      profile: {
        ...state.profile,
        portfolioSize: size,
      },
    });
  };

  const handleRegionToggle = (region: string) => {
    const currentRegions = state.profile.operatingRegions || [];
    const newRegions = currentRegions.includes(region)
      ? currentRegions.filter((r) => r !== region)
      : [...currentRegions, region];
    
    onUpdateState({
      profile: {
        ...state.profile,
        operatingRegions: newRegions,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {t('onboarding.details.broker.title')}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
          {t('onboarding.details.broker.subtitle')}
        </p>
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.broker.companyName')}
        </label>
        <input
          type="text"
          value={state.profile.companyName || ''}
          onChange={(e) => handleCompanyNameChange(e.target.value)}
          placeholder={t('onboarding.details.broker.companyNamePlaceholder')}
          className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
        />
      </div>

      {/* Company Website */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.broker.website')}
          <span className="ml-1 text-[var(--color-text-tertiary)]">
            ({t('common.optional')})
          </span>
        </label>
        <input
          type="url"
          value={state.profile.companyWebsite || ''}
          onChange={(e) => handleWebsiteChange(e.target.value)}
          placeholder="https://www.example.com"
          className="w-full px-4 py-3 bg-[var(--color-bg-canvas)] border border-[var(--color-border-default)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-500)] focus:border-transparent"
        />
      </div>

      {/* Portfolio Size */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.broker.portfolioLabel')}
        </label>
        <div className="grid gap-2">
          {portfolioSizes.map((size) => {
            const isSelected = state.profile.portfolioSize === size.id;
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => handlePortfolioSizeChange(size.id)}
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

      {/* Operating Regions */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {t('onboarding.details.broker.regionsLabel')}
          <span className="ml-1 text-[var(--color-text-tertiary)]">
            ({t('onboarding.details.broker.selectMultiple')})
          </span>
        </label>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => {
            const isSelected = state.profile.operatingRegions?.includes(region.value);
            return (
              <button
                key={region.value}
                type="button"
                onClick={() => handleRegionToggle(region.value)}
                className={`
                  px-4 py-2 rounded-full border text-sm font-medium transition-all
                  ${
                    isSelected
                      ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-500)] text-white'
                      : 'border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] text-[var(--color-text-primary)]'
                  }
                `}
              >
                {region.label}
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

export default OnboardingStepDetailsBroker;

