'use client';

import { useRef, useState, useCallback, type DragEvent, type ChangeEvent } from 'react';

export interface SnapImagePickerProps {
  onImageSelected: (file: File, previewUrl: string) => void;
}

export function SnapImagePicker({ onImageSelected }: SnapImagePickerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(
    (file: File) => {
      setError(null);

      if (!file.type.startsWith('image/')) {
        setError('Please select an image file (JPG, PNG, WebP)');
        return;
      }

      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        setError('Image size must be less than 10MB');
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      onImageSelected(file, previewUrl);
    },
    [onImageSelected]
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleClick = () => fileInputRef.current?.click();

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative min-h-[280px] sm:min-h-[320px]
          flex flex-col items-center justify-center
          p-8 cursor-pointer
          border-2 border-dashed rounded-xl
          transition-all duration-200
          ${isDragging
            ? 'border-[var(--color-brand-primary-500)] bg-[var(--color-brand-primary-50)]'
            : 'border-[var(--color-border-strong)] hover:border-[var(--color-brand-primary-400)] hover:bg-[var(--color-bg-muted)]'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="sr-only"
          aria-label="Upload a boat photo"
        />

        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl mb-5 flex items-center justify-center transition-colors ${isDragging ? 'bg-[var(--color-brand-primary-100)]' : 'bg-[var(--color-bg-muted)]'}`}>
          <svg
            className={`w-8 h-8 transition-colors ${isDragging ? 'text-[var(--color-brand-primary-500)]' : 'text-[var(--color-text-tertiary)]'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>

        {/* Text */}
        <p className={`text-lg font-semibold mb-2 transition-colors ${isDragging ? 'text-[var(--color-brand-primary-600)]' : 'text-[var(--color-text-primary)]'}`}>
          {isDragging ? 'Drop your image here' : 'Upload a boat photo'}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-1 hidden sm:block">
          Drag and drop or click to browse
        </p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          JPG, PNG or WebP · Max 10MB
        </p>

        {/* Error */}
        {error && (
          <div className="mt-4 px-4 py-2 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-lg">
            <p className="text-sm text-[var(--color-error-600)]">{error}</p>
          </div>
        )}
      </div>

      {/* Mobile Camera Hint */}
      <div className="sm:hidden">
        <div className="flex items-center gap-3 p-3 bg-[var(--color-bg-muted)] rounded-xl">
          <div className="w-10 h-10 rounded-full bg-[var(--color-bg-surface)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Tap to take a photo with your camera
          </p>
        </div>
      </div>
    </div>
  );
}

export default SnapImagePicker;
