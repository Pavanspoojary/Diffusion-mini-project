import React, { useState } from 'react';
import {
  IconSidebarToggle,
  IconBookmarks,
  IconSettings,
  IconGraduationCap,
  CommunityAvatar,
  VerifiedBadge,
  UserAvatar
} from './Icons';
import { BRANCHES } from '../data/initialData';
import LecturerProfileDetail from './LecturerProfileDetail';

export default function ProfileView({
  currentUser,
  users,
  lecturers = [],
  announcements = [],
  onSwitchUser,
  onSwitchLecturer,
  onSavePhoto,
  onSaveProfile,
  isSidebarHidden,
  onToggleSidebar,
  onSelectNav,
  onOpenDisplay,
  onOpenCommunity,
  onOpenFacultyDirectory,
  onLogout,
  isHeaderHidden = false
}) {
  const [showLecturerSwitcher, setShowLecturerSwitcher] = useState(false);

  const activeLecturer =
    currentUser?.roleKey === 'faculty'
      ? lecturers.find(
          (l) =>
            l.id === currentUser.lecturerId ||
            l.userId === currentUser.id ||
            (l.handle && currentUser.handle && l.handle.toLowerCase() === currentUser.handle.toLowerCase())
        ) || lecturers[0] || null
      : null;

  return (
    <div className="profile-view-container">
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
            <div className="header-title-block">
              <h1 className="header-main-title">
                {activeLecturer ? 'Lecturer Profile' : 'Account Info'}
              </h1>
              <span className="header-sub-title">
                {activeLecturer
                  ? `${activeLecturer.designation} · ${activeLecturer.department}`
                  : 'Profile credentials & portal preferences'}
              </span>
            </div>
          </div>

          {onOpenFacultyDirectory && (
            <button
              type="button"
              className="li-btn-outline"
              style={{ padding: '6px 12px', fontSize: 12.5 }}
              onClick={onOpenFacultyDirectory}
            >
              <IconGraduationCap style={{ width: 15, height: 15 }} />
              <span>All Lecturers</span>
            </button>
          )}
        </div>
      </div>

      <div className="profile-content">
        {/* If logged in as a Lecturer/Faculty, show full LinkedIn-style Lecturer Profile */}
        {activeLecturer ? (
          <>
            <LecturerProfileDetail
              lecturer={activeLecturer}
              announcements={announcements}
              canEdit={true}
              onSavePhoto={onSavePhoto}
              onSaveProfile={onSaveProfile}
              onOpenCommunity={onOpenCommunity}
              onSelectNoticeBranch={onOpenCommunity}
            />

            {/* Switch Specific Lecturer Account */}
            {lecturers.length > 1 && onSwitchLecturer && (
              <div className="profile-section" style={{ paddingTop: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span className="profile-section-title" style={{ marginBottom: 0 }}>
                    Switch Lecturer Profile ({lecturers.length})
                  </span>
                  <button
                    type="button"
                    className="profile-link-btn"
                    onClick={() => setShowLecturerSwitcher((v) => !v)}
                  >
                    {showLecturerSwitcher ? 'Hide list' : 'Choose lecturer'}
                  </button>
                </div>

                {showLecturerSwitcher && (
                  <div className="profile-lecturer-switch-grid">
                    {lecturers.map((lec) => {
                      const isSelected = lec.id === activeLecturer.id;
                      return (
                        <button
                          key={lec.id}
                          type="button"
                          className={`profile-role-chip-btn ${isSelected ? 'active' : ''}`}
                          onClick={() => onSwitchLecturer(lec)}
                        >
                          <UserAvatar
                            user={lec}
                            sizeClass="avatar-xs"
                            style={{ width: 26, height: 26, fontSize: 11 }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <span style={{ fontSize: 12.5, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {lec.name}
                            </span>
                            <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                              {lec.branch} · {lec.designation}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          /* Standard Non-Lecturer User Profile Card */
          <div className="profile-user-card">
            <UserAvatar user={currentUser} sizeClass="avatar-lg profile-card-avatar" />
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
        )}

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
            {onOpenFacultyDirectory && (
              <button
                type="button"
                className="profile-shortcut-item"
                onClick={onOpenFacultyDirectory}
              >
                <IconGraduationCap className="profile-shortcut-icon" />
                <span>Faculty & Lecturer Profiles</span>
              </button>
            )}

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
