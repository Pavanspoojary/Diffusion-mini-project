import React, { useState } from 'react';
import {
  IconQR,
  IconExternal,
  IconMedia,
  IconCheck,
  IconSidebarToggle,
  IconNotifications,
  IconTrash,
  IconCalendar,
  IconClock,
  IconLocation,
  IconHourglass,
  IconUsersGroup
} from './Icons';

const INTERNAL_GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor';

export default function EventsView({
  events,
  currentUser,
  onRegisterEvent,
  onOpenQRScanner,
  onOpenQRGenerator,
  onOpenCreateEvent,
  onOpenImage,
  searchQuery,
  isSidebarHidden,
  onToggleSidebar,
  unreadCount = 0,
  onOpenNotifications,
  isHeaderHidden = false,
  onDeleteEvent
}) {
  const [activeTab, setActiveTab] = useState('internal'); // 'internal' | 'external'
  const [confirmDeleteEvent, setConfirmDeleteEvent] = useState(null);

  const canCreateEvent = currentUser.roleKey !== 'student';

  const filteredEvents = events.filter((evt) => {
    if (activeTab === 'internal' && evt.type !== 'internal') return false;
    if (activeTab === 'external' && evt.type !== 'external') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = evt.title.toLowerCase().includes(q);
      const matchOrg = evt.organizer.toLowerCase().includes(q);
      const matchVenue = evt.venue.toLowerCase().includes(q);
      return matchTitle || matchOrg || matchVenue;
    }
    return true;
  });

  return (
    <div>
      {/* Sticky Top Header */}
      <div className={`sticky-header ${isHeaderHidden ? 'header-hidden' : ''}`}>
        <div className="header-top-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {isSidebarHidden && (
              <button
                type="button"
                className="sidebar-hide-btn desktop-only"
                onClick={onToggleSidebar}
                title="Show side navigation (Press [)"
                aria-label="Show side navigation"
              >
                <IconSidebarToggle style={{ width: 18, height: 18 }} />
              </button>
            )}
            <div className="header-title-block">
              <h1 className="header-main-title">College Events & Discovery</h1>
              <span className="header-sub-title">Internal QR Attendance & External Opportunities</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {onOpenNotifications && (
              <button
                type="button"
                className="header-notif-btn"
                onClick={onOpenNotifications}
                title="Notifications"
                aria-label="Notifications"
              >
                <IconNotifications style={{ width: 19, height: 19 }} />
                {unreadCount > 0 && <span className="badge-dot" style={{ top: 2, right: 2 }} />}
              </button>
            )}
            {canCreateEvent && (
              <button
                type="button"
                className="btn-primary-post"
                onClick={onOpenCreateEvent}
                style={{ fontSize: 13, padding: '6px 14px' }}
              >
                + Create Event
              </button>
            )}
          </div>
        </div>

        {/* Internal vs External Tabs */}
        <div className="tabs-bar" role="tablist">
          <button
            type="button"
            className={`tab-item ${activeTab === 'internal' ? 'active' : ''}`}
            onClick={() => setActiveTab('internal')}
          >
            <span className="tab-label">Internal Events (QR Attendance)</span>
            {activeTab === 'internal' && <div className="tab-active-indicator" />}
          </button>
          <button
            type="button"
            className={`tab-item ${activeTab === 'external' ? 'active' : ''}`}
            onClick={() => setActiveTab('external')}
          >
            <span className="tab-label">External Events (Competitions)</span>
            {activeTab === 'external' && <div className="tab-active-indicator" />}
          </button>
        </div>
      </div>

      {/* Events List */}
      <section className="events-stream" aria-label="Events Feed">
        {filteredEvents.length === 0 ? (
          <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
              No {activeTab} events found
            </h3>
            <p style={{ fontSize: 14 }}>Try adjusting your search criteria or switch to another tab.</p>
          </div>
        ) : (
          filteredEvents.map((evt) => {
            const hasCheckedIn = evt.attendance?.some(
              (a) => a.usn === currentUser.usn && a.status === 'Checked In'
            );
            const canDelete =
              Boolean(currentUser) &&
              (currentUser.roleKey === 'admin' ||
                evt.creatorId === currentUser.id ||
                evt.organizer === currentUser.name ||
                ((currentUser.roleKey === 'faculty' || currentUser.roleKey === 'coordinator') && evt.type === 'internal'));

            return (
              <article key={evt.id} className="event-card">
                {/* Header row: Badge + Title + Delete Button */}
                <div className="event-header-top">
                  <span className={`event-type-pill ${evt.type === 'internal' ? 'internal' : 'external'}`}>
                    {evt.type === 'internal' ? 'Campus Event • QR Attendance' : 'National Challenge • External'}
                  </span>

                  {canDelete && onDeleteEvent && (
                    <button
                      type="button"
                      className="btn-event-delete"
                      onClick={() => setConfirmDeleteEvent(evt)}
                      aria-label="Delete event"
                      title="Delete event"
                    >
                      <IconTrash style={{ width: 13, height: 13 }} />
                      <span>Delete</span>
                    </button>
                  )}
                </div>

                <h2 className="event-card-title">{evt.title}</h2>

                <div className="event-organizer-block">
                  <span className="event-org-label">Organized by</span>
                  <span className="event-org-name">{evt.organizer}</span>
                </div>

                {/* Structured Professional Key Details Grid */}
                <div className="event-key-details-grid">
                  <div className="event-detail-box">
                    <div className="event-detail-icon-wrap date-icon-wrap">
                      <IconCalendar style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="event-detail-content">
                      <span className="event-detail-label">EVENT DATE</span>
                      <span className="event-detail-val">{evt.date}</span>
                    </div>
                  </div>

                  <div className="event-detail-box">
                    <div className="event-detail-icon-wrap time-icon-wrap">
                      <IconClock style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="event-detail-content">
                      <span className="event-detail-label">TIMING</span>
                      <span className="event-detail-val">{evt.time}</span>
                    </div>
                  </div>

                  <div className="event-detail-box">
                    <div className="event-detail-icon-wrap venue-icon-wrap">
                      <IconLocation style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="event-detail-content">
                      <span className="event-detail-label">VENUE</span>
                      <span className="event-detail-val">{evt.venue}</span>
                    </div>
                  </div>

                  <div className="event-detail-box deadline-box">
                    <div className="event-detail-icon-wrap deadline-icon-wrap">
                      <IconHourglass style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="event-detail-content">
                      <span className="event-detail-label deadline-label">DEADLINE</span>
                      <span className="event-detail-val deadline-val">{evt.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Event Description */}
                <p className="event-card-desc">
                  {evt.description}
                </p>

                {/* Event Poster with Clean Preview Frame */}
                {evt.poster && (
                  <div
                    className="event-poster-wrapper"
                    onClick={() => onOpenImage(evt.poster)}
                    title="Click to view full event poster"
                  >
                    <img src={evt.poster} alt={`${evt.title} poster`} className="event-poster-image" />
                    <div className="event-poster-overlay-hint">
                      <span>Click to view full poster</span>
                    </div>
                  </div>
                )}

                {/* Event Action Suite */}
                <div className="event-card-actions">
                  <div className="event-action-buttons">
                    {evt.type === 'internal' ? (
                      <>
                        {evt.registeredCount >= evt.maxCapacity && !evt.isRegistered ? (
                          <button
                            type="button"
                            className="btn-event-register"
                            style={{ opacity: 0.6, cursor: 'not-allowed', backgroundColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                            disabled
                          >
                            Seats Filled (Housefull)
                          </button>
                        ) : (
                          <a
                            href={evt.link || INTERNAL_GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-event-register"
                            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                            title="Opens official Google Form in a new tab"
                          >
                            <span>Register via Google Form</span>
                            <IconExternal style={{ width: 13, height: 13 }} />
                          </a>
                        )}

                        {/* QR Attendance Buttons */}
                        {currentUser.roleKey === 'student' ? (
                          <button
                            type="button"
                            className="btn-qr-action"
                            onClick={() => onOpenQRScanner(evt)}
                            title="Scan QR Code at entry and exit for verified attendance"
                          >
                            <IconQR style={{ width: 16, height: 16 }} />
                            <span>{hasCheckedIn ? 'Scan QR (Check-Out)' : 'Scan QR (Check-In)'}</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn-qr-action"
                            onClick={() => onOpenQRGenerator(evt)}
                            title="Generate event QR code and manage student attendance roster"
                          >
                            <IconQR style={{ width: 16, height: 16 }} />
                            <span>Manage QR Attendance ({evt.attendance?.length || 0})</span>
                          </button>
                        )}
                      </>
                    ) : (
                      <a
                        href={evt.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-event-register"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                      >
                        <span>Official Registration</span>
                        <IconExternal style={{ width: 14, height: 14 }} />
                      </a>
                    )}
                  </div>

                  {/* Capacity or Status Pill */}
                  {evt.type === 'internal' ? (
                    <div className="event-seats-pill">
                      <IconUsersGroup style={{ width: 14, height: 14 }} />
                      <span>{evt.registeredCount} / {evt.maxCapacity} Seats Filled</span>
                    </div>
                  ) : (
                    <div className="event-status-pill open">
                      <span className="status-indicator-dot" />
                      <span>Registrations Active</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })
        )}
      </section>

      {/* Delete Event Confirmation Modal */}
      {confirmDeleteEvent && (
        <div className="confirm-modal-overlay" onClick={() => setConfirmDeleteEvent(null)}>
          <div className="confirm-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="confirm-modal-title">Delete event?</h3>
            <p className="confirm-modal-desc">
              &quot;{confirmDeleteEvent.title}&quot; will be permanently removed. This action cannot be undone.
            </p>
            <div className="confirm-modal-actions">
              <button
                type="button"
                className="btn-confirm-delete"
                onClick={() => {
                  onDeleteEvent(confirmDeleteEvent.id);
                  setConfirmDeleteEvent(null);
                }}
              >
                Delete Event
              </button>
              <button
                type="button"
                className="btn-confirm-cancel"
                onClick={() => setConfirmDeleteEvent(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
