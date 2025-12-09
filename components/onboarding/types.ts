/**
 * Onboarding Types
 * 
 * Type definitions for the onboarding flow.
 */

import type { PrimaryUsage, UserProfile } from '@/types/user';

/**
 * Onboarding step identifiers
 */
export type OnboardingStep = 
  | 'usage'
  | 'details-member'
  | 'details-owner'
  | 'details-broker'
  | 'details-charter'
  | 'completed';

/**
 * Onboarding wizard state
 */
export interface OnboardingState {
  currentStep: OnboardingStep;
  selectedUsage: PrimaryUsage | null;
  profile: Partial<UserProfile>;
}

/**
 * Step component props (common)
 */
export interface OnboardingStepProps {
  onNext: () => void;
  onBack?: () => void;
  state: OnboardingState;
  onUpdateState: (updates: Partial<OnboardingState>) => void;
}

/**
 * Usage option for step 1
 */
export interface UsageOption {
  id: PrimaryUsage;
  titleKey: string;
  descriptionKey: string;
  icon: 'user' | 'boat' | 'briefcase' | 'anchor';
}

/**
 * Get the details step for a usage type
 */
export function getDetailsStepForUsage(usage: PrimaryUsage): OnboardingStep {
  switch (usage) {
    case 'enthusiast':
      return 'details-member';
    case 'owner':
      return 'details-owner';
    case 'broker':
      return 'details-broker';
    case 'charter':
      return 'details-charter';
    default:
      return 'details-member';
  }
}

/**
 * Map usage type to user role
 */
export function usageToRole(usage: PrimaryUsage): 'member' | 'owner' | 'broker' | 'charter' {
  switch (usage) {
    case 'enthusiast':
      return 'member';
    case 'owner':
      return 'owner';
    case 'broker':
      return 'broker';
    case 'charter':
      return 'charter';
    default:
      return 'member';
  }
}

