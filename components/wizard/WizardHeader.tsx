'use client';

import React from 'react';

export interface WizardHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function WizardHeader({ title, description, icon }: WizardHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-brand-primary-100)] flex items-center justify-center text-[var(--color-brand-primary-600)]">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm sm:text-base text-[var(--color-text-secondary)]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default WizardHeader;
