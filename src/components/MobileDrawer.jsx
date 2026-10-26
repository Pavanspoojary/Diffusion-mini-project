import React from 'react';
import {
  IconClose,
  IconSettings,
  IconBookmarks,
  CommunityAvatar,
  VerifiedBadge
} from './Icons';
import { BRANCHES } from '../data/initialData';

export default function MobileDrawer({
  isOpen,
  onClose,
  currentUser,
  users,
  onSwitchUser,
  onOpenDisplay,
  onSelectNav,
  activeBranch,
  onOpenCommunity,
  onLogout
}) {
  if (!isOpen) return null;

  return (
    <div className="mobile-drawer-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div
        className="mobile-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Account Info</span>
          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        {/* User Profile Card */}
        <div className="mobile-drawer-profile">
          <div className="avatar avatar-lg" style={{ background: currentUser.avatarBg }}>
            <span>{currentUser.avatarChar}</span>
          </div>
          <div className="mobile-drawer-user-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <strong className="mobile-drawer-name">{currentUser.name}</strong>
              <VerifiedBadge type={currentUser.verifiedType} />
            </div>
            <span className="mobile-drawer-handle">{currentUser.handle}</span>
            <span className="mobile-drawer-role-badge">
              {currentUser.role} · {currentUser.department}
            </span>
          </div>
        </div>

        <div className="mobile-drawer-divider" />

        {/* Switch Account */}
        <div className="mobile-drawer-section">
          <span className="mobile-drawer-section-label">Switch Account / Role</span>
          <div className="mobile-drawer-role-grid">
            {Object.keys(users).map((key) => {
              const u = users[key];
              const isCurrent = currentUser.roleKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`mobile-drawer-role-btn ${isCurrent ? 'active' : ''}`}
                  onClick={() => {
                    onSwitchUser(key);
                    onClose();
                  }}
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

        <div className="mobile-drawer-divider" />

        {/* Communities List */}
        <div className="mobile-drawer-section">
          <span className="mobile-drawer-section-label">Branch Communities</span>
          <div className="mobile-drawer-community-list">
            <button
              type="button"
              className={`mobile-drawer-community-item ${activeBranch === 'ALL' ? 'active' : ''}`}
              onClick={() => {
                onOpenCommunity('ALL');
                onClose();
              }}
            >
              <CommunityAvatar id="ALL" size={24} />
              <div className="mobile-drawer-comm-text">
                <span className="mobile-drawer-comm-slug">s/all</span>
                <span className="mobile-drawer-comm-sub">General Feed</span>
              </div>
            </button>
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`mobile-drawer-community-item ${activeBranch === b.id ? 'active' : ''}`}
                onClick={() => {
                  onOpenCommunity(b.id);
                  onClose();
                }}
              >
                <CommunityAvatar id={b.id} size={24} />
                <div className="mobile-drawer-comm-text">
                  <span className="mobile-drawer-comm-slug">{b.slug}</span>
                  <span className="mobile-drawer-comm-sub">{b.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mobile-drawer-divider" />

        {/* Quick Actions */}
        <div className="mobile-drawer-section">
          <button
            type="button"
            className="mobile-drawer-action-btn"
            onClick={() => {
              onSelectNav('bookmarks');
              onClose();
            }}
          >
            <IconBookmarks className="mobile-drawer-action-icon" />
            <span>Bookmarks</span>
          </button>

          <button
            type="button"
            className="mobile-drawer-action-btn"
            onClick={() => {
              onOpenDisplay();
              onClose();
            }}
          >
            <IconSettings className="mobile-drawer-action-icon" />
            <span>Display & Appearance</span>
          </button>
        </div>

        <div className="mobile-drawer-divider" />

        {/* Logout */}
        <div style={{ padding: '8px 16px 24px' }}>
          <button
            type="button"
            className="mobile-drawer-logout-btn"
            onClick={() => {
              onClose();
              onLogout();
            }}
          >
            Log out @{currentUser.handle?.replace('@', '')}
          </button>
        </div>
      </div>
    </div>
  );
}
