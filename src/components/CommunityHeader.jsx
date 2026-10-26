import React from 'react';
import { CommunityAvatar, IconMore, IconArrowLeft } from './Icons';

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

        <button
          type="button"
          className="community-banner-back-btn"
          onClick={onBack}
          aria-label="Back to home page"
          title="Return to Home feed"
        >
          <IconArrowLeft style={{ width: 14, height: 14 }} />
          <span>Home</span>
        </button>

        <div className="community-hero-banner-tag">
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
          </div>
        </div>

        <div className="community-hero-actions">
          <button
            type="button"
            className="community-hero-back-btn"
            onClick={onBack}
            title="Return to Home feed"
          >
            <IconArrowLeft style={{ width: 14, height: 14 }} />
            <span>Home</span>
          </button>
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

      {/* About community */}
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
          </div>
          <button type="button" className="community-back-btn" onClick={onBack}>
            <IconArrowLeft style={{ width: 14, height: 14, marginRight: 6 }} />
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
