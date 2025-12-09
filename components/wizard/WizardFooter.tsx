'use client';

import React from 'react';

export interface WizardFooterProps {
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  isNextDisabled?: boolean;
  isSubmitting?: boolean;
  backLabel?: string;
  nextLabel?: string;
  submitLabel?: string;
  showSaveAndExit?: boolean;
  onSaveAndExit?: () => void;
}

export function WizardFooter({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
  isNextDisabled = false,
  isSubmitting = false,
  backLabel = 'Back',
  nextLabel = 'Continue',
  submitLabel = 'Create listing',
  showSaveAndExit = false,
  onSaveAndExit,
}: WizardFooterProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--color-border-default)]">
      {/* Left: Back button or Save & Exit */}
      <div className="w-full sm:w-auto flex gap-3">
        {!isFirstStep && (
          <button
            type="button"
            onClick={onBack}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            {backLabel}
          </button>
        )}

        {showSaveAndExit && onSaveAndExit && (
          <button
            type="button"
            onClick={onSaveAndExit}
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors"
          >
            Save & exit
          </button>
        )}
      </div>

      {/* Right: Next or Submit button */}
      <div className="w-full sm:w-auto">
        {isLastStep ? (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isNextDisabled || isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating...
              </>
            ) : (
              <>
                {submitLabel}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={isNextDisabled}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {nextLabel}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default WizardFooter;

