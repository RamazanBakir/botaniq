'use client';

import { useEffect, useCallback, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Modal component props
 */
export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose?: () => void;
  /** Modal title */
  title?: ReactNode;
  /** Modal description */
  description?: ReactNode;
  /** Modal content */
  children: ReactNode;
  /** Whether clicking backdrop closes modal */
  closeOnBackdropClick?: boolean;
  /** Whether pressing Escape closes modal */
  closeOnEscape?: boolean;
  /** Show close button */
  showCloseButton?: boolean;
  /** Max width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Additional class names */
  className?: string;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
};

/**
 * Modal / Dialog Component
 * 
 * A reusable modal dialog component with backdrop, centered content,
 * and responsive design. Uses React Portal for proper stacking context.
 * 
 * @example
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Welcome"
 *   description="Let's get started"
 * >
 *   <p>Modal content here</p>
 * </Modal>
 * ```
 */
export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  maxWidth = 'lg',
  className = '',
}: ModalProps) {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape && onClose) {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closeOnBackdropClick && onClose) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose]
  );

  // Add/remove escape listener and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  // Don't render if not open
  if (!isOpen) return null;

  // Use portal to render at document body level
  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`
          relative w-full ${maxWidthClasses[maxWidth]}
          bg-[var(--color-bg-surface)]
          border border-[var(--color-border-default)]
          rounded-2xl shadow-2xl
          max-h-[90vh] overflow-hidden
          flex flex-col
          animate-in fade-in zoom-in-95 duration-200
          ${className}
        `}
      >
        {/* Header */}
        {(title || description || showCloseButton) && (
          <div className="flex-shrink-0 px-6 pt-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {title && (
                  <h2
                    id="modal-title"
                    className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id="modal-description"
                    className="mt-2 text-sm sm:text-base text-[var(--color-text-secondary)]"
                  >
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-shrink-0 p-2 -m-2 rounded-lg text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)] transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );

  // Render via portal
  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
}

export default Modal;

