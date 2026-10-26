import React, { useState } from 'react';
import {
  IconSidebarToggle,
  IconAnnouncements,
  IconEvents,
  IconCheck,
  IconBookmarks,
  IconSettings,
  CommunityAvatar,
  VerifiedBadge
} from './Icons';
import { BRANCHES } from '../data/initialData';

export default function ProfileView({
  currentUser,
  users,
  onSwitchUser,
  notifications,
  onMarkAllRead,
  isSidebarHidden,
  onToggleSidebar,
  onSelectNav,
  onOpenDisplay,
  onOpenCommunity,
  onLogout
}) {
  const [activeTab, setActiveTab] = useState('account'); // 'account' | 'notifications'
  const unreadCount = notifications.filter((n) => n.unread).length;

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
    <div className="profile-view-container">
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
            <div className="header-title-block">
              <h1 className="header-main-title">Account Info</h1>
              <span className="header-sub-title">Profile, role portal & notification hub</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {unreadCount > 0 && activeTab === 'notifications' && (
              <button
                type="button"
                onClick={onMarkAllRead}
                style={{ fontSize: 13, color: 'var(--accent-color)', fontWeight: 600, cursor: 'pointer' }}
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>

        {/* Tab switcher: Account vs Notifications */}
        <div className="profile-nav-tabs">
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Profile & Roles
          </button>
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <span>Notifications</span>
            {unreadCount > 0 && (
              <span className="profile-tab-badge">{unreadCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* TAB 1: Account & Roles */}
      {activeTab === 'account' && (
        <div className="profile-content">
          {/* User Profile Card */}
          <div className="profile-user-card">
            <div className="avatar avatar-lg profile-card-avatar" style={{ background: currentUser.avatarBg }}>
              <span>{currentUser.avatarChar}</span>
            </div>
            <div className="profile-user-details">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <strong className="profile-name">{currentUser.name}</strong>
                <VerifiedBadge type={currentUser.verifiedType} />
              </div>
              <span className="profile-handle">{currentUser.handle}</span>
              <span className="profile-role-chip">
                {currentUser.role} · {currentUser.department}
              </span>
            </div>
          </div>

          <div className="profile-divider" />

          {/* Switch Account / Role Grid */}
          <div className="profile-section">
            <span className="profile-section-title">Switch Account / Role</span>
            <div className="profile-role-grid">
              {Object.keys(users).map((key) => {
                const u = users[key];
                const isCurrent = currentUser.roleKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`profile-role-chip-btn ${isCurrent ? 'active' : ''}`}
                    onClick={() => onSwitchUser(key)}
                  >
                    <span
                      className="avatar avatar-xs"
                      style={{ background: u.avatarBg, width: 22, height: 22, fontSize: 11 }}
                    >
                      <span>{u.avatarChar}</span>
                    </span>
                    <span>{u.role}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="profile-divider" />

          {/* Recent Notifications Summary Box */}
          <div className="profile-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <span className="profile-section-title" style={{ margin: 0 }}>
                Recent Notifications ({unreadCount} new)
              </span>
              <button
                type="button"
                className="profile-link-btn"
                onClick={() => setActiveTab('notifications')}
              >
                View all
              </button>
            </div>

            <div className="profile-recent-notifs">
              {notifications.slice(0, 3).map((n) => (
                <div key={n.id} className={`profile-notif-row ${n.unread ? 'unread' : ''}`}>
                  <div className="profile-notif-icon">
                    {getNotifIcon(n.type)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
                      <span className="profile-notif-title">{n.title}</span>
                      <span className="profile-notif-time">{n.time}</span>
                    </div>
                    <p className="profile-notif-body">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-divider" />

          {/* Branch Communities */}
          <div className="profile-section">
            <span className="profile-section-title">Branch Communities</span>
            <div className="profile-community-grid">
              <button
                type="button"
                className="profile-community-chip"
                onClick={() => {
                  onOpenCommunity('ALL');
                  onSelectNav('announcements');
                }}
              >
                <CommunityAvatar id="ALL" size={24} />
                <div className="profile-comm-meta">
                  <span className="profile-comm-slug">s/all</span>
                  <span className="profile-comm-sub">Campus Broadcasts</span>
                </div>
              </button>
              {BRANCHES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className="profile-community-chip"
                  onClick={() => {
                    onOpenCommunity(b.id);
                    onSelectNav('announcements');
                  }}
                >
                  <CommunityAvatar id={b.id} size={24} />
                  <div className="profile-comm-meta">
                    <span className="profile-comm-slug">{b.slug}</span>
                    <span className="profile-comm-sub">{b.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="profile-divider" />

          {/* Preferences & Shortcuts */}
          <div className="profile-section">
            <span className="profile-section-title">Shortcuts & Preferences</span>
            <div className="profile-shortcuts-list">
              <button
                type="button"
                className="profile-shortcut-item"
                onClick={() => onSelectNav('bookmarks')}
              >
                <IconBookmarks className="profile-shortcut-icon" />
                <span>Saved Bookmarks</span>
              </button>

              <button
                type="button"
                className="profile-shortcut-item"
                onClick={onOpenDisplay}
              >
                <IconSettings className="profile-shortcut-icon" />
                <span>Display & Appearance</span>
              </button>
            </div>
          </div>

          <div className="profile-divider" />

          {/* Logout Section */}
          <div style={{ padding: '16px 20px 48px' }}>
            <button
              type="button"
              className="profile-logout-btn"
              onClick={onLogout}
            >
              Log out @{currentUser.handle?.replace('@', '')}
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: Notifications Full List */}
      {activeTab === 'notifications' && (
        <section className="notifications-stream" aria-label="Notifications List">
          {unreadCount > 0 && (
            <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'flex-end', borderBottom: '1px solid var(--border-color)' }}>
              <button
                type="button"
                onClick={onMarkAllRead}
                style={{ fontSize: 13, color: 'var(--accent-color)', fontWeight: 600, cursor: 'pointer' }}
              >
                Mark all as read
              </button>
            </div>
          )}

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
                className={`profile-notif-full-item ${n.unread ? 'unread' : ''}`}
              >
                <div className="profile-notif-icon-lg">
                  {getNotifIcon(n.type)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
                      {n.title}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{n.time}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4, lineHeight: '19px' }}>
                    {n.body}
                  </p>
                </div>
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
}
