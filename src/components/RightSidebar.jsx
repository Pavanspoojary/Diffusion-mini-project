import React from 'react';
import { IconSearch, IconClose, CommunityAvatar } from './Icons';
import { BRANCHES } from '../data/initialData';

export default function RightSidebar({
  searchQuery,
  setSearchQuery,
  events,
  onSelectEvent,
  setActiveNav,
  activeBranch,
  setActiveBranch,
  onOpenCommunity,
  joinedCommunities = []
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
              <button
                type="button"
                key={evt.id}
                onClick={() => onSelectEvent(evt)}
                style={{
                  padding: '12px 16px',
                  border: 'none',
                  borderTop: '1px solid var(--border-color)',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  display: 'block',
                  transition: 'background-color 0.15s ease'
                }}
                className="hover-subtle"
                aria-label={`View event details for ${evt.title}`}
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
              </button>
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
              return (
                <button
                  type="button"
                  key={b.id}
                  className={`reddit-community-row ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (onOpenCommunity) {
                      onOpenCommunity(b.id);
                    } else {
                      setActiveBranch(b.id);
                      setActiveNav('announcements');
                    }
                  }}
                  aria-label={`Switch to ${b.slug}`}
                  title={`${b.label} (${b.slug})`}
                >
                  <CommunityAvatar id={b.id} size={36} />
                  <span className="reddit-community-title">{b.slug}</span>
                  {isJoined && <span className="reddit-joined-mark" title="Joined">Joined</span>}
                  {isActive && <span className="reddit-active-dot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Legal & College Footer */}
        <footer style={{ padding: '8px 12px', fontSize: 12, color: 'var(--text-secondary)', lineHeight: '18px' }}>
          <div>SMVITM Bantakal · Dept. of AI&DS</div>
          <div style={{ marginTop: 4 }}>© 2026 Campus Hub</div>
        </footer>
      </div>
    </aside>
  );
}
