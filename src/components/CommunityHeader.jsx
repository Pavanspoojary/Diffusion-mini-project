import React from 'react';
import { CommunityAvatar, IconMore } from './Icons';
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
      {/* Banner */}
      <div
        className="community-hero-banner"
        style={{ background: branch.avatarBg }}
        aria-hidden="true"
      />

      {/* Avatar + title + actions */}
      <div className="community-hero-top">
        <div className="community-hero-avatar">
          <CommunityAvatar id={branch.id} size={72} className="community-hero-avatar-circle" />
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
            <span className="community-online-dot" aria-hidden="true" />
            <span>{moderators.length} online</span>
          </div>
        </div>

        <div className="community-hero-actions">
          <button
            type="button"
            className="community-create-btn"
            onClick={onCreatePost}
            title="Create a post in this community"
          >
            <span className="community-create-plus">+</span>
            Create Post
          </button>
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

      {/* About + rules */}
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
              <strong>{moderators.length}</strong>
              <span>Online</span>
            </div>
          </div>
          <button type="button" className="community-back-btn" onClick={onBack}>
            Back to all notices
          </button>
        </div>

        <div className="community-about-card">
          <h3 className="community-about-title">Moderators</h3>
          <div className="community-mod-list">
            {moderators.map((m) => (
              <div key={m.id} className="community-mod">
                <span className="avatar avatar-sm" style={{ background: m.avatarBg }}>
                  <span>{m.avatarChar}</span>
                </span>
                <span className="community-mod-name">{m.handle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
