import React, { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import AnnouncementFeed from './components/AnnouncementFeed';
import EventsView from './components/EventsView';
import WebsitesView from './components/WebsitesView';
import NotificationsView from './components/NotificationsView';
import ComposeModal from './components/ComposeModal';
import CreateEventModal from './components/CreateEventModal';
import DisplayModal from './components/DisplayModal';
import LightboxModal from './components/LightboxModal';
import QRAttendanceModal from './components/QRAttendanceModal';
import MobileDrawer from './components/MobileDrawer';
import AuthPage from './components/AuthPage';
import Toast from './components/Toast';
import {
  IconAnnouncements,
  IconEvents,
  IconWebsites,
  IconNotifications,
  IconBookmarks
} from './components/Icons';
import {
  USERS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_EVENTS,
  INITIAL_WEBSITES,
  INITIAL_NOTIFICATIONS
} from './data/initialData';

export default function App() {
  // Theme & Styling
  const [theme, setTheme] = useState(() => localStorage.getItem('college_hub_theme') || 'dark');
  const [color, setColor] = useState(() => localStorage.getItem('college_hub_color') || 'blue');

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('college_hub_auth') === 'true';
  });

  const [activeUser, setActiveUser] = useState(() => {
    try {
      const saved = localStorage.getItem('college_hub_user_profile');
      if (saved && (saved.includes('Diffusion') || saved.includes('Tejaswini') || saved.includes('Poojary'))) {
        localStorage.removeItem('college_hub_user_profile');
        return USERS.student;
      }
      return saved ? JSON.parse(saved) : USERS.student;
    } catch {
      return USERS.student;
    }
  });

  // Active User / Role (Student, Faculty, Coordinator, Admin)
  const [currentRoleKey, setCurrentRoleKey] = useState('student');
  const currentUser = activeUser || USERS[currentRoleKey] || USERS.student;

  // Sidebar Hideable & Mobile Drawer State
  const [isSidebarHidden, setIsSidebarHidden] = useState(() => {
    return localStorage.getItem('college_hub_sidebar_hidden') === 'true';
  });
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Navigation & Filtering
  const [activeNav, setActiveNav] = useState('announcements'); // announcements | events | websites | notifications | bookmarks
  const [activeBranch, setActiveBranch] = useState('ALL');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Joined communities (like Reddit's Join button)
  const [joinedCommunities, setJoinedCommunities] = useState(() => {
    try {
      const saved = localStorage.getItem('college_hub_joined_communities');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Core Data Collections
  const [announcements, setAnnouncements] = useState(() => {
    try {
      localStorage.removeItem('college_hub_notices_v1');
      const saved = localStorage.getItem('college_hub_notices_v2');
      if (saved) {
        if (!saved.includes('Diffusion') && !saved.includes('Tejaswini')) {
          return JSON.parse(saved);
        }
      }
      return INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const [events, setEvents] = useState(() => {
    try {
      localStorage.removeItem('college_hub_events_v1');
      const saved = localStorage.getItem('college_hub_events_v2');
      if (saved) {
        if (!saved.includes('Diffusion') && !saved.includes('Tejaswini')) {
          return JSON.parse(saved);
        }
      }
      return INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [websites, setWebsites] = useState(() => {
    try {
      const saved = localStorage.getItem('college_hub_websites_v1');
      return saved ? JSON.parse(saved) : INITIAL_WEBSITES;
    } catch {
      return INITIAL_WEBSITES;
    }
  });

  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem('college_hub_notifs_v1');
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  // Modal States
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeIntent, setComposeIntent] = useState({ mode: 'text' });
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [qrModal, setQrModal] = useState({ isOpen: false, event: null, mode: 'student' });
  const [toastMessage, setToastMessage] = useState('');

  // Persist Theme & Color
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('college_hub_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', color);
    localStorage.setItem('college_hub_color', color);
  }, [color]);

  // Persist Data
  useEffect(() => {
    try {
      localStorage.setItem('college_hub_notices_v2', JSON.stringify(announcements));
    } catch {}
  }, [announcements]);

  useEffect(() => {
    try {
      localStorage.setItem('college_hub_events_v2', JSON.stringify(events));
    } catch {}
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem('college_hub_websites_v1', JSON.stringify(websites));
    } catch {}
  }, [websites]);

  // Persist Sidebar State
  useEffect(() => {
    localStorage.setItem('college_hub_sidebar_hidden', isSidebarHidden);
  }, [isSidebarHidden]);

  // Persist Joined Communities
  useEffect(() => {
    try {
      localStorage.setItem('college_hub_joined_communities', JSON.stringify(joinedCommunities));
    } catch {}
  }, [joinedCommunities]);

  const handleToggleSidebar = (forceDrawer) => {
    if (forceDrawer === true || (typeof window !== 'undefined' && window.innerWidth <= 768)) {
      setIsMobileDrawerOpen((prev) => !prev);
      return;
    }
    setIsSidebarHidden((prev) => {
      const next = !prev;
      showToast(next ? 'Side navigation hidden (Press [ to restore)' : 'Side navigation visible');
      return next;
    });
  };

  // Keyboard shortcut listener ('[' to toggle sidebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === '[') {
        e.preventDefault();
        handleToggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Register PWA service worker
  useEffect(() => {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('/service-worker.js').catch((err) => {
        console.info('Service Worker registration skipped:', err);
      });
    }
  }, []);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  // --- Handlers ---
  const handleLike = (id) => {
    setAnnouncements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const isLiked = !item.isLiked;
          return {
            ...item,
            isLiked,
            likes: (item.likes || 0) + (isLiked ? 1 : -1)
          };
        }
        return item;
      })
    );
  };

  const handleBookmark = (id) => {
    setAnnouncements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const isBookmarked = !item.isBookmarked;
          showToast(isBookmarked ? 'Notice saved to Bookmarks' : 'Removed from Bookmarks');
          return { ...item, isBookmarked };
        }
        return item;
      })
    );
  };

  const handleShare = (item) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#notice-${item.id}`)
        .then(() => showToast('Notice link copied to clipboard'))
        .catch(() => showToast('Notice link ready'));
    } else {
      showToast('Notice link ready to share');
    }
  };

  const handlePublishNotice = (noticeData) => {
    const newNotice = {
      id: `post-${Date.now()}`,
      author: currentUser.name,
      authorRole: currentUser.role,
      handle: currentUser.handle,
      department: currentUser.department,
      verified: currentUser.verified,
      verifiedType: currentUser.verifiedType,
      avatarChar: currentUser.avatarChar,
      avatarBg: currentUser.avatarBg,
      branch: noticeData.branch,
      category: noticeData.category,
      time: noticeData.time || 'Just now',
      timestamp: Date.now(),
      text: noticeData.text,
      media: noticeData.media,
      mediaKind: noticeData.mediaKind || null,
      linkUrl: noticeData.linkUrl || null,
      linkLabel: noticeData.linkUrl ? 'Link' : null,
      comments: noticeData.comments || 'Anyone',
      collaborators: noticeData.collaborators || [],
      replies: 0,
      reposts: 0,
      likes: 0,
      views: '1',
      isLiked: false,
      isBookmarked: false
    };

    setAnnouncements([newNotice, ...announcements]);
    showToast('Notice published successfully');

    // Add in-app notification
    setNotifications([
      {
        id: `notif-${Date.now()}`,
        type: 'notice',
        title: `New Notice for ${noticeData.branch === 'ALL' ? 'All Branches' : noticeData.branch}`,
        body: `${currentUser.name} (${currentUser.role}) published: ${noticeData.text.slice(0, 60)}...`,
        time: 'Just now',
        unread: true
      },
      ...notifications
    ]);
  };

  const handleRegisterEvent = (eventId) => {
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const isRegistered = !evt.isRegistered;
          showToast(isRegistered ? 'Registered for event' : 'Registration cancelled');
          return {
            ...evt,
            isRegistered,
            registeredCount: evt.registeredCount + (isRegistered ? 1 : -1)
          };
        }
        return evt;
      })
    );
  };

  const handleRecordAttendance = (eventId, record) => {
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const currentLogs = evt.attendance || [];
          const existingIndex = currentLogs.findIndex((a) => a.usn === record.usn);
          let updatedLogs = [...currentLogs];

          if (existingIndex >= 0) {
            updatedLogs[existingIndex] = {
              ...updatedLogs[existingIndex],
              ...record
            };
          } else {
            updatedLogs.push(record);
          }

          return {
            ...evt,
            attendance: updatedLogs
          };
        }
        return evt;
      })
    );

    showToast(`Attendance verified for ${record.name} (${record.usn})`);

    // In-app notification for student
    setNotifications([
      {
        id: `notif-${Date.now()}`,
        type: 'attendance',
        title: 'Attendance Confirmed',
        body: `${record.status} recorded for ${record.name} at ${record.checkIn || record.checkOut}`,
        time: 'Just now',
        unread: true
      },
      ...notifications
    ]);
  };

  const handleCreateEvent = (eventData) => {
    const newEvent = {
      id: `evt-${Date.now()}`,
      ...eventData,
      registeredCount: 0,
      maxCapacity: 150,
      isRegistered: false,
      qrPayload: `EVENT_${Date.now()}`,
      attendance: []
    };

    setEvents([newEvent, ...events]);
    showToast('New event published');
  };

  const handleAddWebsite = (websiteData) => {
    const newWeb = {
      id: `web-${Date.now()}`,
      ...websiteData
    };

    setWebsites([newWeb, ...websites]);
    showToast('Website added to directory');
  };

  // Persist Auth
  useEffect(() => {
    localStorage.setItem('college_hub_auth', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    try {
      localStorage.setItem('college_hub_user_profile', JSON.stringify(activeUser));
    } catch {}
  }, [activeUser]);

  const handleLogin = (user) => {
    setActiveUser(user);
    setCurrentRoleKey(user.roleKey || 'student');
    setIsAuthenticated(true);
    showToast(`Welcome back, ${user.name}!`);
  };

  const handleSignup = (newUser) => {
    setActiveUser(newUser);
    setCurrentRoleKey(newUser.roleKey || 'student');
    setIsAuthenticated(true);
    showToast(`Account created! Welcome, ${newUser.name}.`);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    showToast('Signed out of campus account');
  };

  const handleSwitchUser = (roleKey) => {
    setCurrentRoleKey(roleKey);
    const u = USERS[roleKey];
    setActiveUser(u);
    showToast(`Switched active role: ${u.role} (${u.name})`);
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('All notifications marked as read');
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const openCompose = (intent) => {
    setComposeIntent(intent || { mode: 'text' });
    setIsComposeOpen(true);
  };

  // Open a community page (Reddit style): only that community's posts
  const openCommunity = (branchId) => {
    setActiveBranch(branchId);
    setActiveNav('announcements');
    requestAnimationFrame(() => {
      const timeline = document.querySelector('.timeline-container');
      if (timeline) timeline.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  const handleToggleJoin = (branchId) => {
    setJoinedCommunities((prev) => {
      const isJoined = prev.includes(branchId);
      showToast(isJoined
        ? `Left ${branchId === 'ALL' ? 's/all' : `s/${branchId}`}`
        : `Joined ${branchId === 'ALL' ? 's/all' : `s/${branchId}`}`);
      return isJoined ? prev.filter((b) => b !== branchId) : [...prev, branchId];
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-root">
        <AuthPage
          onLogin={handleLogin}
          onSignup={handleSignup}
          users={USERS}
        />
        <Toast message={toastMessage} />
      </div>
    );
  }

  return (
    <div className="app-layout">
      {/* LEFT SIDEBAR (Desktop & Medium screens) */}
      <LeftSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        currentUser={currentUser}
        onSwitchUser={handleSwitchUser}
        users={USERS}
        onOpenCompose={() => {
          if (currentUser.roleKey === 'coordinator') {
            setIsCreateEventOpen(true);
          } else {
            openCompose();
          }
        }}
        onOpenDisplay={() => setIsDisplayOpen(true)}
        unreadCount={unreadCount}
        isSidebarHidden={isSidebarHidden}
        onToggleSidebar={handleToggleSidebar}
        onLogout={handleLogout}
      />

      {/* CENTER TIMELINE FEED */}
      <main className="timeline-container" role="main">
        {activeNav === 'announcements' && (
          <AnnouncementFeed
            announcements={announcements}
            onLike={handleLike}
            onBookmark={handleBookmark}
            onShare={handleShare}
            onOpenImage={(img) => setLightboxImg(img)}
            currentUser={currentUser}
            onOpenCompose={openCompose}
            activeBranch={activeBranch}
            setActiveBranch={setActiveBranch}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
            joinedCommunities={joinedCommunities}
            onToggleJoin={handleToggleJoin}
            onOpenCommunity={openCommunity}
          />
        )}

        {activeNav === 'events' && (
          <EventsView
            events={events}
            currentUser={currentUser}
            onRegisterEvent={handleRegisterEvent}
            onOpenQRScanner={(evt) => setQrModal({ isOpen: true, event: evt, mode: 'student' })}
            onOpenQRGenerator={(evt) => setQrModal({ isOpen: true, event: evt, mode: 'coordinator' })}
            onOpenCreateEvent={() => setIsCreateEventOpen(true)}
            onOpenImage={(img) => setLightboxImg(img)}
            searchQuery={searchQuery}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
          />
        )}

        {activeNav === 'websites' && (
          <WebsitesView
            websites={websites}
            currentUser={currentUser}
            onAddWebsite={handleAddWebsite}
            searchQuery={searchQuery}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
          />
        )}

        {activeNav === 'notifications' && (
          <NotificationsView
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
          />
        )}

        {activeNav === 'bookmarks' && (
          <AnnouncementFeed
            announcements={announcements.filter((a) => a.isBookmarked)}
            onLike={handleLike}
            onBookmark={handleBookmark}
            onShare={handleShare}
            onOpenImage={(img) => setLightboxImg(img)}
            currentUser={currentUser}
            onOpenCompose={openCompose}
            activeBranch="ALL"
            setActiveBranch={() => {}}
            activeCategory="All"
            setActiveCategory={() => {}}
            searchQuery={searchQuery}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
            joinedCommunities={joinedCommunities}
            onToggleJoin={handleToggleJoin}
            onOpenCommunity={openCommunity}
          />
        )}
      </main>

      {/* RIGHT WIDGETS COLUMN */}
      <RightSidebar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        events={events}
        onSelectEvent={(evt) => {
          setActiveNav('events');
          if (currentUser.roleKey === 'student') {
            setQrModal({ isOpen: true, event: evt, mode: 'student' });
          } else {
            setQrModal({ isOpen: true, event: evt, mode: 'coordinator' });
          }
        }}
        setActiveNav={setActiveNav}
        activeBranch={activeBranch}
        setActiveBranch={setActiveBranch}
        onOpenCommunity={openCommunity}
        joinedCommunities={joinedCommunities}
      />

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        <button
          type="button"
          className={`mobile-nav-item ${activeNav === 'announcements' ? 'active' : ''}`}
          onClick={() => setActiveNav('announcements')}
          aria-label="Notices"
        >
          <IconAnnouncements className="mobile-nav-icon" />
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${activeNav === 'events' ? 'active' : ''}`}
          onClick={() => setActiveNav('events')}
          aria-label="Events"
        >
          <IconEvents className="mobile-nav-icon" />
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${activeNav === 'websites' ? 'active' : ''}`}
          onClick={() => setActiveNav('websites')}
          aria-label="Websites"
        >
          <IconWebsites className="mobile-nav-icon" />
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${activeNav === 'bookmarks' ? 'active' : ''}`}
          onClick={() => setActiveNav('bookmarks')}
          aria-label="Bookmarks"
        >
          <IconBookmarks className="mobile-nav-icon" />
        </button>

        <button
          type="button"
          className={`mobile-nav-item ${activeNav === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveNav('notifications')}
          aria-label="Notifications"
        >
          <div style={{ position: 'relative' }}>
            <IconNotifications className="mobile-nav-icon" />
            {unreadCount > 0 && <span className="badge-dot" style={{ top: -2, right: -2 }} />}
          </div>
        </button>
      </nav>

      {/* MOBILE FLOATING ACTION BUTTON (POST) */}
      <button
        type="button"
        className="mobile-fab-btn"
        onClick={() => {
          if (currentUser.roleKey === 'coordinator') {
            setIsCreateEventOpen(true);
          } else {
            openCompose();
          }
        }}
        aria-label="Create item"
      >
        <span style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>+</span>
      </button>

      {/* MODALS & DIALOGS */}
      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        currentUser={currentUser}
        onPublishNotice={handlePublishNotice}
        intent={composeIntent}
        users={USERS}
        onSwitchUser={handleSwitchUser}
      />

      <CreateEventModal
        isOpen={isCreateEventOpen}
        onClose={() => setIsCreateEventOpen(false)}
        currentUser={currentUser}
        onCreateEvent={handleCreateEvent}
      />

      <DisplayModal
        isOpen={isDisplayOpen}
        onClose={() => setIsDisplayOpen(false)}
        theme={theme}
        setTheme={setTheme}
        color={color}
        setColor={setColor}
      />

      <LightboxModal
        isOpen={!!lightboxImg}
        onClose={() => setLightboxImg(null)}
        imageUrl={lightboxImg}
      />

      <QRAttendanceModal
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({ isOpen: false, event: null, mode: 'student' })}
        event={qrModal.event}
        currentUser={currentUser}
        mode={qrModal.mode}
        onRecordAttendance={handleRecordAttendance}
      />

      {/* MOBILE ACCOUNT DRAWER */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentUser={currentUser}
        users={USERS}
        onSwitchUser={handleSwitchUser}
        onOpenDisplay={() => setIsDisplayOpen(true)}
        onSelectNav={(nav) => {
          setActiveNav(nav);
          setIsMobileDrawerOpen(false);
        }}
        activeBranch={activeBranch}
        onOpenCommunity={openCommunity}
        onLogout={handleLogout}
      />

      {/* FLOATING TOAST NOTIFICATION */}
      <Toast message={toastMessage} />
    </div>
  );
}
