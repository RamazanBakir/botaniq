'use client';

import type { SnapPrediction } from './types';
import { getConfidenceColorClass, getConfidenceTextClass } from './types';

export interface SnapResultCardProps {
  prediction: SnapPrediction;
  isPrimary?: boolean;
}

export function SnapResultCard({ prediction, isPrimary = false }: SnapResultCardProps) {
  const confidenceColor = getConfidenceColorClass(prediction.confidence);
  const confidenceTextColor = getConfidenceTextClass(prediction.confidence);

  return (
    <div className={`
      relative bg-[var(--color-bg-surface)] rounded-2xl overflow-hidden
      ${isPrimary 
        ? 'border-2 border-[var(--color-brand-primary-200)] shadow-lg' 
        : 'border border-[var(--color-border-default)]'
      }
    `}>
      {/* Primary Badge */}
      {isPrimary && (
        <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold text-white bg-[var(--color-brand-primary-500)] rounded-bl-xl">
          Best Match
        </div>
      )}

      <div className={isPrimary ? 'p-6' : 'p-4'}>
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
            {prediction.boatType || 'Boat'}
          </p>
          <h3 className={`font-bold text-[var(--color-text-primary)] ${isPrimary ? 'text-xl' : 'text-base'}`}>
            {prediction.brand} {prediction.model}
          </h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-muted)] flex items-center justify-center">
              <svg className="w-4 h-4 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-tertiary)]">Length</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">{prediction.lengthRange}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-muted)] flex items-center justify-center">
              <svg className="w-4 h-4 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-tertiary)]">Year</p>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">{prediction.yearRange}</p>
            </div>
          </div>
        </div>

        {/* Confidence */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--color-text-tertiary)]">Match Confidence</span>
            <span className={`text-sm font-semibold ${confidenceTextColor}`}>
              {prediction.confidence}%
            </span>
          </div>
          <div className="h-2 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${confidenceColor}`}
              style={{ width: `${prediction.confidence}%` }}
            />
          </div>
        </div>

        {/* CTA for Primary */}
        {isPrimary && (
          <button className="w-full mt-4 py-3 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-bg-muted)] hover:bg-[var(--color-neutral-200)] rounded-xl transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            View similar boats for sale
          </button>
        )}
      </div>
    </div>
  );
}

export default SnapResultCard;
