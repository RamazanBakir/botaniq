'use client';

import React, { useState, useCallback } from 'react';
import { WizardStepper, WizardFooter } from '@/components/wizard';
import type { WizardStep } from '@/components/wizard';
import { StepBasics } from './StepBasics';
import { StepLocation } from './StepLocation';
import { StepPhotos } from './StepPhotos';
import { StepPricing } from './StepPricing';
import { StepSummary } from './StepSummary';
import type { ListingFormData } from './types';
import { INITIAL_FORM_DATA } from './types';

const WIZARD_STEPS: WizardStep[] = [
  { id: 'basics', title: 'Boat basics', description: 'Type, brand, model' },
  { id: 'location', title: 'Location', description: 'Where is the boat' },
  { id: 'photos', title: 'Photos', description: 'Add images' },
  { id: 'pricing', title: 'Pricing', description: 'Set your price' },
  { id: 'summary', title: 'Review', description: 'Confirm details' },
];

export interface ListingWizardProps {
  onComplete?: (data: ListingFormData) => void;
  onCancel?: () => void;
}

export function ListingWizard({ onComplete, onCancel }: ListingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ListingFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = useCallback((updates: Partial<ListingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    // Clear related errors when field changes
    const fieldsToUpdate = Object.keys(updates);
    setErrors((prev) => {
      const newErrors = { ...prev };
      fieldsToUpdate.forEach((field) => delete newErrors[field]);
      return newErrors;
    });
  }, []);

  const validateStep = useCallback((step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0: // Basics
        if (!formData.boatType) newErrors.boatType = 'Please select a boat type';
        if (!formData.brand.trim()) newErrors.brand = 'Brand is required';
        if (!formData.model.trim()) newErrors.model = 'Model is required';
        if (!formData.year) newErrors.year = 'Year is required';
        if (!formData.length) newErrors.length = 'Length is required';
        break;
      case 1: // Location
        if (!formData.country) newErrors.country = 'Please select a country';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        break;
      case 2: // Photos
        if (formData.photos.length === 0) newErrors.photos = 'Please add at least one photo';
        break;
      case 3: // Pricing
        if (!formData.price) newErrors.price = 'Price is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleNext = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, WIZARD_STEPS.length - 1));
    }
  }, [currentStep, validateStep]);

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleStepClick = useCallback((stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Listing created:', formData);
    setIsSubmitting(false);
    
    if (onComplete) {
      onComplete(formData);
    }
  }, [currentStep, formData, onComplete, validateStep]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <StepBasics data={formData} onChange={handleFormChange} errors={errors} />;
      case 1:
        return <StepLocation data={formData} onChange={handleFormChange} errors={errors} />;
      case 2:
        return <StepPhotos data={formData} onChange={handleFormChange} errors={errors} />;
      case 3:
        return <StepPricing data={formData} onChange={handleFormChange} errors={errors} />;
      case 4:
        return <StepSummary data={formData} onEdit={setCurrentStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Stepper */}
      <div className="mb-8">
        <WizardStepper
          steps={WIZARD_STEPS}
          currentStep={currentStep}
          onStepClick={handleStepClick}
          allowNavigation
        />
      </div>

      {/* Content Card */}
      <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6 sm:p-8">
        {/* Step Content */}
        <div className="min-h-[320px]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="mt-8">
          <WizardFooter
            currentStep={currentStep}
            totalSteps={WIZARD_STEPS.length}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isNextDisabled={isSubmitting}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>

      {/* Cancel link */}
      {onCancel && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onCancel}
            className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Cancel and go back
          </button>
        </div>
      )}
    </div>
  );
}

export default ListingWizard;
