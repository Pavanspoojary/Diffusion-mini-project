import React from 'react';
import { IconSearch, IconClose, CommunityAvatar } from './Icons';
import { BRANCHES } from '../data/initialData';
import { canAccessCommunity } from '../utils/collegeAuth';

export default function RightSidebar({
  searchQuery,
  setSearchQuery,
  events,
  onSelectEvent,
  setActiveNav,
  activeBranch,
  setActiveBranch,
  onOpenCommunity,
  joinedCommunities = [],
  currentUser
}) {
  const upcomingEvents = events.slice(0, 3);

  return (
    <aside className="sidebar-right" role="complementary">
      <div className="sidebar-right-inner">
        {/* Search Bar */}
        <div className="search-input-box">
          <IconSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search notices, events, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <IconClose />
            </button>
          )}
        </div>

        {/* Upcoming Events Card */}
        <div className="widget-card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="widget-title">Upcoming Events</h2>
            <button
              type="button"
              onClick={() => setActiveNav('events')}
              style={{ fontSize: 13, color: 'var(--accent-color)', fontWeight: 600 }}
            >
              View all
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                onClick={() => onSelectEvent(evt)}
                style={{
                  padding: '12px 16px',
                  borderTop: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                className="hover-subtle"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                  <span style={{ fontSize: 12, color: 'var(--accent-color)', fontWeight: 700 }}>
                    {evt.type === 'internal' ? 'Internal Event' : 'External'}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{evt.date}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 2 }}>
                  {evt.title}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                  Venue: {evt.venue}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reddit-style Branch Communities List Card (Exact Image Match) */}
        <div className="widget-card reddit-sub-card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 12px 6px 12px' }}>
            <h2 className="widget-title" style={{ fontSize: 17 }}>Communities</h2>
            {activeBranch !== 'ALL' && (
              <button
                type="button"
                onClick={() => {
                  setActiveBranch('ALL');
                  setActiveNav('announcements');
                }}
                style={{ fontSize: 12, color: 'var(--accent-color)', fontWeight: 600, cursor: 'pointer' }}
              >
                Clear filter
              </button>
            )}
          </div>

          <div className="reddit-feed-list">
            {BRANCHES.map((b) => {
              const isActive = activeBranch === b.id;
              const isJoined = joinedCommunities.includes(b.id);
              const hasAccess = canAccessCommunity(currentUser, b.id);
              return (
                <div
                  key={b.id}
                  className={`reddit-community-row ${isActive ? 'active' : ''}`}
                  style={!hasAccess ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
                  onClick={() => {
                    if (onOpenCommunity) {
                      onOpenCommunity(b.id);
                    } else if (hasAccess) {
                      setActiveBranch(b.id);
                      setActiveNav('announcements');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={hasAccess ? `Switch to ${b.slug}` : `${b.slug} (Restricted)`}
                  title={hasAccess ? `${b.label} (${b.slug})` : `${b.label} — Restricted to ${b.id} students`}
                >
                  <CommunityAvatar id={b.id} size={36} />
                  <span className="reddit-community-title">{b.slug}</span>
                  {!hasAccess ? (
                    <span style={{ fontSize: 11, color: 'var(--text-secondary)', marginLeft: 'auto' }}>Locked</span>
                  ) : (
                    isJoined && <span className="reddit-joined-mark" title="Joined">Joined</span>
                  )}
                  {isActive && <span className="reddit-active-dot" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal & College Footer */}
        <footer style={{ padding: '8px 12px', fontSize: 12, color: 'var(--text-secondary)', lineHeight: '18px' }}>
          <div>Campus Hub · SMVITM Bantakal</div>
          <div>Department of Artificial Intelligence and Data Science</div>
          <div style={{ marginTop: 4 }}>© 2026 Campus Hub / X. All rights reserved.</div>
        </footer>
      </div>
    </aside>
  );
}
