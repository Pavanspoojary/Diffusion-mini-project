import React, { useState, useEffect, useRef } from 'react';
import { Show, UserButton } from '@clerk/react';
import {
  XLogo,
  IconAnnouncements,
  IconEvents,
  IconWebsites,
  IconNotifications,
  IconBookmarks,
  IconProfile,
  IconDisplay,
  IconLogout,
  IconMore,
  VerifiedBadge,
  UserAvatar
} from './Icons';

export default function LeftSidebar({
  activeNav,
  setActiveNav,
  currentUser,
  onSwitchUser,
  users,
  onOpenCompose,
  onOpenDisplay,
  unreadCount,
  isSidebarHidden,
  onToggleSidebar,
  onLogout
}) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userMenuRef = useRef(null);

  const formattedHandle = currentUser.handle
    ? (currentUser.handle.startsWith('@') ? currentUser.handle : `@${currentUser.handle}`)
    : '';

  useEffect(() => {
    if (!showUserDropdown) return;

    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showUserDropdown]);

  const canPublish = currentUser.roleKey !== 'student';

  return (
    <header className={`sidebar-left ${isSidebarHidden ? 'hidden' : ''}`} role="banner">
      <div className="sidebar-inner">
        <div>
          {/* Brand Logo & Collapse Header */}
          <div className="sidebar-header-row">
            <button
              type="button"
              className="logo-wrap"
              onClick={() => setActiveNav('announcements')}
              style={{ cursor: 'pointer', border: 'none', background: 'transparent', padding: 0 }}
              title="SMVITM Campus Hub"
              aria-label="Home announcements"
            >
              <XLogo className="x-logo" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Show when="signed-in">
                <UserButton />
              </Show>
              <button
                type="button"
                className="sidebar-hide-btn"
                onClick={onToggleSidebar}
                title="Hide side navigation (Press [)"
                aria-label="Hide side navigation"
              >
                <IconSidebarToggle style={{ width: 18, height: 18 }} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="nav-menu" aria-label="Primary navigation">
            <button
              type="button"
              className={`nav-item ${activeNav === 'announcements' ? 'active' : ''}`}
              onClick={() => setActiveNav('announcements')}
            >
              <div className="nav-icon-wrap">
                <IconAnnouncements className="nav-icon" />
              </div>
              <span className="nav-label">Notices</span>
            </button>

            <button
              type="button"
              className={`nav-item ${activeNav === 'events' ? 'active' : ''}`}
              onClick={() => setActiveNav('events')}
            >
              <div className="nav-icon-wrap">
                <IconEvents className="nav-icon" />
              </div>
              <span className="nav-label">Events</span>
            </button>

            <button
              type="button"
              className={`nav-item ${activeNav === 'websites' ? 'active' : ''}`}
              onClick={() => setActiveNav('websites')}
            >
              <div className="nav-icon-wrap">
                <IconWebsites className="nav-icon" />
              </div>
              <span className="nav-label">Websites</span>
            </button>

            <button
              type="button"
              className={`nav-item ${activeNav === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveNav('profile')}
            >
              <div className="nav-icon-wrap">
                <IconProfile className="nav-icon" />
                {unreadCount > 0 && <span className="badge-dot" aria-hidden="true" />}
              </div>
              <span className="nav-label">Profile</span>
            </button>

            <button
              type="button"
              className={`nav-item ${activeNav === 'bookmarks' ? 'active' : ''}`}
              onClick={() => setActiveNav('bookmarks')}
            >
              <div className="nav-icon-wrap">
                <IconBookmarks className="nav-icon" />
              </div>
              <span className="nav-label">Bookmarks</span>
            </button>

          </nav>

          {/* Post / Publish CTA Button (Faculty, Coordinator, Admin only) */}
          {canPublish && (
            <button
              type="button"
              className="post-cta-btn"
              onClick={onOpenCompose}
              title="Publish notice"
            >
              <span className="post-cta-text">
                {currentUser.roleKey === 'coordinator' ? 'Create Event' : 'Publish Notice'}
              </span>
              <span className="post-cta-icon">+</span>
            </button>
          )}
        </div>

        {/* User Card with Role Switcher Popover */}
        <div ref={userMenuRef} className="sidebar-user-container">
          <button
            type="button"
            className="sidebar-user-card"
            onClick={() => setShowUserDropdown((prev) => !prev)}
            aria-expanded={showUserDropdown}
            aria-haspopup="true"
            title="Click to switch role or view account"
          >
            <UserAvatar user={currentUser} sizeClass="avatar-md" />
            <div className="user-meta">
              <div className="user-name-line">
                <span className="user-display-name">{currentUser.name}</span>
                <VerifiedBadge type={currentUser.verifiedType} />
              </div>
              <span className="user-handle">{currentUser.role} · {currentUser.branch}</span>
            </div>
            <div className="user-more-dots">
              <IconMore />
            </div>
          </button>

          {showUserDropdown && (
            <div className="dropdown-popover user-menu-popover" style={{ bottom: 'calc(100% + 10px)', width: 260, left: 0 }}>
              <div className="user-dropdown-header" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}>
                <UserAvatar user={currentUser} sizeClass="avatar-sm" />
                <div className="user-meta" style={{ minWidth: 0, flex: 1 }}>
                  <div className="user-name-line" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="user-display-name" style={{ fontSize: 14, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentUser.name}</span>
                    <VerifiedBadge type={currentUser.verifiedType} />
                  </div>
                  <span className="user-handle" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{formattedHandle}</span>
                </div>
              </div>

              <div className="dropdown-divider" />

              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setShowUserDropdown(false);
                  setActiveNav('profile');
                }}
              >
                <div className="dropdown-item-left">
                  <IconProfile style={{ width: 18, height: 18 }} />
                  <span className="dropdown-item-label">View profile</span>
                </div>
              </button>

              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setShowUserDropdown(false);
                  onOpenDisplay();
                }}
              >
                <div className="dropdown-item-left">
                  <IconDisplay style={{ width: 18, height: 18 }} />
                  <span className="dropdown-item-label">Display & Appearance</span>
                </div>
              </button>

              <div className="dropdown-divider" />

              {onLogout && (
                <button
                  type="button"
                  className="dropdown-item dropdown-item-danger"
                  onClick={() => {
                    setShowUserDropdown(false);
                    onLogout();
                  }}
                >
                  <div className="dropdown-item-left">
                    <IconLogout style={{ width: 18, height: 18 }} />
                    <span className="dropdown-item-label">Log out {formattedHandle}</span>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
