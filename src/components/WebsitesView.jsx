import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  IconPrinter,
  IconDatabase,
  IconExternal,
  IconBook,
  IconUsers,
  IconBriefcase,
  IconSidebarToggle,
  IconSearch,
  IconClose,
  IconTag,
  IconChevronDown,
  IconCheck,
  IconCopy,
  IconNotifications,
  VerifiedBadge
} from './Icons';

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
        className={`feed-filter-btn ${value !== 'All' ? 'highlighted' : ''}`}
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

function getCategoryColor(category) {
  switch (category) {
    case 'Academic':
      return { bg: 'rgba(255, 112, 67, 0.14)', border: 'rgba(255, 112, 67, 0.4)', color: '#ff7043' };
    case 'Student Utilities':
      return { bg: 'rgba(0, 186, 124, 0.12)', border: 'rgba(0, 186, 124, 0.3)', color: '#00ba7c' };
    case 'University':
      return { bg: 'rgba(120, 86, 255, 0.12)', border: 'rgba(120, 86, 255, 0.3)', color: '#7856ff' };
    case 'Volunteering':
      return { bg: 'rgba(249, 24, 128, 0.12)', border: 'rgba(249, 24, 128, 0.3)', color: '#f91880' };
    case 'Career':
      return { bg: 'rgba(255, 212, 0, 0.12)', border: 'rgba(255, 212, 0, 0.3)', color: '#ffd400' };
    default:
      return { bg: 'rgba(148, 163, 184, 0.14)', border: 'rgba(148, 163, 184, 0.35)', color: '#94a3b8' };
  }
}

