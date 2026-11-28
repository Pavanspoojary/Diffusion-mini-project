import React, { useEffect, useRef } from 'react';
import { IconClose, IconAppDownload } from './Icons';

export default function PwaInstallModal({
  isOpen,
  onClose,
  canInstallDirectly = false,
  onInstall,
  isAlreadyInstalled = false
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal"
      onClose={onClose}
    >
      <div className="modal-dialog-content" style={{ maxWidth: 460 }}>
        <div className="modal-header">
          <h2 className="modal-heading">Download Campus Hub App</h2>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <IconClose />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '20px 24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <img
              src="/smvitm-logo.png"
              alt="SMVITM Logo"
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                objectFit: 'contain',
                padding: 6,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                flexShrink: 0
              }}
            />
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                SMVITM Campus Hub
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '3px 0 0', lineHeight: 1.4 }}>
                Real-time Notices, Events &amp; College Resources
              </p>
            </div>
          </div>

          {isAlreadyInstalled ? (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 12,
                background: 'rgba(0, 186, 124, 0.1)',
                border: '1px solid rgba(0, 186, 124, 0.3)',
                color: '#00ba7c',
                fontSize: 13,
                fontWeight: 600,
                textAlign: 'center',
                marginBottom: 20
              }}
            >
              App is already installed and active on this device.
            </div>
          ) : canInstallDirectly ? (
            <div style={{ marginBottom: 20 }}>
              <button
                type="button"
                className="btn-auth-create"
                onClick={onInstall}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '12px 20px',
                  fontSize: 15,
                  fontWeight: 700
                }}
              >
                <IconAppDownload style={{ width: 18, height: 18 }} />
                Install Campus App
              </button>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center', marginTop: 8 }}>
                One-tap installation to home screen &amp; app launcher
              </p>
            </div>
          ) : null}

          {/* Platform Instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                padding: 14,
                borderRadius: 12,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                iOS (iPhone / iPad - Safari)
              </div>
              <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>Tap the <strong>Share</strong> button in the Safari toolbar.</li>
                <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
                <li>Tap <strong>Add</strong> in the top-right corner.</li>
              </ol>
            </div>

            <div
              style={{
                padding: 14,
                borderRadius: 12,
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                Android &amp; Desktop (Chrome / Edge / Brave)
              </div>
              <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>Look for the <strong>Install</strong> icon in the address bar or tap the <strong>three dots menu</strong>.</li>
                <li>Select <strong>Install SMVITM Campus Hub</strong> or <strong>Add to Home screen</strong>.</li>
              </ol>
            </div>
          </div>

          {/* Direct Download Manifest Link */}
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <a
              href="/manifest.webmanifest"
              download="manifest.webmanifest"
              style={{
                fontSize: 12,
                color: 'var(--accent-color, #1d9bf0)',
                textDecoration: 'none'
              }}
            >
              Download web app manifest (manifest.webmanifest)
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
