/**
 * Snap-to-ID Types
 *
 * Type definitions for the Snap feature.
 */

/**
 * Snap flow states
 */
export type SnapFlowState = 'idle' | 'imageSelected' | 'processing' | 'result' | 'error';

/**
 * Confidence level for display purposes
 */
export type ConfidenceLevel = 'high' | 'medium' | 'low';

/**
 * Single prediction result from Snap-to-ID
 */
export interface SnapPrediction {
  /** Unique identifier for the prediction */
  id: string;
  /** Boat brand/manufacturer */
  brand: string;
  /** Boat model name */
  model: string;
  /** Estimated length range (e.g., "30-35 ft") */
  lengthRange: string;
  /** Estimated year range (e.g., "2018-2022") */
  yearRange: string;
  /** Confidence score (0-100) */
  confidence: number;
  /** Whether this is the primary/best match */
  isPrimary?: boolean;
  /** Optional boat type category */
  boatType?: string;
  /** Optional image URL for the boat */
  imageUrl?: string;
}

/**
 * Snap prediction response
 */
export interface SnapPredictionResponse {
  /** Array of prediction results */
  predictions: SnapPrediction[];
  /** Processing timestamp */
  timestamp: string;
  /** Original image URL that was analyzed */
  analyzedImageUrl?: string;
}

/**
 * Snap error types
 */
export interface SnapError {
  /** Error code */
  code: 'INVALID_IMAGE' | 'PROCESSING_FAILED' | 'NO_BOAT_DETECTED' | 'UNKNOWN';
  /** Human-readable error message */
  message: string;
}

/**
 * Get confidence level from numeric score
 */
export function getConfidenceLevel(confidence: number): ConfidenceLevel {
  if (confidence >= 80) return 'high';
  if (confidence >= 50) return 'medium';
  return 'low';
}

/**
 * Get confidence color class based on level
 */
export function getConfidenceColorClass(confidence: number): string {
  const level = getConfidenceLevel(confidence);
  switch (level) {
    case 'high':
      return 'bg-[var(--color-success-500)]';
    case 'medium':
      return 'bg-[var(--color-warning-500)]';
    case 'low':
      return 'bg-[var(--color-error-400)]';
  }
}

/**
 * Get confidence text color class based on level
 */
export function getConfidenceTextClass(confidence: number): string {
  const level = getConfidenceLevel(confidence);
  switch (level) {
    case 'high':
      return 'text-[var(--color-success-600)]';
    case 'medium':
      return 'text-[var(--color-warning-600)]';
    case 'low':
      return 'text-[var(--color-error-500)]';
  }
}

