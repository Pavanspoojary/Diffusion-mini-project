import React, { useState } from 'react';
import {
  IconAnnouncements,
  IconEvents,
  IconCheck,
  IconSidebarToggle,
  IconArrowLeft
} from './Icons';

export default function NotificationsView({
  notifications = [],
  onMarkAllRead,
  isSidebarHidden,
  onToggleSidebar,
  currentUser,
  onBack,
  isHeaderHidden = false,
  onSelectNotification,
  onSendTestNotification
}) {
  const [permission, setPermission] = useState(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'unsupported';
  });

  const handleRequestPermission = async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    try {
      const res = await Notification.requestPermission();
      setPermission(res);
      if (res === 'granted' && onSendTestNotification) {
        onSendTestNotification();
      }
    } catch (e) {
      console.warn('Notification permission error', e);
    }
  };

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

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div>
      {/* Sticky Header */}
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

            {onBack && (
              <button
                type="button"
                className="community-back-pill"
                onClick={onBack}
                title="Back to Notices"
              >
                <IconArrowLeft />
                <span>Back</span>
              </button>
            )}

            <div className="header-title-block">
              <h1 className="header-main-title">Notifications &amp; Reminders</h1>
              <span className="header-sub-title">Important academic circulars and event deadlines</span>
            </div>
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={onMarkAllRead}
              style={{
                fontSize: 13,
                color: 'var(--accent-color)',
                fontWeight: 600,
                cursor: 'pointer',
                background: 'transparent',
                border: 'none'
              }}
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      {/* PWA / Device Notification Control Card */}
      <div style={{ padding: '16px 20px 0' }}>
        <div
          style={{
            padding: '14px 16px',
            borderRadius: 14,
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>
                  Device &amp; PWA Notifications
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 10,
                    background: permission === 'granted' ? 'rgba(0, 186, 124, 0.12)' : (permission === 'denied' ? 'rgba(244, 33, 46, 0.12)' : 'rgba(234, 179, 8, 0.12)'),
                    color: permission === 'granted' ? '#00ba7c' : (permission === 'denied' ? '#f4212e' : '#eab308'),
                    border: `1px solid ${permission === 'granted' ? 'rgba(0, 186, 124, 0.25)' : (permission === 'denied' ? 'rgba(244, 33, 46, 0.25)' : 'rgba(234, 179, 8, 0.25)')}`
                  }}
                >
                  {permission === 'granted' ? 'Active' : (permission === 'denied' ? 'Blocked' : 'Off')}
                </span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {permission === 'granted'
                  ? 'Alerts will be delivered directly to your device and home screen PWA.'
                  : (permission === 'denied'
                      ? 'Notifications blocked by browser. Please enable notifications in your browser or device settings.'
                      : 'Enable device alerts to receive instant campus notices and deadline updates.')}
              </p>
            </div>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {permission !== 'granted' && permission !== 'unsupported' && (
                <button
                  type="button"
                  className="btn-auth-create"
                  onClick={handleRequestPermission}
                  style={{ padding: '6px 14px', fontSize: 13, height: 'auto', borderRadius: 20 }}
                >
                  Enable alerts
                </button>
              )}
              {permission === 'granted' && onSendTestNotification && (
                <button
                  type="button"
                  onClick={onSendTestNotification}
                  style={{
                    padding: '6px 14px',
                    fontSize: 13,
                    borderRadius: 20,
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Test alert
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="notifications-stream" aria-label="Notifications List" style={{ marginTop: 12 }}>
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
              role="button"
              tabIndex={0}
              onClick={() => onSelectNotification?.(n)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectNotification?.(n);
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                padding: '14px 20px',
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: n.unread ? 'var(--bg-hover-subtle)' : 'transparent',
                cursor: 'pointer',
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
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
                      {n.title}
                    </span>
                    {n.unread && (
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-color)'
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', flexShrink: 0 }}>{n.time}</span>
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
