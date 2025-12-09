'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Modal } from '@/design-system/components';
import { useUser } from '@/contexts/UserContext';
import type { OnboardingStep, OnboardingState } from './types';
import { getDetailsStepForUsage, usageToRole } from './types';
import { OnboardingStepUsage } from './OnboardingStepUsage';
import { OnboardingStepDetailsMember } from './OnboardingStepDetailsMember';
import { OnboardingStepDetailsOwner } from './OnboardingStepDetailsOwner';
import { OnboardingStepDetailsBroker } from './OnboardingStepDetailsBroker';
import { OnboardingStepDetailsCharter } from './OnboardingStepDetailsCharter';
import { OnboardingStepCompleted } from './OnboardingStepCompleted';

/**
 * OnboardingModal Props
 */
interface OnboardingModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when onboarding is completed */
  onComplete?: () => void;
}

/**
 * Step configuration
 */
const stepConfig: Record<OnboardingStep, { titleKey: string; descriptionKey: string }> = {
  usage: {
    titleKey: 'onboarding.usage.title',
    descriptionKey: 'onboarding.usage.description',
  },
  'details-member': {
    titleKey: 'onboarding.details.member.title',
    descriptionKey: 'onboarding.details.member.subtitle',
  },
  'details-owner': {
    titleKey: 'onboarding.details.owner.title',
    descriptionKey: 'onboarding.details.owner.subtitle',
  },
  'details-broker': {
    titleKey: 'onboarding.details.broker.title',
    descriptionKey: 'onboarding.details.broker.subtitle',
  },
  'details-charter': {
    titleKey: 'onboarding.details.charter.title',
    descriptionKey: 'onboarding.details.charter.subtitle',
  },
  completed: {
    titleKey: 'onboarding.completed.title',
    descriptionKey: 'onboarding.completed.subtitle',
  },
};

/**
 * OnboardingModal
 * 
 * Main orchestrator component for the onboarding flow.
 * Shows a multi-step wizard to collect user role and profile information.
 */
export function OnboardingModal({ isOpen, onComplete }: OnboardingModalProps) {
  const t = useTranslations();
  const { completeOnboarding } = useUser();

  // Wizard state
  const [state, setState] = useState<OnboardingState>({
    currentStep: 'usage',
    selectedUsage: null,
    profile: {},
  });

  // Update state handler
  const handleUpdateState = useCallback((updates: Partial<OnboardingState>) => {
    setState((prev) => ({
      ...prev,
      ...updates,
      profile: {
        ...prev.profile,
        ...(updates.profile || {}),
      },
    }));
  }, []);

  // Navigate to next step
  const handleNext = useCallback(() => {
    setState((prev) => {
      switch (prev.currentStep) {
        case 'usage':
          if (prev.selectedUsage) {
            return {
              ...prev,
              currentStep: getDetailsStepForUsage(prev.selectedUsage),
            };
          }
          return prev;
        case 'details-member':
        case 'details-owner':
        case 'details-broker':
        case 'details-charter':
          return {
            ...prev,
            currentStep: 'completed',
          };
        default:
          return prev;
      }
    });
  }, []);

  // Navigate to previous step
  const handleBack = useCallback(() => {
    setState((prev) => {
      switch (prev.currentStep) {
        case 'details-member':
        case 'details-owner':
        case 'details-broker':
        case 'details-charter':
          return {
            ...prev,
            currentStep: 'usage',
          };
        case 'completed':
          if (prev.selectedUsage) {
            return {
              ...prev,
              currentStep: getDetailsStepForUsage(prev.selectedUsage),
            };
          }
          return {
            ...prev,
            currentStep: 'usage',
          };
        default:
          return prev;
      }
    });
  }, []);

  // Complete onboarding
  const handleComplete = useCallback(() => {
    if (state.selectedUsage) {
      const role = usageToRole(state.selectedUsage);
      completeOnboarding(role, state.profile);
      onComplete?.();
    }
  }, [state.selectedUsage, state.profile, completeOnboarding, onComplete]);

  // Get current step config
  const currentConfig = stepConfig[state.currentStep];

  // Determine if we should show the modal header
  const showHeader = state.currentStep !== 'completed';

  // Render current step
  const renderStep = () => {
    const commonProps = {
      state,
      onUpdateState: handleUpdateState,
      onNext: handleNext,
      onBack: handleBack,
    };

    switch (state.currentStep) {
      case 'usage':
        return <OnboardingStepUsage {...commonProps} onBack={undefined} />;
      case 'details-member':
        return <OnboardingStepDetailsMember {...commonProps} />;
      case 'details-owner':
        return <OnboardingStepDetailsOwner {...commonProps} />;
      case 'details-broker':
        return <OnboardingStepDetailsBroker {...commonProps} />;
      case 'details-charter':
        return <OnboardingStepDetailsCharter {...commonProps} />;
      case 'completed':
        return (
          <OnboardingStepCompleted
            {...commonProps}
            onComplete={handleComplete}
          />
        );
      default:
        return null;
    }
  };

  // Calculate progress
  const getProgress = () => {
    const steps: OnboardingStep[] = ['usage', 'details-member', 'completed'];
    const currentIndex = steps.indexOf(state.currentStep);
    if (currentIndex === -1) {
      // Handle details steps that aren't in the basic array
      if (state.currentStep.startsWith('details-')) return 50;
      return 0;
    }
    return Math.round(((currentIndex + 1) / steps.length) * 100);
  };

  return (
    <Modal
      isOpen={isOpen}
      title={showHeader ? t(currentConfig.titleKey) : undefined}
      description={showHeader ? t(currentConfig.descriptionKey) : undefined}
      showCloseButton={false}
      closeOnBackdropClick={false}
      closeOnEscape={false}
      maxWidth="md"
    >
      {/* Progress Bar */}
      {state.currentStep !== 'completed' && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)] mb-2">
            <span>{t('onboarding.progress.step', { current: state.currentStep === 'usage' ? 1 : 2, total: 3 })}</span>
            <span>{getProgress()}%</span>
          </div>
          <div className="h-1.5 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-brand-primary-500)] transition-all duration-300 ease-out"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      {renderStep()}
    </Modal>
  );
}

export default OnboardingModal;

