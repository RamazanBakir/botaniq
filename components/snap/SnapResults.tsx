'use client';

import { SnapResultCard } from './SnapResultCard';
import type { SnapPrediction } from './types';

export interface SnapResultsProps {
  results: SnapPrediction[];
  onReset: () => void;
}

export function SnapResults({ results, onReset }: SnapResultsProps) {
  const primaryResult = results.find((r) => r.isPrimary) || results[0];
  const alternativeResults = results.filter((r) => r.id !== primaryResult?.id).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-success-100)] mb-4">
          <svg className="w-7 h-7 text-[var(--color-success-500)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
          Match found!
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          Here&apos;s what we identified from your photo.
        </p>
      </div>

      {/* Primary Result */}
      {primaryResult && (
        <SnapResultCard prediction={primaryResult} isPrimary />
      )}

      {/* Alternative Results */}
      {alternativeResults.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[var(--color-text-secondary)]">
              Other possible matches
            </h3>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              {alternativeResults.length} alternative{alternativeResults.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-3">
            {alternativeResults.map((result) => (
              <SnapResultCard key={result.id} prediction={result} />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="pt-6 border-t border-[var(--color-border-default)]">
        <p className="text-sm text-[var(--color-text-tertiary)] text-center mb-4">
          Not the right boat?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold !text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try another photo
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] rounded-xl transition-colors">
            Give feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default SnapResults;
