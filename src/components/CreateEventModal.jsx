import React, { useState, useEffect, useRef } from 'react';
import { IconClose, IconMedia } from './Icons';

export default function CreateEventModal({
  isOpen,
  onClose,
  currentUser,
  onCreateEvent
}) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('internal');
  const [organizer, setOrganizer] = useState(currentUser.department || 'Dept. of AI&DS');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState('');
  const [link, setLink] = useState('');
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !date.trim()) return;

    onCreateEvent({
      title: title.trim(),
      type,
      organizer: organizer.trim(),
      date: date.trim(),
      time: time.trim() || '10:00 AM - 04:00 PM',
      venue: venue.trim() || 'College Auditorium',
      deadline: deadline.trim() || 'Registration open',
      description: description.trim(),
      poster: poster || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      link: link.trim() || null
    });

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal"
      onClose={onClose}
    >
      <div className="modal-dialog-content">
        <div className="modal-header">
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <IconClose />
          </button>
          <span style={{ fontWeight: 700, fontSize: 16 }}>Create New Event</span>
          <div style={{ width: 36 }} />
        </div>

        <form onSubmit={handleSubmit} className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <label style={{ flex: 1, fontSize: 13, fontWeight: 700 }}>
              Event Type:
              <select
                className="select-chip"
                style={{ width: '100%', marginTop: 4, padding: 8 }}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="internal">Internal Event (QR Attendance)</option>
                <option value="external">External Competition</option>
              </select>
            </label>
          </div>

          <label style={{ fontSize: 13, fontWeight: 700 }}>
            Event Title:
            <input
              type="text"
              required
              placeholder="e.g. Workshop on Edge AI & Robotics"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="search-input"
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
            />
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            <label style={{ fontSize: 13, fontWeight: 700 }}>
              Date:
              <input
                type="text"
                required
                placeholder="e.g. Nov 15, 2026"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="search-input"
                style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              />
            </label>
            <label style={{ fontSize: 13, fontWeight: 700 }}>
              Time:
              <input
                type="text"
                placeholder="e.g. 09:30 AM - 04:30 PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="search-input"
                style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              />
            </label>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            <label style={{ fontSize: 13, fontWeight: 700 }}>
              Venue:
              <input
                type="text"
                placeholder="e.g. Seminar Hall 1, Main Block"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="search-input"
                style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              />
            </label>
            <label style={{ fontSize: 13, fontWeight: 700 }}>
              Registration Deadline:
              <input
                type="text"
                placeholder="e.g. Nov 12, 2026 5:00 PM"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="search-input"
                style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              />
            </label>
          </div>

          <label style={{ fontSize: 13, fontWeight: 700 }}>
            Description & Instructions:
            <textarea
              rows={3}
              placeholder="Provide event details, eligibility, prerequisites..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="search-input"
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', resize: 'none' }}
            />
          </label>

          {type === 'external' && (
            <label style={{ fontSize: 13, fontWeight: 700 }}>
              External Registration URL:
              <input
                type="url"
                placeholder="https://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="search-input"
                style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
              />
            </label>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 10 }}>
            <button type="button" onClick={onClose} className="btn-primary-post" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
              Cancel
            </button>
            <button type="submit" className="btn-primary-post">
              Publish Event
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
