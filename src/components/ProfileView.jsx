import React from 'react';
import {
  IconSidebarToggle,
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
  isSidebarHidden,
  onToggleSidebar,
  onSelectNav,
  onOpenDisplay,
  onOpenCommunity,
  onLogout
}) {
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
              <span className="header-sub-title">Profile credentials & portal preferences</span>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
