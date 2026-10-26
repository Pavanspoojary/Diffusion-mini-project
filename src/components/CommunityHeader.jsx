import React from 'react';
import { CommunityAvatar, IconMore, VerifiedBadge } from './Icons';
import { USERS } from '../data/initialData';

export default function CommunityHeader({
  branch,
  postCount,
  isJoined,
  onToggleJoin,
  onCreatePost,
  onBack,
  sort,
  setSort
}) {
  const moderators = Object.values(USERS).filter((u) => u.roleKey !== 'student');

  return (
    <section className="community-hero" aria-label={`${branch.slug} community`}>
      {/* Banner with gradient mesh, tech grid texture, and campus tag */}
      <div
        className="community-hero-banner"
        style={{ background: branch.avatarBg }}
        aria-hidden="true"
      >
        <div className="community-hero-banner-overlay" />
        <div className="community-hero-banner-grid" />
        <div className="community-hero-banner-tag">
          <span className="community-hero-banner-dot" />
          <span>{branch.code || branch.id} · Campus Hub</span>
        </div>
      </div>

      {/* Avatar + title + actions */}
      <div className="community-hero-top">
        <div className="community-hero-avatar">
          <CommunityAvatar id={branch.id} size={76} />
        </div>

        <div className="community-hero-info">
          <div className="community-hero-name-row">
            <h1 className="community-hero-name">{branch.slug}</h1>
            <span className="community-badge-pill">Community</span>
          </div>
          <div className="community-hero-desc">{branch.description}</div>
          <div className="community-hero-meta">
            <span>{branch.members}</span>
            <span className="post-dot">·</span>
            <span>{postCount} notices</span>
            <span className="post-dot">·</span>
            <div className="community-online-pill" title={`${moderators.length} campus coordinators and faculty active now`}>
              <span className="community-online-pulse">
                <span className="community-online-dot" />
                <span className="community-online-ping" />
              </span>
              <span className="community-online-text">
                <strong>{moderators.length}</strong> online
              </span>
              <div className="community-online-avatars" aria-label="Online staff members">
                {moderators.map((m) => (
                  <span
                    key={m.id}
                    className="community-online-avatar-chip"
                    style={{ background: m.avatarBg }}
                    title={`${m.name} (${m.role}) is online`}
                  >
                    {m.avatarChar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="community-hero-actions">
          {onCreatePost && (
            <button
              type="button"
              className="community-create-btn"
              onClick={onCreatePost}
              title="Create a post in this community"
            >
              <span className="community-create-plus">+</span>
              Create Post
            </button>
          )}
          <button
            type="button"
            className={`community-join-btn ${isJoined ? 'joined' : ''}`}
            onClick={onToggleJoin}
          >
            {isJoined ? 'Joined' : 'Join'}
          </button>
          <button type="button" className="community-more-btn" aria-label="More community options">
            <IconMore />
          </button>
        </div>
      </div>

      {/* About + staff grid */}
      <div className="community-about-grid">
        <div className="community-about-card">
          <h3 className="community-about-title">About community</h3>
          <p className="community-about-text">{branch.description}</p>
          <div className="community-stats">
            <div className="community-stat">
              <strong>{postCount}</strong>
              <span>Notices</span>
            </div>
            <div className="community-stat">
              <strong>{branch.members.replace(' members', '')}</strong>
              <span>Members</span>
            </div>
            <div className="community-stat">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <span className="community-online-dot" style={{ width: 6, height: 6 }} />
                <strong>{moderators.length}</strong>
              </div>
              <span>Online Now</span>
            </div>
          </div>
          <button type="button" className="community-back-btn" onClick={onBack}>
            Back to all notices
          </button>
        </div>

        <div className="community-about-card">
          <div className="community-online-section-header">
            <h3 className="community-about-title" style={{ margin: 0 }}>Active Online & Staff</h3>
            <span className="community-live-pill">
              <span className="community-online-pulse">
                <span className="community-online-dot" />
                <span className="community-online-ping" />
              </span>
              <span>{moderators.length} Live</span>
            </span>
          </div>
          <div className="community-mod-list">
            {moderators.map((m) => (
              <div key={m.id} className="community-mod-card">
                <div className="community-mod-avatar-wrap">
                  <span className="avatar avatar-sm" style={{ background: m.avatarBg }}>
                    <span>{m.avatarChar}</span>
                  </span>
                  <span className="community-mod-online-dot" title="Active now" />
                </div>
                <div className="community-mod-info">
                  <div className="community-mod-name-row">
                    <span className="community-mod-name">{m.name}</span>
                    <VerifiedBadge type={m.verifiedType} />
                  </div>
                  <span className="community-mod-role">{m.role} · {m.handle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
