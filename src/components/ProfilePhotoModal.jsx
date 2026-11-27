import React, { useState, useRef, useEffect } from 'react';
import { IconClose, IconCamera, IconTrash, IconMedia } from './Icons';

function resizeImageToDataUrl(file, maxSize = 420) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = () => resolve(event.target.result);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * scale));
        const height = Math.max(1, Math.round(img.height * scale));
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        try {
          resolve(canvas.toDataURL('image/jpeg', 0.88));
        } catch {
          resolve(event.target.result);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function ProfilePhotoModal({
  isOpen,
  onClose,
  lecturer,
  canEdit = false,
  onSavePhoto
}) {
  const [previewPhoto, setPreviewPhoto] = useState(lecturer?.photoUrl || null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const dialogRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setPreviewPhoto(lecturer?.photoUrl || null);
      setErrorMsg('');
      setIsProcessing(false);
    }
  }, [isOpen, lecturer]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen || !lecturer) return null;

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }

    setErrorMsg('');
    setIsProcessing(true);
    try {
      const dataUrl = await resizeImageToDataUrl(file, 420);
      setPreviewPhoto(dataUrl);
    } catch {
      setErrorMsg('Could not load the selected image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemove = () => {
    setPreviewPhoto(null);
    setErrorMsg('');
  };

  const handleSave = () => {
    onSavePhoto(lecturer.id, previewPhoto);
    onClose();
  };

  const hasChanged = previewPhoto !== (lecturer.photoUrl || null);

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal li-photo-modal"
      onClose={onClose}
    >
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div className="modal-dialog-content">
        <div className="modal-header">
          <h2 className="modal-heading">Profile photo</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <IconClose />
          </button>
        </div>

        <div className="li-photo-modal-body">
          <div className="li-photo-preview-stage">
            <div
              className="li-photo-preview-circle"
              style={{ background: previewPhoto ? 'transparent' : lecturer.avatarBg }}
            >
              {previewPhoto ? (
                <img src={previewPhoto} alt={lecturer.name} />
              ) : (
                <span>{lecturer.avatarChar || lecturer.name?.charAt(0) || 'L'}</span>
              )}
            </div>
          </div>

          <div className="li-photo-preview-meta">
            <strong>{lecturer.name}</strong>
            <span>{lecturer.designation} · {lecturer.department}</span>
          </div>

          {errorMsg && <div className="auth-error-banner">{errorMsg}</div>}

          {canEdit ? (
            <>
              <div className="li-photo-actions-row">
                <button
                  type="button"
                  className="li-photo-action-btn primary"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isProcessing}
                >
                  <IconCamera style={{ width: 17, height: 17 }} />
                  <span>{isProcessing ? 'Processing...' : previewPhoto ? 'Change photo' : 'Upload photo'}</span>
                </button>

                {previewPhoto && (
                  <button
                    type="button"
                    className="li-photo-action-btn danger"
                    onClick={handleRemove}
                    disabled={isProcessing}
                  >
                    <IconTrash style={{ width: 16, height: 16 }} />
                    <span>Remove photo</span>
                  </button>
                )}
              </div>

              <p className="li-photo-hint">
                <IconMedia style={{ width: 14, height: 14, flexShrink: 0 }} />
                <span>Recommended: clear square portrait (JPG, PNG, or WebP). Removing restores your department monogram.</span>
              </p>

              <div className="li-photo-modal-footer">
                <button
                  type="button"
                  className="btn-confirm-cancel"
                  style={{ width: 'auto', padding: '9px 18px' }}
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="li-post-btn"
                  onClick={handleSave}
                  disabled={!hasChanged || isProcessing}
                >
                  Save photo
                </button>
              </div>
            </>
          ) : (
            <div className="li-photo-modal-footer" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="btn-primary-post"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
