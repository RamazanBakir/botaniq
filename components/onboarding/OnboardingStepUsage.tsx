'use client';

import { useTranslations } from 'next-intl';
import type { PrimaryUsage } from '@/types/user';
import type { OnboardingStepProps, UsageOption } from './types';

// Icon components
function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function BoatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 6l1-1M16 6l-1-1M4 17l2.5-2.5M20 17l-2.5-2.5M3 22h18M6 17l6-5 6 5M6 17v5h12v-5" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9m9 9a9 9 0 009-9m-9 9V3m0 18c-1.5 0-4.5-.5-6.5-2m6.5 2c1.5 0 4.5-.5 6.5-2M12 3a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

const icons = {
  user: UserIcon,
  boat: BoatIcon,
  briefcase: BriefcaseIcon,
  anchor: AnchorIcon,
};

const usageOptions: UsageOption[] = [
  {
    id: 'enthusiast',
    titleKey: 'onboarding.usage.options.enthusiast.title',
    descriptionKey: 'onboarding.usage.options.enthusiast.description',
    icon: 'user',
  },
  {
    id: 'owner',
    titleKey: 'onboarding.usage.options.owner.title',
    descriptionKey: 'onboarding.usage.options.owner.description',
    icon: 'boat',
  },
  {
    id: 'broker',
    titleKey: 'onboarding.usage.options.broker.title',
    descriptionKey: 'onboarding.usage.options.broker.description',
    icon: 'briefcase',
  },
  {
    id: 'charter',
    titleKey: 'onboarding.usage.options.charter.title',
    descriptionKey: 'onboarding.usage.options.charter.description',
    icon: 'anchor',
  },
];

/**
 * OnboardingStepUsage
 * 
 * First step of onboarding - user selects how they'll use Botaniq.
 */
export function OnboardingStepUsage({
  onNext,
  state,
  onUpdateState,
}: OnboardingStepProps) {
  const t = useTranslations();

  const handleSelectUsage = (usage: PrimaryUsage) => {
    onUpdateState({
      selectedUsage: usage,
      profile: {
        ...state.profile,
        primaryUsage: usage,
      },
    });
  };

  const handleNext = () => {
    if (state.selectedUsage) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      {/* Usage Options */}
      <div className="grid gap-3">
        {usageOptions.map((option) => {
          const IconComponent = icons[option.icon];
          const isSelected = state.selectedUsage === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectUsage(option.id)}
              className={`
                w-full p-4 rounded-xl border-2 text-left transition-all duration-200
                ${
                  isSelected
                    ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)]'
                    : 'border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-muted)]'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                    flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                    ${
                      isSelected
                        ? 'bg-[var(--color-brand-primary-500)] text-white'
                        : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]'
                    }
                  `}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`
                      font-semibold text-base
                      ${isSelected ? 'text-[var(--color-brand-primary-700)]' : 'text-[var(--color-text-primary)]'}
                    `}
                  >
                    {t(option.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    {t(option.descriptionKey)}
                  </p>
                </div>
                {/* Selection indicator */}
                <div className="flex-shrink-0 self-center">
                  <div
                    className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${
                        isSelected
                          ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-500)]'
                          : 'border-[var(--color-border-strong)]'
                      }
                    `}
                  >
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="pt-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={!state.selectedUsage}
          className={`
            w-full py-3 px-6 rounded-xl font-semibold text-base transition-all
            ${
              state.selectedUsage
                ? 'bg-[var(--color-brand-primary-500)] text-white hover:bg-[var(--color-brand-primary-600)]'
                : 'bg-[var(--color-bg-muted)] text-[var(--color-text-tertiary)] cursor-not-allowed'
            }
          `}
        >
          {t('onboarding.buttons.continue')}
        </button>
      </div>
    </div>
  );
}

export default OnboardingStepUsage;

