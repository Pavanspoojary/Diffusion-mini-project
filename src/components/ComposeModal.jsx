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
  IconClock
} from './Icons';
import { BRANCHES, CATEGORIES, USERS } from '../data/initialData';

const MAX_CHARS = 500;
const MAX_CHARS_ARTICLE = 3000;

const SAMPLE_NOTICE_IMAGES = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
];

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
  const [branch, setBranch] = useState(currentUser.branch === 'ALL' ? 'ALL' : currentUser.branch);
  const [category, setCategory] = useState('Academic');
  const [media, setMedia] = useState('');
  const [mediaKind, setMediaKind] = useState(null);
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
  const dialogRef = useRef(null);

  const mode = intent?.mode || 'text';
  const isArticle = mode === 'article';
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

  // Reset the composer each time it is opened (honouring the entry point).
  useEffect(() => {
    if (!isOpen) return;
    setText('');
    const targetBranch = intent?.branch || currentUser.branch || 'ALL';
    setBranch(targetBranch === 'ALL' ? 'ALL' : targetBranch);
    setCategory('Academic');
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

    if (mode === 'photo' || mode === 'video') {
      setMedia(SAMPLE_NOTICE_IMAGES[Math.floor(Math.random() * SAMPLE_NOTICE_IMAGES.length)]);
      setMediaKind(mode);
    } else {
      setMedia('');
      setMediaKind(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, mode]);

  if (!isOpen) return null;

  const attachImage = () => {
    setMedia(SAMPLE_NOTICE_IMAGES[Math.floor(Math.random() * SAMPLE_NOTICE_IMAGES.length)]);
    setMediaKind('photo');
  };

  const handleAddLink = () => {
    const value = linkInput.trim();
    if (!value) return;
    const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    setLinkUrl(url);
    setLinkInput('');
    setShowLinkInput(false);
    if (!text.includes(url)) {
      setText((prev) => (prev ? `${prev}\n${url}` : url));
    }
  };

  const runProofread = () => {
    if (!text.trim()) {
      setProofreadMsg('Nothing to check yet');
      return;
    }
    const issues = [];
    if (/\s{3,}/.test(text)) issues.push('extra spaces');
    if (/\s+[.,;:!?]/.test(text)) issues.push('spacing before punctuation');
    if (/(.)\1{4,}/.test(text)) issues.push('repeated characters');
    setProofreadMsg(issues.length ? `Review: ${issues.join(', ')}` : 'Looks good — no issues found');
  };

  const toggleCollaborator = (roleKey) => {
    setCollaborators((prev) =>
      prev.includes(roleKey) ? prev.filter((k) => k !== roleKey) : [...prev, roleKey]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !media) return;
    if (charOver) return;

    onPublishNotice({
      text: text.trim(),
      branch,
      category,
      media: media || null,
      mediaKind,
      linkUrl: linkUrl || null,
      comments: commentAudience,
      collaborators: collaborators.map((k) => users[k]).filter(Boolean),
      time: scheduledAt ? new Date(scheduledAt).toLocaleString() : 'Just now'
    });

    onClose();
  };

  const postDisabled = (!text.trim() && !media) || charOver;

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      className="x-modal li-compose-modal"
      onClose={onClose}
    >
      <div className="modal-dialog-content">
        {/* Identity row */}
        <div className="li-compose-top">
          <div className="li-compose-identity">
            <div className="avatar avatar-lg" style={{ background: currentUser.avatarBg }}>
              <span>{currentUser.avatarChar}</span>
            </div>
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
                {currentUser.role} · {currentUser.department}
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

          <div className="li-pill-wrap">
            <button
              type="button"
              className="li-pill li-pill-button"
              onClick={() => setShowCollaborators((v) => !v)}
              aria-expanded={showCollaborators}
            >
              <IconCollaborate />
              <span>Add collaborators</span>
            </button>
            {showCollaborators && (
              <div className="li-menu li-menu-right" role="menu">
                {Object.entries(users)
                  .filter(([roleKey, u]) => roleKey !== 'student' && roleKey !== currentUser.roleKey)
                  .map(([roleKey, u]) => (
                    <button
                      key={roleKey}
                      type="button"
                      className={`li-menu-item ${collaborators.includes(roleKey) ? 'selected' : ''}`}
                      onClick={() => toggleCollaborator(roleKey)}
                      role="menuitemcheckbox"
                      aria-checked={collaborators.includes(roleKey)}
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
          <textarea
            className="li-compose-textarea"
            placeholder="Share your thoughts ..."
            rows={isArticle ? 10 : 6}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setProofreadMsg('');
            }}
          />

          {media && (
            <div className="li-compose-preview">
              <img src={media} alt="Notice attachment preview" />
              <div className="li-compose-preview-bar">
                <span className="li-compose-preview-label">
                  {mediaKind === 'video'
                    ? 'Video poster attached'
                    : mediaKind === 'document'
                      ? 'Document attached'
                      : 'Image attached'}
                </span>
                <button
                  type="button"
                  className="li-preview-remove"
                  onClick={() => { setMedia(''); setMediaKind(null); }}
                  aria-label="Remove attachment"
                >
                  <IconClose className="li-icon" />
                </button>
              </div>
            </div>
          )}

          {showLinkInput && (
            <div className="li-link-row">
              <input
                type="text"
                className="li-link-input"
                placeholder="Paste a link (e.g. vtu.ac.in)"
                value={linkInput}
                autoFocus
                onChange={(e) => setLinkInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); handleAddLink(); }
                  if (e.key === 'Escape') { e.preventDefault(); setShowLinkInput(false); }
                }}
              />
              <button type="button" className="li-link-add" onClick={handleAddLink}>Add</button>
            </div>
          )}

        {/* Toolbar */}
        <div className="li-compose-toolbar">
          <button
            type="button"
            className="li-proofread-pill"
            onClick={runProofread}
            title="Check spelling & formatting"
          >
            <IconProofread />
            <span>Proofread</span>
          </button>

          <span className={`compose-char-counter ${charOver ? 'over' : charCount > charLimit * 0.8 ? 'warn' : ''}`}>
            {charCount}/{charLimit}
          </span>

          {proofreadMsg && <span className="li-proofread-msg">{proofreadMsg}</span>}

          <div className="li-compose-tools">
            <button
              type="button"
              className="li-tool-btn"
              onClick={attachImage}
              title="Add image"
              aria-label="Add image"
            >
              <IconMedia className="li-icon" />
            </button>
            <button
              type="button"
              className="li-tool-btn"
              onClick={() => setShowLinkInput((v) => !v)}
              title="Add link"
              aria-label="Add link"
            >
              <IconLink />
            </button>
            <button
              type="button"
              className="li-tool-btn"
              onClick={() => {
                setMedia(SAMPLE_NOTICE_IMAGES[Math.floor(Math.random() * SAMPLE_NOTICE_IMAGES.length)]);
                setMediaKind('document');
              }}
              title="Add attachment"
              aria-label="Add attachment"
            >
              <IconPlus />
            </button>
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
            title="Schedule post"
            aria-label="Schedule post"
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
