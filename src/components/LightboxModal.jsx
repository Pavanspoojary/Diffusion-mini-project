import React, { useEffect, useRef } from 'react';
import { IconClose } from './Icons';

export default function LightboxModal({ isOpen, onClose, imageUrl }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen || !imageUrl) return null;

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        margin: 'auto',
        border: 'none',
        background: 'transparent',
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none'
      }}
    >
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: 'rgba(15, 20, 25, 0.85)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 60
        }}
        aria-label="Close image preview"
      >
        <IconClose />
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90vw',
          height: '90vh'
        }}
      >
        <img
          src={imageUrl}
          alt="Enlarged poster view"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: 8
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </dialog>
  );
}
