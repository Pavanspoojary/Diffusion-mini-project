import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  IconBookmarks,
  IconArrowLeft,
  IconSidebarToggle,
  IconSearch,
  IconClose,
  IconSort,
  IconTag,
  IconBookmarkAction,
  IconShare,
  IconPin,
  IconCopy,
  IconCheck,
  IconWhatsApp,
  IconArticle,
  VerifiedBadge,
  CommunityAvatar,
  IconChevronDown,
  IconTrash,
  UserAvatar
} from './Icons';
import { findLecturerProfile } from '../services/dbService';

function FilterDropdown({ label, value, options, onChange, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="feed-filter-wrap" ref={ref}>
      <button
        type="button"
        className={`feed-filter-btn ${open ? 'open' : ''} ${value !== 'All' && value !== 'New' ? 'highlighted' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {Icon && <Icon className="feed-filter-icon" />}
        <span className="feed-filter-label">{label}:</span>
        <span className="feed-filter-value">{value}</span>
        <IconChevronDown className={`feed-filter-chevron ${open ? 'rotated' : ''}`} />
      </button>

      {open && (
        <div className="feed-filter-dropdown" role="menu">
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <button
                key={opt}
                type="button"
                className={`feed-filter-option ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                role="menuitem"
              >
                <span>{opt}</span>
                {isSelected && <IconCheck style={{ width: 14, height: 14, color: 'var(--accent-color)' }} />}
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

  return (
    <div className="post-share-popover" ref={menuRef} onClick={(e) => e.stopPropagation()}>
      <button type="button" className="share-menu-item" onClick={handleCopyLink}>
        {copiedLink ? (
          <IconCheck style={{ color: '#00ba7c', width: 16, height: 16 }} />
        ) : (
          <IconCopy style={{ width: 16, height: 16 }} />
        )}
        <span>{copiedLink ? 'Link copied' : 'Copy link'}</span>
      </button>

      <button type="button" className="share-menu-item" onClick={handleCopyText}>
        {copiedText ? (
          <IconCheck style={{ color: '#00ba7c', width: 16, height: 16 }} />
        ) : (
          <IconCopy style={{ width: 16, height: 16 }} />
        )}
        <span>{copiedText ? 'Text copied' : 'Copy notice text'}</span>
      </button>

      <button type="button" className="share-menu-item" onClick={handleWhatsApp}>
        <IconWhatsApp style={{ width: 16, height: 16, color: '#25D366' }} />
        <span>Share via WhatsApp</span>
      </button>
    </div>
  );
}

export default function BookmarksView({
  announcements = [],
  onBookmark,
  onShare,
  onOpenImage,
  currentUser,
  isSidebarHidden,
  onToggleSidebar,
  onBack,
  onSelectNav,
  isHeaderHidden = false,
  onTogglePin,
  onOpenCommunity,
  onClearAll,
  onDeleteNotice,
  lecturers = [],
  onOpenLecturer
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sort, setSort] = useState('New');
  const [activeShareId, setActiveShareId] = useState(null);
  const [confirmClear, setConfirmClear] = useState(false);
  const [confirmDeleteNotice, setConfirmDeleteNotice] = useState(null);

  const canManagePin = currentUser && ['admin', 'principal', 'hod', 'faculty'].includes(currentUser.roleKey);

  // Available categories derived from bookmarked items
  const availableCategories = useMemo(() => {
    const cats = new Set(['All']);
    announcements.forEach((a) => {
      if (a.category) cats.add(a.category);
    });
    return Array.from(cats);
  }, [announcements]);

  // Filtered bookmarked notices
  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchText = (item.text || '').toLowerCase().includes(q);
        const matchAuthor = (item.author || '').toLowerCase().includes(q);
        const matchDept = (item.department || '').toLowerCase().includes(q);
        const matchCategory = (item.category || '').toLowerCase().includes(q);
        const matchArticle = (item.articleTitle || '').toLowerCase().includes(q);
        return matchText || matchAuthor || matchDept || matchCategory || matchArticle;
      }
      return true;
    });
  }, [announcements, selectedCategory, searchQuery]);

  // Sorted notices
  const sortedAnnouncements = useMemo(() => {
    return [...filteredAnnouncements].sort((a, b) => {
      const aImportant = Boolean(a.isImportant || a.important || a.tag === 'Important');
      const bImportant = Boolean(b.isImportant || b.important || b.tag === 'Important');
      if (aImportant && !bImportant) return -1;
      if (!aImportant && bImportant) return 1;

      if (sort === 'New') {
        return (b.timestamp || 0) - (a.timestamp || 0);
      }
      if (sort === 'Old') {
        return (a.timestamp || 0) - (b.timestamp || 0);
      }
      if (sort === 'Top') {
        return (b.reposts || 0) - (a.reposts || 0);
      }
      return (b.timestamp || 0) - (a.timestamp || 0);
    });
  }, [filteredAnnouncements, sort]);

  const totalBookmarks = announcements.length;
  const userHandle = currentUser?.handle
    ? (currentUser.handle.startsWith('@') ? currentUser.handle : `@${currentUser.handle}`)
    : '';

  return (
    <div className="bookmarks-container">
      {/* Sticky Header */}
      <div className={`sticky-header ${isHeaderHidden ? 'header-hidden' : ''}`}>
        <div className="header-top-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {isSidebarHidden && onToggleSidebar && (
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
              <h1 className="header-main-title">Bookmarks</h1>
              <span className="header-sub-title">
                {userHandle ? `${userHandle} · ` : ''}
                {totalBookmarks} saved {totalBookmarks === 1 ? 'notice' : 'notices'}
              </span>
            </div>
          </div>

          {/* Header Action: Clear all bookmarks */}
          {totalBookmarks > 0 && onClearAll && (
            <div>
              {confirmClear ? (
                <div className="bookmarks-clear-confirm">
                  <span>Clear all?</span>
                  <button
                    type="button"
                    className="bookmarks-confirm-yes"
                    onClick={() => {
                      onClearAll();
                      setConfirmClear(false);
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="bookmarks-confirm-no"
                    onClick={() => setConfirmClear(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="bookmarks-clear-all-btn"
                  onClick={() => setConfirmClear(true)}
                  title="Remove all bookmarked notices"
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>

        {/* Filter & Search Bar: Only shown when user has saved bookmarks */}
        {totalBookmarks > 0 && (
          <div className="feed-filter-bar">
            <div className="feed-filter-group" style={{ flexWrap: 'wrap', gap: 8 }}>
              {/* Category Filter */}
              <FilterDropdown
                label="Category"
                value={selectedCategory}
                options={availableCategories}
                onChange={setSelectedCategory}
                icon={IconTag}
              />

              {/* Sort Filter */}
              <FilterDropdown
                label="Sort by"
                value={sort}
                options={['New', 'Old', 'Top']}
                onChange={setSort}
                icon={IconSort}
              />

              {/* Search Within Bookmarks */}
              <div className="bookmarks-search-box">
                <IconSearch className="bookmarks-search-icon" style={{ width: 14, height: 14 }} />
                <input
                  type="text"
                  className="bookmarks-search-input"
                  placeholder="Search saved notices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="bookmarks-search-clear"
                    onClick={() => setSearchQuery('')}
                    title="Clear search"
                  >
                    <IconClose style={{ width: 12, height: 12 }} />
                  </button>
                )}
              </div>

              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  className="feed-filter-clear-btn"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  title="Reset filters"
                >
                  Reset
                </button>
              )}
            </div>

            <span className="feed-filter-count">
              {sortedAnnouncements.length} {sortedAnnouncements.length === 1 ? 'notice' : 'notices'}
            </span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <section className="posts-feed" aria-label="Bookmarked Announcements">
        {totalBookmarks === 0 ? (
          /* Empty State: Zero Bookmarks */
          <div className="bookmarks-empty-card">
            <div className="bookmarks-empty-icon-wrap">
              <IconBookmarks style={{ width: 28, height: 28, color: 'var(--accent-color)' }} />
            </div>
            <h2 className="bookmarks-empty-title">Save notices for later</h2>
            <p className="bookmarks-empty-desc">
              Tap the bookmark icon on any announcement to save it here for quick reference.
            </p>
            {onBack && (
              <button
                type="button"
                className="bookmarks-explore-btn"
                onClick={onBack}
              >
                Browse Feed
              </button>
            )}
          </div>
        ) : sortedAnnouncements.length === 0 ? (
          /* Empty State: Filter/Search yielded 0 matches */
          <div className="bookmarks-empty-card">
            <h3 className="bookmarks-empty-title">No matching bookmarks found</h3>
            <p className="bookmarks-empty-desc">
              No saved notices matched your current category or search query.
            </p>
            <button
              type="button"
              className="bookmarks-explore-btn"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* List of Bookmarked Post Cards */
          sortedAnnouncements.map((item) => {
            const isItemImportant = Boolean(item.isImportant || item.important || item.tag === 'Important');
            const matchedLecturer = findLecturerProfile(lecturers, {
              userId: item.userId,
              handle: item.handle,
              author: item.author
            });
            const canDelete =
              Boolean(currentUser) &&
              (currentUser.roleKey === 'admin' ||
                item.userId === currentUser.id ||
                item.handle === currentUser.handle ||
                item.author === currentUser.name);

            return (
              <article key={item.id} className={`post-card ${isItemImportant ? 'is-important' : ''}`}>
                <div className="post-avatar-col">
                  <UserAvatar
                    user={matchedLecturer || item}
                    sizeClass="avatar-md"
                    onClick={matchedLecturer && onOpenLecturer ? () => onOpenLecturer(matchedLecturer.id) : undefined}
                    style={matchedLecturer && onOpenLecturer ? { cursor: 'pointer' } : undefined}
                  />
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
                      {matchedLecturer && onOpenLecturer ? (
                        <button
                          type="button"
                          className="post-author-link"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenLecturer(matchedLecturer.id);
                          }}
                          title={`View ${matchedLecturer.name}'s profile`}
                        >
                          {matchedLecturer.name}
                        </button>
                      ) : (
                        <span className="post-user-name">{item.author}</span>
                      )}
                      <VerifiedBadge type={item.verifiedType} />
                      <span className="post-user-handle">{item.handle}</span>
                      {item.collaborators && item.collaborators.length > 0 && (
                        <span className="post-collab-with">
                          with <strong className="post-collab-name">{item.collaborators.map((c) => c.name).join(', ')}</strong>
                        </span>
                      )}
                      <span className="post-dot">·</span>
                      <span className="post-timestamp">{item.time}</span>
                    </div>
                  </div>

                  {/* Badges Row */}
                  <div className="post-badges-row">
                    <button
                      type="button"
                      className={`category-badge cat-${(item.category || '').toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(item.category);
                      }}
                      title={`Filter by ${item.category}`}
                    >
                      {item.category}
                    </button>
                    <button
                      type="button"
                      className="reddit-sub-badge"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenCommunity) onOpenCommunity(item.branch);
                        else if (onSelectNav) onSelectNav('announcements');
                      }}
                      title={`Community s/${item.branch}`}
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
                    <div className="post-media-container" onClick={() => onOpenImage && onOpenImage(item.media)}>
                      <img src={item.media} alt="Notice attachment" className="post-media-img" />
                    </div>
                  ) : null}

                  {/* Actions Row */}
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

                    {/* Bookmark action (shows Saved, clicking removes) */}
                    <button
                      type="button"
                      className="x-action-btn x-bookmark bookmarked"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookmark(item.id);
                      }}
                      aria-label="Remove bookmark"
                      title="Remove from bookmarks"
                    >
                      <span className="x-action-icon-wrap">
                        <IconBookmarkAction filled={true} />
                      </span>
                      <span className="x-action-count">Saved</span>
                    </button>

                    {/* Share action */}
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
                        <span className="x-action-icon-wrap">
                          <IconShare />
                        </span>
                        <span className="x-action-count">Share</span>
                      </button>

                      <PostShareMenu
                        item={item}
                        isOpen={activeShareId === item.id}
                        onClose={() => setActiveShareId(null)}
                      />
                    </div>

                    {/* Delete notice action (author or admin only) */}
                    {canDelete && onDeleteNotice && (
                      <button
                        type="button"
                        className="x-action-btn x-delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          setConfirmDeleteNotice(item);
                        }}
                        aria-label="Delete notice"
                        title="Delete notice"
                      >
                        <span className="x-action-icon-wrap">
                          <IconTrash />
                        </span>
                        <span className="x-action-count">Delete</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>

      {/* Delete Notice Confirmation Modal */}
      {confirmDeleteNotice && (
        <div className="confirm-modal-overlay" onClick={() => setConfirmDeleteNotice(null)}>
          <div className="confirm-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="confirm-modal-title">Delete notice?</h3>
            <p className="confirm-modal-desc">
              This notice will be permanently removed from the announcements feed. This action cannot be undone.
            </p>
            <div className="confirm-modal-actions">
              <button
                type="button"
                className="btn-confirm-delete"
                onClick={() => {
                  onDeleteNotice(confirmDeleteNotice.id);
                  setConfirmDeleteNotice(null);
                }}
              >
                Delete Notice
              </button>
              <button
                type="button"
                className="btn-confirm-cancel"
                onClick={() => setConfirmDeleteNotice(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
