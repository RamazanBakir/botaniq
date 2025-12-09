'use client';

import { Card, Stack, Heading, Text } from '@/design-system/components';

/**
 * SnapIntro component props
 */
export interface SnapIntroProps {
  /** Callback when user wants to start */
  onStart: () => void;
}

/**
 * SnapIntro
 *
 * Initial state component for the Snap flow.
 * Explains the feature and guides users to upload an image.
 */
export function SnapIntro({ onStart }: SnapIntroProps) {
  return (
    <Card padding="lg" shadow="md" className="text-center">
      <Stack gap="lg" align="center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[var(--color-brand-primary-50)] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-brand-primary-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        {/* Title & Description */}
        <Stack gap="sm" align="center">
          <Heading variant="h3" align="center">
            How it works
          </Heading>
          <Text variant="body" color="secondary" align="center" className="max-w-sm">
            Take a photo of any boat or upload an existing image.
            Our AI will identify the make, model, and key specifications.
          </Text>
        </Stack>

        {/* Features List */}
        <Stack gap="xs" align="center" className="w-full max-w-xs">
          {[
            'Instant boat identification',
            'Get make, model & year',
            'Find similar boats for sale',
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-left w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="var(--color-success-500)"
                className="w-5 h-5 flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <Text variant="small">{feature}</Text>
            </div>
          ))}
        </Stack>

        {/* CTA */}
        <button
          onClick={onStart}
          className="
            w-full max-w-xs
            py-4 px-6
            bg-[var(--color-brand-primary-500)]
            hover:bg-[var(--color-brand-primary-600)]
            active:bg-[var(--color-brand-primary-700)]
            text-white font-semibold
            rounded-[var(--radius-xl)]
            transition-all duration-[var(--transition-normal)]
            shadow-md hover:shadow-lg
            flex items-center justify-center gap-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload a boat photo
        </button>

        {/* Privacy Note */}
        <Text variant="caption" color="muted" align="center">
          Your photos are processed securely and never shared.
        </Text>
      </Stack>
    </Card>
  );
}

export default SnapIntro;

