import React, { useState, useEffect, useRef } from 'react';
import {
  IconClose,
  IconMedia,
  IconChevronDown,
  IconEye,
  IconTag,
  IconCommentBubble,
  IconCollaborate,
  IconProofread,
  IconLink,
  IconPlus,
  IconClock,
  IconVideo,
  IconArticle,
  IconCheck,
  VerifiedBadge,
  UserAvatar
} from './Icons';
import { BRANCHES, CATEGORIES, USERS } from '../data/initialData';

const MAX_CHARS = 500;
const MAX_CHARS_ARTICLE = 3000;

const COMMENT_OPTIONS = ['Anyone', 'People you mention', 'My connections'];

export default function ComposeModal({
  isOpen,
  onClose,
  currentUser,
  onPublishNotice,
  intent,
  users = USERS,
  onSwitchUser
}) {
  const [text, setText] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [branch, setBranch] = useState(currentUser.branch === 'ALL' ? 'ALL' : currentUser.branch);
  const [category, setCategory] = useState('Academic');
  const [currentMode, setCurrentMode] = useState('text');
  const [isImportant, setIsImportant] = useState(false);

  // Media state (strictly user files, no demo images)
  const [media, setMedia] = useState('');
  const [mediaKind, setMediaKind] = useState(null); // 'photo' | 'video' | 'document'
  const [mediaName, setMediaName] = useState('');
  const [mediaSize, setMediaSize] = useState('');

  const [commentAudience, setCommentAudience] = useState('Anyone');
  const [collaborators, setCollaborators] = useState([]);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showIdentityMenu, setShowIdentityMenu] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkInput, setLinkInput] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [proofreadMsg, setProofreadMsg] = useState('');
  const [scheduledAt, setScheduledAt] = useState('');
  const [showSchedule, setShowSchedule] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);

  // Hidden file inputs
  const dialogRef = useRef(null);
  const collabRef = useRef(null);
  const mediaInputRef = useRef(null);
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const docInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (collabRef.current && !collabRef.current.contains(e.target)) {
        setShowCollaborators(false);
      }
    }
    if (showCollaborators) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCollaborators]);

  const isArticle = currentMode === 'article';
  const charLimit = isArticle ? MAX_CHARS_ARTICLE : MAX_CHARS;
  const charCount = text.length;
  const charOver = charCount > charLimit;

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      if (!dialogRef.current.open) dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Reset or initialize modal state when opened
  useEffect(() => {
    if (!isOpen) return;

    const initialMode = intent?.mode || 'text';
    setCurrentMode(initialMode);
    setText('');
    setArticleTitle('');
    const targetBranch = intent?.branch || currentUser.branch || 'ALL';
    setBranch(targetBranch === 'ALL' ? 'ALL' : targetBranch);
    setCategory('Academic');
    setIsImportant(Boolean(intent?.isImportant));
    setCommentAudience('Anyone');
    setCollaborators([]);
    setShowCollaborators(false);
    setShowIdentityMenu(false);
    setShowLinkInput(false);
    setLinkInput('');
    setLinkUrl('');
    setProofreadMsg('');
    setScheduledAt('');
    setShowSchedule(false);
    setShowPlusMenu(false);

    // If a real file was passed from the opener, use it; otherwise media starts clean
    if (intent?.initialMedia) {
      setMedia(intent.initialMedia);
      setMediaKind(intent.initialMediaKind || initialMode);
      setMediaName(intent.initialMediaName || '');
      setMediaSize(intent.initialMediaSize || '');
    } else {
      setMedia('');
      setMediaKind(null);
      setMediaName('');
      setMediaSize('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, intent]);

  if (!isOpen) return null;

  const formatFileSize = (bytes) => {
    if (!bytes) return '';
    return bytes > 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(bytes / 1024)} KB`;
  };

  const handleFileUpload = (e, explicitKind = null) => {
    const file = e.target.files?.[0];
    if (!file) return;

    let kind = explicitKind;
    if (!kind) {
      if (file.type.startsWith('video/')) kind = 'video';
      else if (file.type.startsWith('image/')) kind = 'photo';
      else kind = 'document';
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setMedia(event.target.result);
      setMediaKind(kind);
      setMediaName(file.name);
      setMediaSize(formatFileSize(file.size));
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleAddLink = () => {
    const value = linkInput.trim();
    if (!value) return;
    const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    setLinkUrl(url);
    setLinkInput('');
    setShowLinkInput(false);
  };

  const runProofread = () => {
    if (!text.trim()) {
      setProofreadMsg('Type some text before checking');
      return;
    }

    let cleaned = text;
    const issues = [];

    // Redundant spaces
    if (/[ \t]{2,}/.test(cleaned)) {
      issues.push('spacing');
      cleaned = cleaned.replace(/[ \t]{2,}/g, ' ');
    }

    // Punctuation spacing
    if (/\s+([.,;:!?])/.test(cleaned)) {
      issues.push('punctuation');
      cleaned = cleaned.replace(/\s+([.,;:!?])/g, '$1');
    }

    // Capitalize beginning of sentences
    const capitalized = cleaned.replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, prefix, char) => prefix + char.toUpperCase());
    if (capitalized !== cleaned) {
      issues.push('capitalization');
      cleaned = capitalized;
    }

    // Repeated words
    if (/\b(\w+)\s+\1\b/i.test(cleaned)) {
      issues.push('duplicate words');
      cleaned = cleaned.replace(/\b(\w+)\s+\1\b/gi, '$1');
    }

    if (issues.length > 0) {
      setText(cleaned);
      setProofreadMsg(`Polished: ${issues.join(', ')}`);
    } else {
      setProofreadMsg('Text looks clean and ready');
    }
  };

  const toggleCollaborator = (roleKey) => {
    setCollaborators((prev) =>
      prev.includes(roleKey) ? prev.filter((k) => k !== roleKey) : [...prev, roleKey]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !media && !articleTitle.trim()) return;
    if (charOver) return;

    onPublishNotice({
      articleTitle: isArticle ? articleTitle.trim() : null,
      text: text.trim(),
      branch,
      category,
      isImportant,
      media: media || null,
      mediaKind: mediaKind || null,
      mediaName: mediaName || null,
      mediaSize: mediaSize || null,
      linkUrl: linkUrl || null,
      comments: commentAudience,
      collaborators: collaborators.map((k) => users[k]).filter(Boolean),
      time: scheduledAt ? new Date(scheduledAt).toLocaleString() : 'Just now'
    });

    onClose();
  };

  const postDisabled = (!text.trim() && !media && !articleTitle.trim()) || charOver;

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal li-compose-modal"
      onClose={onClose}
    >
      {/* Hidden file pickers */}
      <input
        type="file"
        ref={mediaInputRef}
        accept="image/*,video/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileUpload(e)}
      />
      <input
        type="file"
        ref={photoInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileUpload(e, 'photo')}
      />
      <input
        type="file"
        ref={videoInputRef}
        accept="video/*"
        style={{ display: 'none' }}
        onChange={(e) => handleFileUpload(e, 'video')}
      />
      <input
        type="file"
        ref={docInputRef}
        accept=".pdf,.doc,.docx,.txt"
        style={{ display: 'none' }}
        onChange={(e) => handleFileUpload(e, 'document')}
      />

      <div className="modal-dialog-content">
        {/* Identity row */}
        <div className="li-compose-top">
          <div className="li-compose-identity">
            <UserAvatar user={currentUser} sizeClass="avatar-lg" />
            <div className="li-compose-identity-text">
              <div className="li-compose-name-wrap">
                <button
                  type="button"
                  className="li-compose-name-btn"
                  onClick={() => setShowIdentityMenu((v) => !v)}
                  aria-expanded={showIdentityMenu}
                >
                  {currentUser.name}
                  <IconChevronDown />
                </button>
                {showIdentityMenu && (
                  <div className="li-menu" role="menu">
                    {Object.entries(users).map(([roleKey, u]) => (
                      <button
                        key={roleKey}
                        type="button"
                        className="li-menu-item"
                        onClick={() => {
                          setShowIdentityMenu(false);
                          if (onSwitchUser) onSwitchUser(roleKey);
                          const target = users[roleKey];
                          if (target) {
                            setBranch(target.branch === 'ALL' ? 'ALL' : target.branch);
                          }
                        }}
                        role="menuitem"
                      >
                        <span className="avatar avatar-sm" style={{ background: u.avatarBg }}>
                          <span>{u.avatarChar}</span>
                        </span>
                        <span>
                          <span className="li-menu-item-name">{u.name}</span>
                          <span className="li-menu-item-sub">{u.role}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="li-compose-sub">
                {currentUser.role} · {currentUser.handle}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <IconClose className="li-icon" />
          </button>
        </div>

        {/* Audience / category pills */}
        <div className="li-compose-pills">
          <label className="li-pill" title="Who can see this notice">
            <IconEye />
            <span className="li-pill-label">Post to</span>
            <select
              className="li-pill-select"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="ALL">s/all (All Departments)</option>
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>{b.slug}</option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <label className="li-pill" title="Notice category">
            <IconTag />
            <span className="li-pill-label">Category</span>
            <select
              className="li-pill-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.filter((c) => c !== 'All').map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <button
            type="button"
            className={`li-pill li-pill-important ${isImportant ? 'is-active' : ''}`}
            onClick={() => setIsImportant((v) => !v)}
            title="Mark as Important Notice (pins to top of feed in red)"
            aria-pressed={isImportant}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="li-pill-label">Important</span>
            {isImportant && <span className="li-pill-important-tag">PINNED</span>}
          </button>

          <label className="li-pill" title="Who can comment">
            <IconCommentBubble />
            <span className="li-pill-label">Comments</span>
            <select
              className="li-pill-select"
              value={commentAudience}
              onChange={(e) => setCommentAudience(e.target.value)}
            >
              {COMMENT_OPTIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <IconChevronDown />
          </label>

          <div className="li-pill-wrap" ref={collabRef}>
            <button
              type="button"
              className={`li-pill li-pill-button ${collaborators.length > 0 ? 'active' : ''}`}
              onClick={() => setShowCollaborators((v) => !v)}
              aria-expanded={showCollaborators}
              title="Add co-authors or faculty collaborators"
            >
              <IconCollaborate />
              <span>
                {collaborators.length > 0
                  ? `Collaborators (${collaborators.length})`
                  : 'Add collaborators'}
              </span>
              <IconChevronDown className={`li-collab-arrow ${showCollaborators ? 'open' : ''}`} />
            </button>
            {showCollaborators && (
              <div className="li-menu li-collab-menu" role="menu">
                <div className="li-collab-menu-header">
                  <span className="li-collab-menu-title">Co-Authors & Faculty</span>
                  {collaborators.length > 0 && (
                    <button
                      type="button"
                      className="li-collab-clear-btn"
                      onClick={() => setCollaborators([])}
                    >
                      Clear all
                    </button>
                  )}
                </div>
                {Object.entries(users)
                  .filter(([roleKey, u]) => roleKey !== 'student' && roleKey !== currentUser.roleKey)
                  .map(([roleKey, u]) => {
                    const isSelected = collaborators.includes(roleKey);
                    return (
                      <button
                        key={roleKey}
                        type="button"
                        className={`li-collab-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleCollaborator(roleKey)}
                        role="menuitemcheckbox"
                        aria-checked={isSelected}
                      >
                        <span className="avatar avatar-sm" style={{ background: u.avatarBg, flexShrink: 0 }}>
                          <span>{u.avatarChar}</span>
                        </span>
                        <div className="li-collab-item-info">
                          <div className="li-collab-name-row">
                            <span className="li-menu-item-name">{u.name}</span>
                            <VerifiedBadge type={u.verifiedType} />
                          </div>
                          <span className="li-menu-item-sub">
                            {u.department || u.role} · {u.handle}
                          </span>
                        </div>
                        <div className={`li-collab-checkbox ${isSelected ? 'checked' : ''}`}>
                          {isSelected && <IconCheck style={{ width: 12, height: 12 }} />}
                        </div>
                      </button>
                    );
                  })}
              </div>
            )}
          </div>
        </div>

        {/* Selected collaborators */}
        {collaborators.length > 0 && (
          <div className="li-collab-strip">
            {collaborators.map((roleKey) => {
              const u = users[roleKey];
              if (!u) return null;
              return (
                <span key={roleKey} className="li-collab-chip">
                  <span className="avatar avatar-sm" style={{ background: u.avatarBg }}>
                    <span>{u.avatarChar}</span>
                  </span>
                  {u.name}
                  <button
                    type="button"
                    onClick={() => toggleCollaborator(roleKey)}
                    aria-label={`Remove ${u.name}`}
                  >
                    <IconClose className="li-icon-sm" />
                  </button>
                </span>
              );
            })}
          </div>
        )}

        <form onSubmit={handleSubmit} className="li-compose-form">
          {/* Article mode headline */}
          {isArticle && (
            <input
              type="text"
              className="li-article-title-input"
              placeholder="Headline / Article Title..."
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              autoFocus
            />
          )}

          <textarea
            className="li-compose-textarea"
            placeholder={isArticle ? 'Write the full body of your article here...' : 'Share an announcement, academic update, or campus notice...'}
            rows={isArticle ? 8 : 5}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setProofreadMsg('');
            }}
          />

          {/* Empty Upload Zone if in photo or video mode without media */}
          {!media && currentMode === 'photo' && (
            <div className="li-upload-zone" onClick={() => photoInputRef.current?.click()}>
              <IconMedia className="li-upload-zone-icon" />
              <div className="li-upload-zone-text">
                <strong>Click to choose a photo</strong>
                <span>Supports PNG, JPG, WebP, GIF from your device</span>
              </div>
              <button type="button" className="li-upload-zone-btn">Browse Photo</button>
            </div>
          )}

          {!media && currentMode === 'video' && (
            <div className="li-upload-zone" onClick={() => videoInputRef.current?.click()}>
              <IconVideo className="li-upload-zone-icon video" />
              <div className="li-upload-zone-text">
                <strong>Click to choose a video</strong>
                <span>Supports MP4, WebM, MOV video files</span>
              </div>
              <button type="button" className="li-upload-zone-btn">Browse Video</button>
            </div>
          )}

          {/* Media Preview: Real Photo, Video, or Document */}
          {media && (
            <div className="li-compose-preview">
              {mediaKind === 'video' ? (
                <video
                  src={media}
                  controls
                  playsInline
                  className="li-preview-video"
                />
              ) : mediaKind === 'document' ? (
                <div className="li-compose-preview-doc">
                  <div className="li-compose-preview-doc-icon">
                    <IconArticle style={{ width: 22, height: 22 }} />
                  </div>
                  <div className="li-compose-preview-doc-info">
                    <span className="li-compose-preview-doc-title">{mediaName || 'Attached Document'}</span>
                    <span className="li-compose-preview-doc-meta">{mediaSize || 'File'}</span>
                  </div>
                </div>
              ) : (
                <img src={media} alt="Attachment preview" />
              )}

              <div className="li-compose-preview-bar">
                <span className="li-compose-preview-label">
                  {mediaKind === 'video'
                    ? `Video attached ${mediaName ? `· ${mediaName}` : ''} ${mediaSize ? `(${mediaSize})` : ''}`
                    : mediaKind === 'document'
                      ? `Document attached ${mediaName ? `· ${mediaName}` : ''}`
                      : `Photo attached ${mediaName ? `· ${mediaName}` : ''} ${mediaSize ? `(${mediaSize})` : ''}`}
                </span>
                <button
                  type="button"
                  className="li-preview-remove"
                  onClick={() => {
                    setMedia('');
                    setMediaKind(null);
                    setMediaName('');
                    setMediaSize('');
                  }}
                  aria-label="Remove attachment"
                  title="Remove attachment"
                >
                  <IconClose className="li-icon" />
                </button>
              </div>
            </div>
          )}

          {/* Attached Link Chip */}
          {linkUrl && (
            <div className="li-link-chip">
              <IconLink />
              <span>{linkUrl}</span>
              <button
                type="button"
                onClick={() => setLinkUrl('')}
                title="Remove link"
                aria-label="Remove link"
              >
                <IconClose style={{ width: 14, height: 14 }} />
              </button>
            </div>
          )}

          {/* Link Input Row */}
          {showLinkInput && (
            <div className="li-link-row">
              <input
                type="text"
                className="li-link-input"
                placeholder="Paste URL (e.g. vtu.ac.in or github.com/...)"
                value={linkInput}
                autoFocus
                onChange={(e) => setLinkInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); handleAddLink(); }
                  if (e.key === 'Escape') { e.preventDefault(); setShowLinkInput(false); }
                }}
              />
              <button type="button" className="li-link-add" onClick={handleAddLink}>Add Link</button>
            </div>
          )}

          {/* Toolbar */}
          <div className="li-compose-toolbar">
            <button
              type="button"
              className="li-proofread-pill"
              onClick={runProofread}
              title="Clean formatting, spacing & capitalization"
            >
              <IconProofread />
              <span>Proofread</span>
            </button>

            <span className={`compose-char-counter ${charOver ? 'over' : charCount > charLimit * 0.8 ? 'warn' : ''}`}>
              {charCount}/{charLimit}
            </span>

            {proofreadMsg && <span className="li-proofread-msg">{proofreadMsg}</span>}

            <div className="li-compose-tools">
              {/* Media Picker Button: opens native device file chooser */}
              <button
                type="button"
                className="li-tool-btn"
                onClick={() => mediaInputRef.current?.click()}
                title="Upload Photo or Video"
                aria-label="Upload Photo or Video"
              >
                <IconMedia className="li-icon" />
              </button>

              {/* Link Button */}
              <button
                type="button"
                className={`li-tool-btn ${showLinkInput || linkUrl ? 'active' : ''}`}
                onClick={() => setShowLinkInput((v) => !v)}
                title="Attach link"
                aria-label="Attach link"
              >
                <IconLink />
              </button>

              {/* Plus Menu Button */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  className={`li-tool-btn ${showPlusMenu ? 'active' : ''}`}
                  onClick={() => setShowPlusMenu((v) => !v)}
                  title="More attachments"
                  aria-label="More attachments"
                >
                  <IconPlus />
                </button>

                {showPlusMenu && (
                  <div className="li-menu li-menu-right" style={{ bottom: 'calc(100% + 8px)', top: 'auto', minWidth: 200 }} role="menu">
                    <button
                      type="button"
                      className="li-menu-item"
                      onClick={() => {
                        setShowPlusMenu(false);
                        docInputRef.current?.click();
                      }}
                      role="menuitem"
                    >
                      <IconArticle style={{ width: 18, height: 18 }} />
                      <span className="li-menu-item-name">Attach PDF / Document</span>
                    </button>

                    <button
                      type="button"
                      className="li-menu-item"
                      onClick={() => {
                        setShowPlusMenu(false);
                        setCurrentMode((m) => (m === 'article' ? 'text' : 'article'));
                      }}
                      role="menuitem"
                    >
                      <IconTag style={{ width: 18, height: 18 }} />
                      <span className="li-menu-item-name">
                        {isArticle ? 'Switch to Standard Post' : 'Switch to Article Mode'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="li-compose-footer">
            {showSchedule && (
              <input
                type="datetime-local"
                className="li-schedule-input"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
              />
            )}

            <button
              type="button"
              className={`li-schedule-btn ${showSchedule ? 'active' : ''}`}
              onClick={() => setShowSchedule((v) => !v)}
              title="Schedule notice publication"
              aria-label="Schedule notice publication"
            >
              <IconClock />
            </button>

            <button type="submit" className="li-post-btn" disabled={postDisabled}>
              {scheduledAt ? 'Schedule' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
