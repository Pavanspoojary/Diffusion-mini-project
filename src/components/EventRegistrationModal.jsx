import React, { useRef, useEffect, useState } from 'react';
import { IconClose, IconCheck, IconExternal } from './Icons';

export default function EventRegistrationModal({
  isOpen,
  onClose,
  event,
  currentUser,
  onRegisterEvent
}) {
  const dialogRef = useRef(null);

  // Form field states
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [branch, setBranch] = useState('AI&DS');
  const [semester, setSemester] = useState('4th Sem (2nd Year)');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setUsn(currentUser.usn || '');
      setBranch(currentUser.branch || 'AI&DS');
      setEmail(currentUser.email || '');
    }
    setIsSubmitted(false);
    setIsSubmitting(false);
  }, [currentUser, event, isOpen]);

  if (!isOpen || !event) return null;

  const isAlreadyRegistered = Boolean(event.isRegistered);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !usn.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      if (onRegisterEvent) {
        onRegisterEvent(event.id, {
          name,
          usn: usn.toUpperCase(),
          branch,
          semester,
          email,
          phone,
          notes,
          timestamp: new Date().toISOString()
        });
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleCancelRegistration = () => {
    if (onRegisterEvent) {
      onRegisterEvent(event.id);
    }
    onClose();
  };

  const getSafeGoogleFormLink = () => {
    if (event.link && !event.link.includes('instagram.com') && event.link.includes('form')) {
      return event.link;
    }
    return 'https://docs.google.com/forms';
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal"
      onClose={onClose}
      style={{ maxWidth: 580 }}
    >
      <div className="modal-dialog-content google-form-modal-content">
        {/* Google Form Style Top Accent Bar */}
        <div style={{ height: 10, backgroundColor: '#673ab7', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />

        {/* Modal Header */}
        <div className="modal-header" style={{ padding: '16px 20px 12px 20px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              backgroundColor: '#673ab7',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 14,
              boxShadow: '0 2px 6px rgba(103, 58, 183, 0.3)'
            }}>
              G
            </div>
            <div>
              <h2 className="modal-heading" style={{ fontSize: 16, margin: 0 }}>
                Google Forms • Event Registration
              </h2>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                SMVITM Campus Portal • Shri Madhwa Vadiraja Institute
              </span>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <IconClose />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body" style={{ padding: '16px 20px 24px 20px', maxHeight: '75vh', overflowY: 'auto' }}>
          {isSubmitted ? (
            /* Submission Success View */
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 186, 124, 0.15)',
                color: '#00ba7c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <IconCheck style={{ width: 36, height: 36 }} />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                Registration Submitted!
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto 20px auto', lineHeight: 1.5 }}>
                Your response has been recorded in the official event roster for <strong>{event.title}</strong>. Your QR code is now authorized for check-in at the venue.
              </p>
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 10,
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: 13,
                marginBottom: 24,
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Registered Student:</span>
                  <span style={{ fontWeight: 600 }}>{name} ({usn})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Branch & Year:</span>
                  <span style={{ fontWeight: 600 }}>{branch} • {semester}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Venue:</span>
                  <span style={{ fontWeight: 600 }}>{event.venue}</span>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary-post"
                onClick={onClose}
                style={{ minWidth: 140, padding: '10px 24px', fontSize: 14 }}
              >
                Done
              </button>
            </div>
          ) : isAlreadyRegistered ? (
            /* Already Registered View */
            <div style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 186, 124, 0.15)',
                color: '#00ba7c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px auto'
              }}>
                <IconCheck style={{ width: 32, height: 32 }} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                You're Already Registered
              </h3>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>
                You are officially registered for <strong>{event.title}</strong>. Your QR attendance pass is active.
              </p>

              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 10,
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: 13,
                marginBottom: 20,
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
                  <span style={{ color: '#00ba7c', fontWeight: 700 }}>Confirmed (Google Form Recorded)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>USN:</span>
                  <span style={{ fontWeight: 600 }}>{currentUser.usn}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Name:</span>
                  <span style={{ fontWeight: 600 }}>{currentUser.name}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={getSafeGoogleFormLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-event-register"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}
                >
                  <span>Open in Google Forms</span>
                  <IconExternal style={{ width: 13, height: 13 }} />
                </a>
                <button
                  type="button"
                  onClick={handleCancelRegistration}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 9999,
                    border: '1px solid #f4212e',
                    backgroundColor: 'transparent',
                    color: '#f4212e',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel Registration
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form View */
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Event Summary Card */}
              <div style={{
                padding: '14px 16px',
                borderRadius: 12,
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                  {event.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span>Date: {event.date} • {event.time}</span>
                  <span>Venue: {event.venue}</span>
                  <span style={{ color: 'var(--theme-accent)' }}>Seats: {event.registeredCount || 0} / {event.maxCapacity || 800} Filled</span>
                </div>
              </div>

              {/* Notice Banner */}
              <div style={{
                padding: '10px 14px',
                borderRadius: 8,
                backgroundColor: 'rgba(103, 58, 183, 0.08)',
                border: '1px solid rgba(103, 58, 183, 0.3)',
                fontSize: 12,
                color: 'var(--text-secondary)',
                lineHeight: 1.4
              }}>
                <strong style={{ color: '#673ab7' }}>Google Forms Notice:</strong> Please fill in your student registration details. Once submitted, your registration response will be recorded and QR attendance will be authorized.
              </div>

              {/* Field 1: Full Name */}
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                <span>Student Full Name <span style={{ color: '#f4212e' }}>*</span></span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Nishan D Shetty"
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: 14
                  }}
                />
              </label>

              {/* Field 2 & 3: USN & Department */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                  <span>University Seat Number (USN) <span style={{ color: '#f4212e' }}>*</span></span>
                  <input
                    type="text"
                    required
                    value={usn}
                    onChange={(e) => setUsn(e.target.value.toUpperCase())}
                    placeholder="e.g. 4MW24AD023"
                    style={{
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: 14,
                      textTransform: 'uppercase'
                    }}
                  />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                  <span>Branch / Department <span style={{ color: '#f4212e' }}>*</span></span>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: 14
                    }}
                  >
                    <option value="AI&DS">AI & Data Science (AI&DS)</option>
                    <option value="AI-ML">AI & Machine Learning (AI-ML)</option>
                    <option value="CS">Computer Science (CS)</option>
                    <option value="EC">Electronics & Communication (EC)</option>
                    <option value="MECH">Mechanical Engineering (MECH)</option>
                  </select>
                </label>
              </div>

              {/* Field 4 & 5: Year/Sem & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                  <span>Year / Semester <span style={{ color: '#f4212e' }}>*</span></span>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: 14
                    }}
                  >
                    <option value="1st Sem (1st Year)">1st Sem (1st Year)</option>
                    <option value="2nd Sem (1st Year)">2nd Sem (1st Year)</option>
                    <option value="3rd Sem (2nd Year)">3rd Sem (2nd Year)</option>
                    <option value="4th Sem (2nd Year)">4th Sem (2nd Year)</option>
                    <option value="5th Sem (3rd Year)">5th Sem (3rd Year)</option>
                    <option value="6th Sem (3rd Year)">6th Sem (3rd Year)</option>
                    <option value="7th Sem (4th Year)">7th Sem (4th Year)</option>
                    <option value="8th Sem (4th Year)">8th Sem (4th Year)</option>
                  </select>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                  <span>College Email <span style={{ color: '#f4212e' }}>*</span></span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@sode-edu.in"
                    style={{
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      fontSize: 14
                    }}
                  />
                </label>
              </div>

              {/* Field 6: Contact Phone */}
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                <span>WhatsApp / Contact Number <span style={{ color: '#f4212e' }}>*</span></span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: 14
                  }}
                />
              </label>

              {/* Field 7: Optional notes */}
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
                <span>Team Members / Specific Inquiries (Optional)</span>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Team Solo / Team Alpha"
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: 14
                  }}
                />
              </label>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
                <a
                  href={getSafeGoogleFormLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: '#673ab7',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontWeight: 600
                  }}
                  title="Open official Google Form link in a new tab"
                >
                  <span>Open in Google Forms</span>
                  <IconExternal style={{ width: 13, height: 13 }} />
                </a>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    type="button"
                    onClick={onClose}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 9999,
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'transparent',
                      color: 'var(--text-primary)',
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-post"
                    style={{
                      padding: '8px 20px',
                      fontSize: 13,
                      backgroundColor: '#673ab7',
                      borderColor: '#673ab7'
                    }}
                  >
                    {isSubmitting ? 'Recording...' : 'Submit Form'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
