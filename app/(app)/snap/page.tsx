import type { Metadata } from 'next';
import { SnapFlow } from '@/components/snap';

export const metadata: Metadata = {
  title: 'Snap-to-ID | Botaniq – Identify boats from a photo',
  description: 'Use Botaniq\'s Snap-to-ID feature to identify boats from a simple photo and discover similar yachts on an interactive map.',
  openGraph: {
    title: 'Snap-to-ID | Botaniq',
    description: 'Identify boats instantly with a photo.',
    url: '/snap',
  },
  twitter: {
    title: 'Snap-to-ID | Botaniq',
    description: 'Identify boats instantly with a photo.',
  },
};

export default function SnapPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[var(--color-bg-canvas)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-[var(--color-brand-primary-700)] bg-[var(--color-brand-primary-100)] rounded-full">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            AI-Powered
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Snap-to-ID
          </h1>
          <p className="text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-2xl">
            Upload a photo of any boat to instantly identify its make, model, and specifications.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Snap Flow - Takes 2/3 on desktop */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6 sm:p-8">
              <SnapFlow />
            </div>
          </div>

          {/* Sidebar - Takes 1/3 on desktop */}
          <aside className="space-y-6">
            {/* How it works */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-5">
                How it works
              </h2>
              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center text-sm font-semibold text-[var(--color-brand-primary-600)]">
                    1
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[var(--color-text-primary)]">Upload a photo</p>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                      Take a picture or upload from your gallery
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center text-sm font-semibold text-[var(--color-brand-primary-600)]">
                    2
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[var(--color-text-primary)]">AI analyzes the image</p>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                      Our AI scans the boat and matches it to our database
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-primary-100)] flex items-center justify-center text-sm font-semibold text-[var(--color-brand-primary-600)]">
                    3
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[var(--color-text-primary)]">Get instant results</p>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                      View matches with confidence scores and specifications
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Tips */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-5">
                Tips for best results
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Ensure good lighting and avoid harsh shadows
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Capture the full side profile of the boat if possible
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Avoid blurry images for more accurate results
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-success-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Higher resolution photos provide better accuracy
                  </p>
                </li>
              </ul>
            </div>

            {/* Privacy Notice */}
            <div className="bg-[var(--color-bg-muted)] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-text-tertiary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">Your privacy matters</p>
                  <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
                    Images are processed securely and not stored after analysis.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