export default function WebsitesView({
  websites,
  currentUser,
  onAddWebsite,
  searchQuery: globalSearchQuery = '',
  isSidebarHidden,
  onToggleSidebar,
  unreadCount = 0,
  onOpenNotifications,
  isHeaderHidden = false
}) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [localSearch, setLocalSearch] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state
  const [newSiteName, setNewSiteName] = useState('');
  const [newSiteDesc, setNewSiteDesc] = useState('');
  const [newSiteUrl, setNewSiteUrl] = useState('');
  const [newSiteCat, setNewSiteCat] = useState('Academic');
  const [newSiteIcon, setNewSiteIcon] = useState('external');

  const categories = ['All', 'Student Utilities', 'Academic', 'University', 'Volunteering', 'Career'];

  const getSiteIcon = (type) => {
    switch (type) {
      case 'printer': return <IconPrinter style={{ width: 22, height: 22 }} />;
      case 'database': return <IconDatabase style={{ width: 22, height: 22 }} />;
      case 'book': return <IconBook style={{ width: 22, height: 22 }} />;
      case 'users': return <IconUsers style={{ width: 22, height: 22 }} />;
      case 'briefcase': return <IconBriefcase style={{ width: 22, height: 22 }} />;
      default: return <IconExternal style={{ width: 22, height: 22 }} />;
    }
  };

  const activeSearch = localSearch.trim() || globalSearchQuery.trim();

  const filteredWebsites = useMemo(() => {
    return websites.filter((site) => {
      if (selectedCat !== 'All' && site.category !== selectedCat) return false;
      if (activeSearch) {
        const q = activeSearch.toLowerCase();
        const matchName = site.name.toLowerCase().includes(q);
        const matchDesc = site.description.toLowerCase().includes(q);
        const matchCat = site.category.toLowerCase().includes(q);
        const matchUrl = site.url.toLowerCase().includes(q);
        return matchName || matchDesc || matchCat || matchUrl;
      }
      return true;
    });
  }, [websites, selectedCat, activeSearch]);

  const handleCopy = (site) => {
    try {
      navigator.clipboard.writeText(site.url);
      setCopiedId(site.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const handleCreateWebsite = (e) => {
    e.preventDefault();
    if (currentUser.roleKey === 'student') return;
    if (!newSiteName.trim() || !newSiteUrl.trim()) return;

    onAddWebsite({
      name: newSiteName.trim(),
      description: newSiteDesc.trim(),
      url: newSiteUrl.trim(),
      category: newSiteCat,
      badge: `${newSiteCat} Portal`,
      iconType: newSiteIcon
    });

    setNewSiteName('');
    setNewSiteDesc('');
    setNewSiteUrl('');
    setShowAddForm(false);
  };

  const getHostname = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname : '');
    } catch {
      return url.replace(/^https?:\/\//, '');
    }
  };

  return (
    <div>
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
              <h1 className="header-main-title">College Websites & Services</h1>
              <span className="header-sub-title">Centralized directory of verified institutional resources</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
            {currentUser.roleKey !== 'student' && (
              <button
                type="button"
                className="btn-primary-post"
                onClick={() => setShowAddForm(!showAddForm)}
                style={{ fontSize: 13, padding: '6px 14px' }}
              >
                {showAddForm ? 'Cancel' : '+ Add Portal'}
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="web-filter-bar">
          <div className="web-search-box">
            <IconSearch className="web-search-icon" />
            <input
              type="text"
              className="web-search-input"
              placeholder="Filter portals, ERP, library..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            {localSearch && (
              <button
                type="button"
                className="web-search-clear"
                onClick={() => setLocalSearch('')}
                aria-label="Clear search"
              >
                <IconClose />
              </button>
            )}
          </div>

          <div className="web-filter-actions">
            <FilterDropdown
              label="Category"
              value={selectedCat}
              options={categories}
              onChange={setSelectedCat}
              icon={IconTag}
            />

            {selectedCat !== 'All' && (
              <button
                type="button"
                className="feed-filter-clear-btn"
                onClick={() => setSelectedCat('All')}
                title="Reset category"
              >
                Clear
              </button>
            )}

            <span className="web-portal-count">
              {filteredWebsites.length} {filteredWebsites.length === 1 ? 'portal' : 'portals'}
            </span>
          </div>
        </div>
      </div>

      {/* Admin Add Portal Drawer/Card */}
      {showAddForm && (
        <section className="web-add-panel" aria-label="Add new website">
          <div className="web-add-header">
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>Add Verified Institutional Portal</h3>
            <button
              type="button"
              className="sidebar-hide-btn"
              onClick={() => setShowAddForm(false)}
              aria-label="Close form"
            >
              <IconClose />
            </button>
          </div>
          <form onSubmit={handleCreateWebsite} className="web-add-form">
            <div className="web-form-row">
              <input
                type="text"
                placeholder="Portal Name (e.g. Campus Printing Service)"
                value={newSiteName}
                onChange={(e) => setNewSiteName(e.target.value)}
                required
                className="web-form-input"
              />
              <input
                type="url"
                placeholder="URL (https://smvitm.ac.in/...)"
                value={newSiteUrl}
                onChange={(e) => setNewSiteUrl(e.target.value)}
                required
                className="web-form-input"
              />
            </div>
            <textarea
              placeholder="Short Description of institutional service or gateway"
              value={newSiteDesc}
              onChange={(e) => setNewSiteDesc(e.target.value)}
              rows={2}
              className="web-form-input"
              style={{ resize: 'none' }}
            />
            <div className="web-form-footer">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <select
                  className="web-form-select"
                  value={newSiteCat}
                  onChange={(e) => setNewSiteCat(e.target.value)}
                >
                  {categories.filter((c) => c !== 'All').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <select
                  className="web-form-select"
                  value={newSiteIcon}
                  onChange={(e) => setNewSiteIcon(e.target.value)}
                >
                  <option value="external">External Link Icon</option>
                  <option value="database">ERP / Database Icon</option>
                  <option value="book">Library / Book Icon</option>
                  <option value="printer">Printer Icon</option>
                  <option value="briefcase">Placement / Career Icon</option>
                  <option value="users">Community / NSS Icon</option>
                </select>
              </div>

              <button type="submit" className="btn-primary-post">Save Portal</button>
            </div>
          </form>
        </section>
      )}

      {/* Directory Stream Cards */}
      <section className="websites-list" aria-label="Websites Directory">
        {filteredWebsites.length === 0 ? (
          <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
              No portals match your criteria
            </h3>
            <p style={{ fontSize: 14 }}>
              Try clearing your search keyword or switching the category filter back to "All".
            </p>
          </div>
        ) : (
          filteredWebsites.map((site) => {
            const colors = getCategoryColor(site.category);
            const isCopied = copiedId === site.id;
            const hostname = getHostname(site.url);

            return (
              <article key={site.id} className="web-card">
                <div className="web-card-top">
                  {/* Category Branded Icon */}
                  <div
                    className="web-card-icon"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.color,
                      borderColor: colors.border
                    }}
                  >
                    {getSiteIcon(site.iconType)}
                  </div>

                  {/* Main Information */}
                  <div className="web-card-info">
                    <div className="web-card-name-row">
                      <h2 className="web-card-title">{site.name}</h2>
                      <VerifiedBadge type="official" />
                      <span
                        className="web-card-category-badge"
                        style={{
                          color: colors.color,
                          backgroundColor: colors.bg,
                          borderColor: colors.border
                        }}
                      >
                        {site.badge || site.category}
                      </span>
                    </div>

                    <p className="web-card-description">{site.description}</p>

                    <div className="web-card-domain">
                      <span className="web-domain-chip">{hostname}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="web-card-actions">
                  <button
                    type="button"
                    className={`web-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(site)}
                    title="Copy URL"
                  >
                    {isCopied ? (
                      <>
                        <IconCheck style={{ width: 15, height: 15 }} />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <IconCopy style={{ width: 15, height: 15 }} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="web-launch-btn"
                  >
                    <span>Visit Portal</span>
                    <IconExternal style={{ width: 14, height: 14 }} />
                  </a>
                </div>
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}
