import React, { useState, useRef, useEffect } from 'react';
import {
  IconHeart,
  IconRepost,
  IconReply,
  IconBookmarkAction,
  IconShare,
  IconSidebarToggle,
  VerifiedBadge,
  CommunityAvatar,
  IconChevronDown,
  IconTag,
  IconSort,
  IconCheck,
  IconArrowLeft,
  IconCopy,
  IconWhatsApp,
  IconArticle
} from './Icons';
import LinkedInComposer from './LinkedInComposer';
import CommunityHeader from './CommunityHeader';
import { BRANCHES, CATEGORIES } from '../data/initialData';

function formatCount(n) {
  if (!n) return '0';
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
}

function FilterDropdown({ label, value, options, onChange, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="feed-filter-dropdown" ref={ref}>
      <button
        type="button"
        className={`feed-filter-btn ${value !== 'All' && value !== 'Best' ? 'highlighted' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {Icon && <Icon className="feed-filter-icon" />}
        <span className="feed-filter-label">{label}:</span>
        <span className="feed-filter-value">{value}</span>
        <IconChevronDown className={`feed-filter-arrow ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="feed-dropdown-menu" role="listbox">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                className={`feed-dropdown-option ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                role="option"
                aria-selected={isSelected}
              >
                <span>{opt}</span>
                {isSelected && <IconCheck className="feed-dropdown-check" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PostShareMenu({ item, isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shareUrl = `${window.location.origin}/#notice-${item.id}`;
  const shareText = `[SMVITM Campus Hub] Notice from ${item.author} (${item.department}):\n${item.text}\n\n${shareUrl}`;

  const handleCopyLink = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => {
        setCopiedLink(false);
        onClose();
      }, 1200);
    }
  };

  const handleCopyText = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item.text);
      setCopiedText(true);
      setTimeout(() => {
        setCopiedText(false);
        onClose();
      }, 1200);
    }
  };

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleNativeShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `${item.author} - SMVITM Notice`,
        text: item.text,
        url: shareUrl
      }).catch(() => {});
    }
    onClose();
  };

  const supportsNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div className="post-share-popover" ref={menuRef} onClick={(e) => e.stopPropagation()}>
      <button type="button" className="share-menu-item" onClick={handleCopyLink}>
        {copiedLink ? (
          <IconCheck style={{ color: '#00ba7c', width: 16, height: 16 }} />
        ) : (
          <IconCopy style={{ width: 16, height: 16 }} />
        )}
        <span>{copiedLink ? 'Link copied!' : 'Copy link'}</span>
      </button>

      <button type="button" className="share-menu-item whatsapp-item" onClick={handleWhatsApp}>
        <IconWhatsApp style={{ color: '#25D366', width: 16, height: 16 }} />
        <span>Share to WhatsApp</span>
      </button>

      {supportsNativeShare && (
        <button type="button" className="share-menu-item" onClick={handleNativeShare}>
          <IconShare style={{ width: 16, height: 16 }} />
          <span>Share via apps...</span>
        </button>
      )}

      <button type="button" className="share-menu-item" onClick={handleCopyText}>
        {copiedText ? (
          <IconCheck style={{ color: '#00ba7c', width: 16, height: 16 }} />
        ) : (
          <IconCopy style={{ width: 16, height: 16 }} />
        )}
        <span>{copiedText ? 'Text copied!' : 'Copy notice text'}</span>
      </button>
    </div>
  );
}

