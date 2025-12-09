'use client';

export interface MapShellProps {
  className?: string;
}

export function MapShell({ className = '' }: MapShellProps) {
  return (
    <div 
      className={`
        relative w-full h-full min-h-[300px]
        bg-gradient-to-br from-[var(--color-brand-primary-50)] to-[var(--color-bg-muted)]
        rounded-xl overflow-hidden
        border border-[var(--color-border-default)]
        ${className}
      `}
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border-default) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border-default) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Map Controls Placeholder */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button className="w-10 h-10 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-lg shadow-sm flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button className="w-10 h-10 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-lg shadow-sm flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        </button>
      </div>

      {/* Sample Map Pins */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Pin 1 */}
        <div className="absolute top-[30%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--color-brand-primary-500)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Pin 2 */}
        <div className="absolute top-[45%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--color-brand-primary-500)] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Pin 3 */}
        <div className="absolute top-[60%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--color-brand-primary-500)] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Pin 4 */}
        <div className="absolute top-[35%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[var(--color-brand-primary-500)] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Placeholder Message */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-[var(--color-bg-surface)]/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-[var(--color-border-default)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[var(--color-brand-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Interactive Map</p>
              <p className="text-xs text-[var(--color-text-secondary)]">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapShell;

