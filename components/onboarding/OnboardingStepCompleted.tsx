'use client';

import { useTranslations } from 'next-intl';
import type { PrimaryUsage } from '@/types/user';
import type { OnboardingStepProps } from './types';

// Icons for different user types
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ConfettiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

interface OnboardingStepCompletedProps extends OnboardingStepProps {
  onComplete: () => void;
}

/**
 * Get suggested actions based on user type
 */
function getSuggestedActions(usage: PrimaryUsage | null): string[] {
  switch (usage) {
    case 'enthusiast':
      return [
        'onboarding.completed.actions.enthusiast.explore',
        'onboarding.completed.actions.enthusiast.snap',
        'onboarding.completed.actions.enthusiast.save',
      ];
    case 'owner':
      return [
        'onboarding.completed.actions.owner.create',
        'onboarding.completed.actions.owner.manage',
        'onboarding.completed.actions.owner.connect',
      ];
    case 'broker':
      return [
        'onboarding.completed.actions.broker.dashboard',
        'onboarding.completed.actions.broker.listings',
        'onboarding.completed.actions.broker.analytics',
      ];
    case 'charter':
      return [
        'onboarding.completed.actions.charter.fleet',
        'onboarding.completed.actions.charter.bookings',
        'onboarding.completed.actions.charter.calendar',
      ];
    default:
      return [];
  }
}

/**
 * OnboardingStepCompleted
 * 
 * Final step showing success and next steps.
 */
export function OnboardingStepCompleted({
  state,
  onComplete,
}: OnboardingStepCompletedProps) {
  const t = useTranslations();
  const suggestedActions = getSuggestedActions(state.selectedUsage);

  const getRoleLabel = () => {
    switch (state.selectedUsage) {
      case 'enthusiast':
        return t('onboarding.completed.role.enthusiast');
      case 'owner':
        return t('onboarding.completed.role.owner');
      case 'broker':
        return t('onboarding.completed.role.broker');
      case 'charter':
        return t('onboarding.completed.role.charter');
      default:
        return '';
    }
  };

  const getPrimaryAction = () => {
    switch (state.selectedUsage) {
      case 'enthusiast':
        return {
          label: t('onboarding.completed.cta.enthusiast'),
          href: '/explore',
        };
      case 'owner':
        return {
          label: t('onboarding.completed.cta.owner'),
          href: '/listings/new',
        };
      case 'broker':
        return {
          label: t('onboarding.completed.cta.broker'),
          href: '/dashboard',
        };
      case 'charter':
        return {
          label: t('onboarding.completed.cta.charter'),
          href: '/dashboard',
        };
      default:
        return {
          label: t('onboarding.completed.cta.default'),
          href: '/dashboard',
        };
    }
  };

  const primaryAction = getPrimaryAction();

  return (
    <div className="text-center space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-[var(--color-success-50)] flex items-center justify-center">
            <CheckCircleIcon className="w-12 h-12 text-[var(--color-success-500)]" />
          </div>
          <div className="absolute -top-1 -right-1">
            <ConfettiIcon className="w-8 h-8 text-[var(--color-warning-500)]" />
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
          {t('onboarding.completed.title')}
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          {t('onboarding.completed.subtitle')}
        </p>
      </div>

      {/* Role Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand-primary-50)] rounded-full">
        <span className="text-sm text-[var(--color-brand-primary-600)]">
          {t('onboarding.completed.joiningAs')}
        </span>
        <span className="text-sm font-semibold text-[var(--color-brand-primary-700)]">
          {getRoleLabel()}
        </span>
      </div>

      {/* Suggested Actions */}
      {suggestedActions.length > 0 && (
        <div className="bg-[var(--color-bg-muted)] rounded-xl p-4 text-left">
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            {t('onboarding.completed.whatYouCanDo')}
          </h4>
          <ul className="space-y-2">
            {suggestedActions.map((actionKey, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[var(--color-brand-primary-500)] flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {t(actionKey)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={onComplete}
          className="w-full py-3 px-6 rounded-xl font-semibold text-base bg-[var(--color-brand-primary-500)] text-white hover:bg-[var(--color-brand-primary-600)] transition-all"
        >
          {primaryAction.label}
        </button>
        <button
          type="button"
          onClick={onComplete}
          className="w-full py-3 px-6 rounded-xl font-semibold text-base text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] transition-all"
        >
          {t('onboarding.completed.exploreLater')}
        </button>
      </div>
    </div>
  );
}

export default OnboardingStepCompleted;

