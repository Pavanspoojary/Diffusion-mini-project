import React from 'react';
import {
  IconClose,
  IconDisplay,
  IconBookmarks,
  CommunityAvatar,
  VerifiedBadge,
  UserAvatar
} from './Icons';
import { COMMUNITIES } from '../data/initialData';
import { canAccessCommunity } from '../utils/collegeAuth';

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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleOverlayKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter') onClose();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="mobile-drawer-overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      aria-label="Close navigation drawer"
    >
      <div
        className="mobile-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Account navigation drawer"
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
          <UserAvatar user={currentUser} sizeClass="avatar-lg" />
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
            {COMMUNITIES.map((b) => {
              const hasAccess = canAccessCommunity(currentUser, b.id);
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`mobile-drawer-community-item ${activeBranch === b.id ? 'active' : ''}`}
                  style={!hasAccess ? { opacity: 0.5 } : undefined}
                  onClick={() => {
                    onOpenCommunity(b.id);
                    if (hasAccess) onClose();
                  }}
                >
                  <CommunityAvatar id={b.id} size={24} />
                  <div className="mobile-drawer-comm-text">
                    <span className="mobile-drawer-comm-slug">{b.slug}</span>
                    <span className="mobile-drawer-comm-sub">{hasAccess ? b.label : `${b.label} (Locked)`}</span>
                  </div>
                </button>
              );
            })}
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
            <IconDisplay className="mobile-drawer-action-icon" />
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
