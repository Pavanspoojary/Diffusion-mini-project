import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="x-toast" role="status" aria-live="polite">
      <span>{message}</span>
    </div>
  );
}
