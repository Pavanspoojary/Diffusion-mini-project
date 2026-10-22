import React, { useEffect, useRef } from 'react';
import { IconClose } from './Icons';

export default function DisplayModal({
  isOpen,
  onClose,
  theme,
  setTheme,
  color,
  setColor
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

  const colorOptions = [
    { id: 'blue', hex: '#1d9bf0' },
    { id: 'yellow', hex: '#ffd400' },
    { id: 'pink', hex: '#f91880' },
    { id: 'purple', hex: '#7856ff' },
    { id: 'orange', hex: '#ff7a00' },
    { id: 'green', hex: '#00ba7c' }
  ];

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal"
      onClose={onClose}
    >
      <div className="modal-dialog-content">
        <div className="modal-header">
          <h2 className="modal-heading">Customize your view</h2>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <IconClose />
          </button>
        </div>

        <div className="modal-body display-settings-body">
          <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-secondary)' }}>
            Manage your color theme and background. These preferences apply to the campus hub interface.
          </p>

          {/* Color Accent Picker */}
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>Color</span>
            <div className="color-picker-group" style={{ marginTop: 8 }}>
              {colorOptions.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`color-swatch-btn ${color === c.id ? 'active' : ''}`}
                  style={{ '--c': c.hex }}
                  onClick={() => setColor(c.id)}
                  aria-label={`${c.id} color`}
                />
              ))}
            </div>
          </div>

          {/* Background Picker */}
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>Background</span>
            <div className="bg-picker-group" style={{ marginTop: 8 }}>
              <label className={`bg-option bg-default ${theme === 'dark' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="bgTheme"
                  value="dark"
                  checked={theme === 'dark'}
                  onChange={() => setTheme('dark')}
                />
                <span>Lights out</span>
              </label>

              <label className={`bg-option bg-dim ${theme === 'dim' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="bgTheme"
                  value="dim"
                  checked={theme === 'dim'}
                  onChange={() => setTheme('dim')}
                />
                <span>Dim</span>
              </label>

              <label className={`bg-option bg-light ${theme === 'light' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="bgTheme"
                  value="light"
                  checked={theme === 'light'}
                  onChange={() => setTheme('light')}
                />
                <span>Light</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <button type="button" className="btn-primary-post" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
