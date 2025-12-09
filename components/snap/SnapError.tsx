'use client';

export interface SnapErrorProps {
  message?: string;
  onRetry: () => void;
}

export function SnapError({ message = 'Something went wrong.', onRetry }: SnapErrorProps) {
  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-8">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[var(--color-error-100)] flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[var(--color-error-500)]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Message */}
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          Unable to identify boat
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-xs">
          {message}
        </p>

        {/* Tips */}
        <div className="w-full max-w-sm p-4 bg-[var(--color-bg-muted)] rounded-xl mb-6">
          <p className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
            Tips for better results:
          </p>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-brand-primary-500)]">•</span>
              Use a clear, well-lit photo
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-brand-primary-500)]">•</span>
              Make sure the boat is the main subject
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-brand-primary-500)]">•</span>
              Try a different angle
            </li>
          </ul>
        </div>

        {/* Retry */}
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try again
        </button>
      </div>
    </div>
  );
}

export default SnapError;
