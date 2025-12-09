/**
 * Mock Prediction Service
 *
 * Simulates the Snap-to-ID prediction API for front-end development.
 * This will be replaced with real API calls in a future sprint.
 */

import type { SnapPrediction, SnapPredictionResponse, SnapError } from './types';

/**
 * Mock prediction data
 */
const mockPredictions: SnapPrediction[] = [
  {
    id: '1',
    brand: 'Sea Ray',
    model: 'Sundancer 320',
    lengthRange: '32-34 ft',
    yearRange: '2019-2023',
    confidence: 94,
    isPrimary: true,
    boatType: 'Express Cruiser',
  },
  {
    id: '2',
    brand: 'Sea Ray',
    model: 'Sundancer 350',
    lengthRange: '35-37 ft',
    yearRange: '2018-2022',
    confidence: 78,
    boatType: 'Express Cruiser',
  },
  {
    id: '3',
    brand: 'Bayliner',
    model: 'Ciera 8',
    lengthRange: '29-31 ft',
    yearRange: '2020-2024',
    confidence: 62,
    boatType: 'Cuddy Cabin',
  },
  {
    id: '4',
    brand: 'Regal',
    model: '33 Express',
    lengthRange: '33-35 ft',
    yearRange: '2017-2021',
    confidence: 45,
    boatType: 'Express Cruiser',
  },
];

/**
 * Simulates processing delay
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a random variation of the base predictions
 * to simulate different results each time
 */
function generateVariedPredictions(): SnapPrediction[] {
  // Randomly adjust confidence scores slightly
  return mockPredictions.map((prediction, index) => ({
    ...prediction,
    confidence: Math.min(
      100,
      Math.max(
        20,
        prediction.confidence + Math.floor(Math.random() * 10) - 5
      )
    ),
    isPrimary: index === 0,
  }));
}

/**
 * Mock prediction function
 *
 * Simulates an API call to identify a boat from an image.
 * Returns mock data after a realistic delay.
 *
 * @param file - The image file (unused in mock, will be used in real implementation)
 * @param previewUrl - Preview URL of the image (unused in mock, will be used in real implementation)
 * @returns Promise resolving to prediction results
 *
 * @example
 * ```ts
 * const result = await mockPredict(file, previewUrl);
 * console.log(result.predictions);
 * ```
 */
export async function mockPredict(
  file: File,
  previewUrl: string
): Promise<SnapPredictionResponse> {
  // In real implementation, file and previewUrl will be sent to the API
  void file;
  void previewUrl;
  // Simulate network delay (1.5 - 2.5 seconds)
  const processingTime = 1500 + Math.random() * 1000;
  await delay(processingTime);

  // 5% chance of simulating an error for testing error handling
  if (Math.random() < 0.05) {
    const error: SnapError = {
      code: 'PROCESSING_FAILED',
      message: 'Unable to process the image. Please try again.',
    };
    throw error;
  }

  // Generate predictions with slight variations
  const predictions = generateVariedPredictions();

  return {
    predictions,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Mock error for testing error states
 */
export function mockPredictWithError(): Promise<never> {
  return delay(1000).then(() => {
    const error: SnapError = {
      code: 'NO_BOAT_DETECTED',
      message: 'No boat detected in the image. Please try with a clearer photo.',
    };
    throw error;
  });
}

export default mockPredict;

