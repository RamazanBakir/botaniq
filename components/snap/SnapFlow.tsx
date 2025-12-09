'use client';

import { useState, useCallback } from 'react';
import { SnapImagePicker } from './SnapImagePicker';
import { SnapImagePreview } from './SnapImagePreview';
import { SnapProcessing } from './SnapProcessing';
import { SnapResults } from './SnapResults';
import { SnapError } from './SnapError';
import { mockPredict } from './mockPredict';
import type { SnapFlowState, SnapPrediction, SnapError as SnapErrorType } from './types';

/**
 * SnapFlow - Main orchestrator for the Snap-to-ID flow
 */
export function SnapFlow() {
  const [flowState, setFlowState] = useState<SnapFlowState>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<SnapPrediction[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageSelected = useCallback((file: File, url: string) => {
    setSelectedFile(file);
    setPreviewUrl(url);
    setFlowState('imageSelected');
    setErrorMessage(null);
  }, []);

  const handleChangeImage = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl(null);
    setFlowState('idle');
  }, [previewUrl]);

  const handleConfirm = useCallback(async () => {
    if (!selectedFile || !previewUrl) return;

    setFlowState('processing');
    setErrorMessage(null);

    try {
      const response = await mockPredict(selectedFile, previewUrl);
      setPredictions(response.predictions);
      setFlowState('result');
    } catch (error) {
      const snapError = error as SnapErrorType;
      setErrorMessage(snapError.message || 'An unexpected error occurred.');
      setFlowState('error');
    }
  }, [selectedFile, previewUrl]);

  const handleReset = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setSelectedFile(null);
    setPreviewUrl(null);
    setPredictions([]);
    setErrorMessage(null);
    setFlowState('idle');
  }, [previewUrl]);

  return (
    <div className="w-full">
      {flowState === 'idle' && (
        <SnapImagePicker onImageSelected={handleImageSelected} />
      )}

      {flowState === 'imageSelected' && previewUrl && (
        <SnapImagePreview
          previewUrl={previewUrl}
          onConfirm={handleConfirm}
          onChangeImage={handleChangeImage}
        />
      )}

      {flowState === 'processing' && <SnapProcessing />}

      {flowState === 'result' && predictions.length > 0 && (
        <SnapResults results={predictions} onReset={handleReset} />
      )}

      {flowState === 'error' && (
        <SnapError message={errorMessage || undefined} onRetry={handleReset} />
      )}
    </div>
  );
}

export default SnapFlow;
