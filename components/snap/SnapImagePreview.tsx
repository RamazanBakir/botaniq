'use client';

import Image from 'next/image';

export interface SnapImagePreviewProps {
  previewUrl: string;
  onConfirm: () => void;
  onChangeImage: () => void;
}

export function SnapImagePreview({ previewUrl, onConfirm, onChangeImage }: SnapImagePreviewProps) {
  return (
    <div className="space-y-6">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[var(--color-bg-muted)] rounded-xl overflow-hidden">
        <Image
          src={previewUrl}
          alt="Selected boat photo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>

      {/* Info Box */}
      <div className="flex items-start gap-3 p-4 bg-[var(--color-brand-primary-50)] rounded-xl">
        <svg className="w-5 h-5 text-[var(--color-brand-primary-500)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-[var(--color-brand-primary-700)]">
          Make sure the boat is clearly visible for best results.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onConfirm}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[var(--color-brand-primary-500)] hover:bg-[var(--color-brand-primary-600)] rounded-xl transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          Identify this boat
        </button>
        <button
          onClick={onChangeImage}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[var(--color-text-primary)] bg-[var(--color-bg-muted)] hover:bg-[var(--color-neutral-200)] rounded-xl transition-colors"
        >
          Choose another
        </button>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-center text-[var(--color-text-tertiary)]">
        Your photo is processed securely and won&apos;t be stored.
      </p>
    </div>
  );
}

export default SnapImagePreview;
