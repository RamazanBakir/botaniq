'use client';

export interface SnapProcessingProps {
  message?: string;
}

export function SnapProcessing({ message = 'Analyzing your photo…' }: SnapProcessingProps) {
  return (
    <div className="py-8 sm:py-12">
      <div className="flex flex-col items-center text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-[var(--color-brand-primary-100)]" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--color-brand-primary-500)] animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-brand-primary-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          {message}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-sm">
          Our AI is identifying the boat make, model, and specifications.
        </p>

        {/* Progress Steps */}
        <div className="flex items-center gap-4">
          {['Upload', 'Analyze', 'Match'].map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${index <= 1 ? 'bg-[var(--color-brand-primary-500)]' : 'bg-[var(--color-neutral-300)]'} ${index === 1 ? 'animate-pulse' : ''}`} />
              <span className={`text-sm font-medium ${index <= 1 ? 'text-[var(--color-brand-primary-600)]' : 'text-[var(--color-text-tertiary)]'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SnapProcessing;
