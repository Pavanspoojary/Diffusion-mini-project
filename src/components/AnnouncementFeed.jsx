import React, { useState, useRef, useEffect } from 'react';
import {
  IconHeart,
  IconBookmarkAction,
  IconShare,
  IconSidebarToggle,
  IconNotifications,
  VerifiedBadge,
  CommunityAvatar,
  IconChevronDown,
  IconTag,
  IconSort,
  IconCheck,
  IconArrowLeft,
  IconCopy,
  IconWhatsApp,
  IconArticle,
  IconPin
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
  const shareText = `[SMVITM Campus Hub] Notice from ${item.author}:\n${item.text}\n\n${shareUrl}`;

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
  onOpenCommunity,
  unreadCount = 0,
  onOpenNotifications,
  isHeaderHidden = false,
  onTogglePin
}) {
  const canPublish = currentUser.roleKey !== 'student';
  const canManagePin = currentUser?.roleKey !== 'student';
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
    // Pinned / Important notices always stay on top
    const aImportant = Boolean(a.isImportant || a.important || a.tag === 'Important');
    const bImportant = Boolean(b.isImportant || b.important || b.tag === 'Important');
    if (aImportant && !bImportant) return -1;
    if (!aImportant && bImportant) return 1;

    if (sort === 'New') {
      return (b.timestamp || 0) - (a.timestamp || 0);
    }
    if (sort === 'Top') {
      return (b.reposts || 0) - (a.reposts || 0);
    }
    // Best: engagement score with reposts & replies
    const score = (p) => (p.reposts || 0) * 3 + (p.replies || 0) * 2;
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
          onCreatePost={canPublish ? () => onOpenCompose({ mode: 'text', branch: activeCommunity.id }) : null}
          onBack={() => setActiveBranch('ALL')}
          sort={sort}
          setSort={setSort}
        />
      )}

      {/* Sticky Header */}
      <div className={`sticky-header ${isHeaderHidden ? 'header-hidden' : ''}`}>
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
              <div className="header-title-block">
                <h1 className="header-main-title">Notices & Announcements</h1>
                {currentUser.roleKey !== 'student' && (
                  <span className="header-sub-title">
                    {`${currentUser.role} Control Feed`}
                  </span>
                )}
              </div>
            </div>

            {onOpenNotifications && (
              <button
                type="button"
                className="header-notif-btn"
                onClick={onOpenNotifications}
                title="Notifications"
                aria-label="Notifications"
              >
                <IconNotifications style={{ width: 19, height: 19 }} />
                {unreadCount > 0 && <span className="badge-dot" style={{ top: 2, right: 2 }} />}
              </button>
            )}
          </div>
        )}

        {/* Category & Sort Dropdown Bar */}
        <div className="feed-filter-bar">
          <div className="feed-filter-group">
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
                ? (canPublish ? 'Be the first to post a notice in this community.' : 'No notices have been published in this community yet.')
                : 'Try selecting "All Branches" or clearing your search term to see other college announcements.'}
            </p>
          </div>
        ) : (
          sortedAnnouncements.map((item) => {
            const isItemImportant = Boolean(item.isImportant || item.important || item.tag === 'Important');
            return (
              <article key={item.id} className={`post-card ${isItemImportant ? 'is-important' : ''}`}>
                <div className="post-avatar-col">
                  <div className="avatar avatar-md" style={{ background: item.avatarBg }}>
                    <span>{item.avatarChar}</span>
                  </div>
                </div>

                <div className="post-content-col">
                  {isItemImportant && (
                    <div className="post-important-badge">
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>IMPORTANT NOTICE</span>
                      <span className="post-important-pill">PINNED</span>
                    </div>
                  )}

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
                  </div>

                  {/* Badges Row - Always placed below author line */}
                  <div className="post-badges-row">
                    <button
                      type="button"
                      className={`category-badge cat-${(item.category || '').toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (setActiveCategory) setActiveCategory(item.category);
                      }}
                      title={`Filter notices by ${item.category}`}
                    >
                      {item.category}
                    </button>
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

                {/* Post action bar: Pin (Staff only), Bookmark, Share */}
                <div className="post-actions-row">
                  {canManagePin && onTogglePin && (
                    <button
                      type="button"
                      className={`x-action-btn x-pin ${isItemImportant ? 'pinned' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onTogglePin(item.id);
                      }}
                      aria-label={isItemImportant ? 'Unpin notice' : 'Pin notice'}
                      title={isItemImportant ? 'Unpin from feed top' : 'Pin notice to top'}
                    >
                      <span className="x-action-icon-wrap">
                        <IconPin filled={isItemImportant} />
                      </span>
                      <span className="x-action-count">{isItemImportant ? 'Pinned' : 'Pin'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    className={`x-action-btn x-bookmark ${item.isBookmarked ? 'bookmarked' : ''}`}
                    onClick={(e) => { e.stopPropagation(); onBookmark(item.id); }}
                    aria-label={item.isBookmarked ? 'Remove bookmark' : 'Bookmark'}
                    title={item.isBookmarked ? 'Remove bookmark' : 'Bookmark notice'}
                  >
                    <span className="x-action-icon-wrap"><IconBookmarkAction filled={item.isBookmarked} /></span>
                    <span className="x-action-count">{item.isBookmarked ? 'Saved' : 'Save'}</span>
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
                      title="Share notice"
                    >
                      <span className="x-action-icon-wrap"><IconShare /></span>
                      <span className="x-action-count">Share</span>
                    </button>

                    <PostShareMenu
                      item={item}
                      isOpen={activeShareId === item.id}
                      onClose={() => setActiveShareId(null)}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })
        )}
      </section>
    </div>
  );
}
