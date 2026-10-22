import React from 'react';
import { IconAnnouncements, IconEvents, IconCheck, IconSidebarToggle } from './Icons';

export default function NotificationsView({
  notifications,
  onMarkAllRead,
  isSidebarHidden,
  onToggleSidebar,
  currentUser
}) {
  const getNotifIcon = (type) => {
    switch (type) {
      case 'notice':
        return <IconAnnouncements style={{ width: 18, height: 18, color: 'var(--accent-color)' }} />;
      case 'event':
        return <IconEvents style={{ width: 18, height: 18, color: '#f91880' }} />;
      default:
        return <IconCheck style={{ width: 18, height: 18, color: '#00ba7c' }} />;
    }
  };

  return (
    <div>
      {/* Sticky Header */}
      <div className="sticky-header">
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
            <button
              type="button"
              className="mobile-header-avatar-btn mobile-only"
              onClick={() => onToggleSidebar && onToggleSidebar(true)}
              title="Open profile & menu"
              aria-label="Open profile & menu"
            >
              <span className="avatar avatar-sm" style={{ background: currentUser?.avatarBg || 'var(--card-bg)' }}>
                <span>{currentUser?.avatarChar || 'U'}</span>
              </span>
            </button>
            <div className="header-title-block">
              <h1 className="header-main-title">Notifications & Reminders</h1>
              <span className="header-sub-title">Important academic circulars and event deadlines</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onMarkAllRead}
            style={{ fontSize: 13, color: 'var(--accent-color)', fontWeight: 600 }}
          >
            Mark all as read
          </button>
        </div>
      </div>

      <section className="notifications-stream" aria-label="Notifications List">
        {notifications.length === 0 ? (
          <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
              No notifications yet
            </h3>
            <p style={{ fontSize: 14 }}>You are up to date on all notices and event alerts.</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                padding: '14px 16px',
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: n.unread ? 'var(--bg-hover-subtle)' : 'transparent',
                transition: 'background-color 0.15s ease'
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  backgroundColor: 'var(--card-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getNotifIcon(n.type)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
                    {n.title}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{n.time}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4, lineHeight: '18px' }}>
                  {n.body}
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
