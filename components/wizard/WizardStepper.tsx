'use client';

import React from 'react';

export interface WizardStep {
  id: string;
  title: string;
  description?: string;
}

export interface WizardStepperProps {
  steps: WizardStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  allowNavigation?: boolean;
}

export function WizardStepper({
  steps,
  currentStep,
  onStepClick,
  allowNavigation = false,
}: WizardStepperProps) {
  const handleStepClick = (index: number) => {
    if (allowNavigation && onStepClick && index < currentStep) {
      onStepClick(index);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile: Simple progress indicator */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-[var(--color-brand-primary-600)]">
            {steps[currentStep]?.title}
          </span>
        </div>
        <div className="h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-brand-primary-500)] rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Full stepper with labels */}
      <div className="hidden lg:block">
        <nav aria-label="Progress">
          <ol className="flex items-center">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isCurrent = index === currentStep;
              const isClickable = allowNavigation && isCompleted;
              const isLast = index === steps.length - 1;

              return (
                <li key={step.id} className={`flex items-center ${isLast ? '' : 'flex-1'}`}>
                  <div className="flex flex-col items-center">
                    {/* Step Circle */}
                    <button
                      type="button"
                      onClick={() => handleStepClick(index)}
                      disabled={!isClickable}
                      className={`
                        flex items-center justify-center w-10 h-10 rounded-full
                        font-semibold text-sm transition-all duration-200
                        ${
                          isCompleted
                            ? 'bg-[var(--color-brand-primary-500)] text-white'
                            : isCurrent
                            ? 'bg-[var(--color-brand-primary-100)] text-[var(--color-brand-primary-700)] ring-2 ring-[var(--color-brand-primary-500)]'
                            : 'bg-[var(--color-bg-muted)] text-[var(--color-text-tertiary)]'
                        }
                        ${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}
                      `}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </button>

                    {/* Step Label */}
                    <div className="mt-2 text-center">
                      <p
                        className={`text-xs font-medium ${
                          isCurrent
                            ? 'text-[var(--color-brand-primary-600)]'
                            : isCompleted
                            ? 'text-[var(--color-text-primary)]'
                            : 'text-[var(--color-text-tertiary)]'
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {!isLast && (
                    <div className="flex-1 mx-3">
                      <div
                        className={`h-0.5 w-full transition-all duration-300 ${
                          isCompleted
                            ? 'bg-[var(--color-brand-primary-500)]'
                            : 'bg-[var(--color-border-default)]'
                        }`}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default WizardStepper;
