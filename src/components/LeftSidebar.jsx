import React, { useState } from 'react';
import { Show, UserButton } from '@clerk/react';
import {
  XLogo,
  IconAnnouncements,
  IconEvents,
  IconWebsites,
  IconNotifications,
  IconBookmarks,
  IconProfile,
  IconSettings,
  IconMore,
  IconSidebarToggle,
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
  const [showMoreMenu, setShowMoreMenu] = useState(false);

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

            {/* More Menu Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                className="nav-item"
                onClick={() => setShowMoreMenu(!showMoreMenu)}
              >
                <div className="nav-icon-wrap">
                  <IconMore className="nav-icon" />
                </div>
                <span className="nav-label">More</span>
              </button>

              {showMoreMenu && (
                <div className="dropdown-popover" style={{ bottom: 'calc(100% + 4px)', left: 0 }}>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      setShowMoreMenu(false);
                      onOpenDisplay();
                    }}
                  >
                    <IconSettings style={{ width: 18, height: 18 }} />
                    <span>Display Settings</span>
                  </button>
                </div>
              )}
            </div>
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
        <div className="sidebar-user-container">
          <button
            type="button"
            className="sidebar-user-card"
            onClick={() => setShowUserDropdown(!showUserDropdown)}
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
            <div className="dropdown-popover" style={{ bottom: 'calc(100% + 10px)', width: 240, left: 0 }}>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setShowUserDropdown(false);
                  onLogout();
                }}
                style={{ color: '#f4212e' }}
              >
                <span>Log out {currentUser.handle}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
