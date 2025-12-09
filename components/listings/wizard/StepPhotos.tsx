'use client';

import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import { WizardHeader } from '@/components/wizard';
import type { ListingFormData, ListingPhoto } from './types';

export interface StepPhotosProps {
  data: ListingFormData;
  onChange: (updates: Partial<ListingFormData>) => void;
  errors?: Record<string, string>;
}

export function StepPhotos({ data, onChange, errors = {} }: StepPhotosProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      const newPhotos: ListingPhoto[] = files.map((file, index) => ({
        id: `${Date.now()}-${index}`,
        file,
        previewUrl: URL.createObjectURL(file),
        isPrimary: data.photos.length === 0 && index === 0,
      }));

      onChange({ photos: [...data.photos, ...newPhotos] });

      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [data.photos, onChange]
  );

  const handleRemovePhoto = useCallback(
    (photoId: string) => {
      const photo = data.photos.find((p) => p.id === photoId);
      if (photo?.previewUrl) {
        URL.revokeObjectURL(photo.previewUrl);
      }

      const updatedPhotos = data.photos.filter((p) => p.id !== photoId);
      
      // If removed photo was primary, make first photo primary
      if (photo?.isPrimary && updatedPhotos.length > 0) {
        updatedPhotos[0].isPrimary = true;
      }

      onChange({ photos: updatedPhotos });
    },
    [data.photos, onChange]
  );

  const handleSetPrimary = useCallback(
    (photoId: string) => {
      const updatedPhotos = data.photos.map((p) => ({
        ...p,
        isPrimary: p.id === photoId,
      }));
      onChange({ photos: updatedPhotos });
    },
    [data.photos, onChange]
  );

  return (
    <div className="space-y-8">
      <WizardHeader
        title="Photos"
        description="Add photos of your boat. Great photos help your listing stand out."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        }
      />

      {/* Upload Area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-[var(--color-border-default)] hover:border-[var(--color-brand-primary-400)] rounded-xl p-8 text-center cursor-pointer transition-colors"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="sr-only"
        />
        <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--color-bg-muted)] flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-[var(--color-text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        <p className="text-base font-medium text-[var(--color-text-primary)] mb-1">
          Click to upload photos
        </p>
        <p className="text-sm text-[var(--color-text-tertiary)]">
          or drag and drop · JPG, PNG up to 10MB each
        </p>
      </div>

      {errors.photos && (
        <p className="text-sm text-[var(--color-error-600)]">{errors.photos}</p>
      )}

      {/* Photo Grid */}
      {data.photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              {data.photos.length} photo{data.photos.length !== 1 ? 's' : ''} added
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Click the star to set primary photo
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.photos.map((photo) => (
              <div
                key={photo.id}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden group ${
                  photo.isPrimary
                    ? 'ring-2 ring-[var(--color-brand-primary-500)] ring-offset-2'
                    : ''
                }`}
              >
                <Image
                  src={photo.previewUrl}
                  alt="Boat photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {/* Set Primary */}
                  <button
                    type="button"
                    onClick={() => handleSetPrimary(photo.id)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      photo.isPrimary
                        ? 'bg-[var(--color-brand-primary-500)] text-white'
                        : 'bg-white/90 text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary-500)]'
                    }`}
                    title="Set as primary"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(photo.id)}
                    className="w-9 h-9 rounded-full bg-white/90 text-[var(--color-error-500)] hover:bg-[var(--color-error-500)] hover:text-white flex items-center justify-center transition-colors"
                    title="Remove photo"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Primary Badge */}
                {photo.isPrimary && (
                  <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white bg-[var(--color-brand-primary-500)] rounded-md">
                    Primary
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-[var(--color-bg-muted)] rounded-xl p-4">
        <p className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Photo tips:</p>
        <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
          <li>• Include exterior shots from multiple angles</li>
          <li>• Show the cockpit, cabin, and engine</li>
          <li>• Use good lighting and avoid blurry images</li>
          <li>• Add at least 5 photos for best results</li>
        </ul>
      </div>
    </div>
  );
}

export default StepPhotos;

