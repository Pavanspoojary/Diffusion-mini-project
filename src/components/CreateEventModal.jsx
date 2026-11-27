// sloppy-allow-file: WORD_BUDGET_EXCEEDED
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
  const posterInputRef = useRef(null);

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
      poster: poster || null,
      link: link.trim() || (type === 'internal' ? 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor' : null)
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

          <label style={{ fontSize: 13, fontWeight: 700 }}>
            {type === 'internal' ? 'Google Form Registration URL:' : 'Official Registration URL:'}
            <input
              type="url"
              placeholder={type === 'internal' ? 'https://forms.gle/...' : 'https://...'}
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="search-input"
              style={{ width: '100%', marginTop: 4, padding: 8, borderRadius: 8, border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
            />
          </label>

          <div>
            <span style={{ fontSize: 13, fontWeight: 700, display: 'block', marginBottom: 6 }}>
              Event Poster (Optional):
            </span>
            <input
              type="file"
              ref={posterInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (ev) => setPoster(ev.target.result);
                  reader.readAsDataURL(file);
                }
              }}
            />
            {poster ? (
              <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', maxHeight: 180, border: '1px solid var(--border-color)' }}>
                <img src={poster} alt="Event poster" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', display: 'block' }} />
                <button
                  type="button"
                  onClick={() => setPoster('')}
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    background: 'rgba(0,0,0,0.65)',
                    color: '#fff',
                    borderRadius: '50%',
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  title="Remove poster"
                >
                  <IconClose style={{ width: 16, height: 16 }} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => posterInputRef.current?.click()}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  border: '1px dashed var(--border-color)',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8
                }}
              >
                <IconMedia style={{ width: 18, height: 18 }} />
                <span>Upload Event Poster from device</span>
              </button>
            )}
          </div>

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