export default function AnnouncementFeed({
  announcements,
  onLike,
  onBookmark,
  onShare,
  onOpenImage,
  currentUser,
  onOpenCompose,
  activeBranch,
  setActiveBranch,
  activeCategory,
  setActiveCategory,
  searchQuery,
  isSidebarHidden,
  onToggleSidebar,
  joinedCommunities = [],
  onToggleJoin,
  onOpenCommunity
}) {
  const canPublish = currentUser.roleKey !== 'student';
  const [sort, setSort] = useState('Best');
  const [activeShareId, setActiveShareId] = useState(null);

  const activeCommunity = activeBranch !== 'ALL'
    ? BRANCHES.find((b) => b.id === activeBranch)
    : null;

  // Filter announcements
  const filteredAnnouncements = announcements.filter((item) => {
    // Branch filter
    if (activeBranch !== 'ALL') {
      // Inside a community only that community's own posts are shown
      if (item.branch !== activeBranch) {
        return false;
      }
    } else if (currentUser.roleKey === 'student') {
      // If student in general feed, show ALL + student's own branch
      if (item.branch !== 'ALL' && item.branch !== currentUser.branch) {
        return false;
      }
    }

    // Category filter
    if (activeCategory !== 'All' && item.category !== activeCategory) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = item.text.toLowerCase().includes(q);
      const matchAuthor = item.author.toLowerCase().includes(q);
      const matchDept = item.department.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      return matchText || matchAuthor || matchDept || matchCategory;
    }

    return true;
  });

  // Sort
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    if (sort === 'New') {
      return (b.timestamp || 0) - (a.timestamp || 0);
    }
    if (sort === 'Top') {
      return (b.likes || 0) - (a.likes || 0);
    }
    // Best: engagement score with a freshness boost
    const score = (p) => (p.likes || 0) * 2 + (p.reposts || 0) * 3 + (p.replies || 0);
    return score(b) - score(a);
  });

  return (
    <div>
      {/* Reddit-style community page (only when a community is selected) */}
      {activeCommunity && (
        <CommunityHeader
          branch={activeCommunity}
          postCount={filteredAnnouncements.length}
          isJoined={joinedCommunities.includes(activeCommunity.id)}
          onToggleJoin={() => onToggleJoin && onToggleJoin(activeCommunity.id)}
          onCreatePost={() => onOpenCompose({ mode: 'text', branch: activeCommunity.id })}
          onBack={() => setActiveBranch('ALL')}
          sort={sort}
          setSort={setSort}
        />
      )}

      {/* Sticky Header */}
      <div className="sticky-header">
        {!activeCommunity && (
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
              <button
                type="button"
                className="mobile-header-avatar-btn mobile-only"
                onClick={() => onToggleSidebar && onToggleSidebar(true)}
                title="Open profile & menu"
                aria-label="Open profile & menu"
              >
                <span className="avatar avatar-sm" style={{ background: currentUser?.avatarBg || 'var(--card-bg)' }}>
                  <span>{currentUser?.avatarChar || 'U'}</span>
                </span>
              </button>
              <div className="header-title-block">
                <h1 className="header-main-title">Notices & Announcements</h1>
                {currentUser.roleKey !== 'student' && (
                  <span className="header-sub-title">
                    {`${currentUser.role} Control Feed`}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Category & Sort Dropdown Bar */}
        <div className="feed-filter-bar">
          <div className="feed-filter-group">
            {activeCommunity && (
              <button
                type="button"
                className="community-back-pill"
                onClick={() => setActiveBranch('ALL')}
                title="Back to all notices"
              >
                <IconArrowLeft />
                <span>All notices</span>
              </button>
            )}
            <FilterDropdown
              label="Category"
              value={activeCategory}
              options={CATEGORIES}
              onChange={setActiveCategory}
              icon={IconTag}
            />
            <FilterDropdown
              label="Sort by"
              value={sort}
              options={['Best', 'New', 'Top']}
              onChange={setSort}
              icon={IconSort}
            />
            {activeCategory !== 'All' && (
              <button
                type="button"
                className="feed-filter-clear-btn"
                onClick={() => setActiveCategory('All')}
                title="Reset category filter"
              >
                Clear filter
              </button>
            )}
          </div>
          <span className="feed-filter-count">
            {filteredAnnouncements.length} {filteredAnnouncements.length === 1 ? 'notice' : 'notices'}
          </span>
        </div>
      </div>

      {/* LinkedIn-style post starter */}
      {canPublish && (
        <LinkedInComposer currentUser={currentUser} onOpenCompose={onOpenCompose} />
      )}

      {/* Announcements Feed Stream */}
      <section className="posts-feed" aria-label="College Announcements">
        {sortedAnnouncements.length === 0 ? (
          <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
              {activeCommunity
                ? `${activeCommunity.slug} has no notices yet`
                : 'No notices match current filters'}
            </h3>
            <p style={{ fontSize: 14 }}>
              {activeCommunity
                ? 'Be the first to post a notice in this community.'
                : 'Try selecting "All Branches" or clearing your search term to see other college announcements.'}
            </p>
          </div>
        ) : (
          sortedAnnouncements.map((item) => (
            <article key={item.id} className="post-card">
              <div className="post-avatar-col">
                <div className="avatar avatar-md" style={{ background: item.avatarBg }}>
                  <span>{item.avatarChar}</span>
                </div>
              </div>

              <div className="post-content-col">
                <div className="post-header-line">
                  <div className="post-user-info">
                    <span className="post-user-name">{item.author}</span>
                    <VerifiedBadge type={item.verifiedType} />
                    <span className="post-user-handle">{item.handle}</span>
                    {item.collaborators && item.collaborators.length > 0 && (
                      <span className="post-user-handle">
                        with {item.collaborators.map((c) => c.name).join(', ')}
                      </span>
                    )}
                    <span className="post-dot">·</span>
                    <span className="post-timestamp">{item.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span className="category-badge">{item.category}</span>
                    <button
                      type="button"
                      className="reddit-sub-badge"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.branch === 'ALL') {
                          setActiveBranch('ALL');
                        } else if (onOpenCommunity) {
                          onOpenCommunity(item.branch);
                        } else {
                          setActiveBranch(item.branch);
                        }
                      }}
                      title={`Filter by ${item.branch === 'ALL' ? 's/all' : `s/${item.branch}`}`}
                    >
                      <CommunityAvatar id={item.branch} size={15} />
                      <span>{item.branch === 'ALL' ? 's/all' : `s/${item.branch}`}</span>
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>
                  {item.department}
                </div>

                {item.articleTitle && (
                  <h3 className="post-article-headline">
                    {item.articleTitle}
                  </h3>
                )}

                <div className="post-text">{item.text}</div>

                {item.linkUrl && (
                  <div style={{ margin: '6px 0' }}>
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="post-link"
                      style={{ fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      {item.linkLabel || 'Official Link'}: {item.linkUrl}
                    </a>
                  </div>
                )}

                {item.media && item.mediaKind === 'video' ? (
                  <div className="post-media-container post-video-container" onClick={(e) => e.stopPropagation()}>
                    <video
                      src={item.media}
                      controls
                      playsInline
                      preload="metadata"
                      className="post-media-video"
                    />
                  </div>
                ) : item.media && item.mediaKind === 'document' ? (
                  <div className="post-doc-attachment">
                    <div className="post-doc-icon-wrap">
                      <IconArticle style={{ width: 22, height: 22 }} />
                    </div>
                    <div className="post-doc-details">
                      <span className="post-doc-title">{item.mediaName || 'Attached Document'}</span>
                      <span className="post-doc-meta">{item.mediaSize || 'File attachment'}</span>
                    </div>
                    <a
                      href={item.media}
                      download={item.mediaName || 'document'}
                      className="post-doc-download-btn"
                    >
                      Download
                    </a>
                  </div>
                ) : item.media ? (
                  <div className="post-media-container" onClick={() => onOpenImage(item.media)}>
                    <img src={item.media} alt="Notice attachment" className="post-media-img" />
                  </div>
                ) : null}

                {/* X.com-style action bar */}
                <div className="post-actions-row">
                  <button
                    type="button"
                    className="x-action-btn x-reply"
                    aria-label="Replies"
                  >
                    <span className="x-action-icon-wrap"><IconReply /></span>
                    <span className="x-action-count">{formatCount(item.replies)}</span>
                  </button>

                  <button
                    type="button"
                    className="x-action-btn x-repost"
                    aria-label="Reposts"
                  >
                    <span className="x-action-icon-wrap"><IconRepost /></span>
                    <span className="x-action-count">{formatCount(item.reposts)}</span>
                  </button>

                  <button
                    type="button"
                    className={`x-action-btn x-like ${item.isLiked ? 'liked' : ''}`}
                    onClick={(e) => { e.stopPropagation(); onLike(item.id); }}
                    aria-label={item.isLiked ? 'Unlike' : 'Like'}
                  >
                    <span className="x-action-icon-wrap"><IconHeart filled={item.isLiked} /></span>
                    <span className="x-action-count">{formatCount(item.likes)}</span>
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 'auto' }}>
                    <button
                      type="button"
                      className={`x-action-btn x-bookmark ${item.isBookmarked ? 'bookmarked' : ''}`}
                      onClick={(e) => { e.stopPropagation(); onBookmark(item.id); }}
                      aria-label={item.isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                    >
                      <span className="x-action-icon-wrap"><IconBookmarkAction filled={item.isBookmarked} /></span>
                    </button>

                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        className={`x-action-btn x-share ${activeShareId === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveShareId((prev) => (prev === item.id ? null : item.id));
                        }}
                        aria-label="Share notice"
                        aria-expanded={activeShareId === item.id}
                      >
                        <span className="x-action-icon-wrap"><IconShare /></span>
                      </button>

                      <PostShareMenu
                        item={item}
                        isOpen={activeShareId === item.id}
                        onClose={() => setActiveShareId(null)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
