/**
 * Snap Components Index
 *
 * Exports all Snap-to-ID related components.
 */

export { SnapFlow } from './SnapFlow';
export { SnapIntro } from './SnapIntro';
export { SnapImagePicker } from './SnapImagePicker';
export { SnapImagePreview } from './SnapImagePreview';
export { SnapProcessing } from './SnapProcessing';
export { SnapResults } from './SnapResults';
export { SnapResultCard } from './SnapResultCard';
export { SnapError } from './SnapError';

// Types
export type {
  SnapFlowState,
  SnapPrediction,
  SnapPredictionResponse,
  SnapError as SnapErrorType,
  ConfidenceLevel,
} from './types';

// Utilities
export { getConfidenceLevel, getConfidenceColorClass, getConfidenceTextClass } from './types';
export { mockPredict } from './mockPredict';

