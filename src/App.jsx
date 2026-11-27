// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState, useEffect, useRef } from 'react';
import { useAuth, useUser, useClerk } from '@clerk/react';
import { parseCollegeEmail, canAccessCommunity } from './utils/collegeAuth';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import AnnouncementFeed from './components/AnnouncementFeed';
import EventsView from './components/EventsView';
import WebsitesView from './components/WebsitesView';
import ProfileView from './components/ProfileView';
import FacultyDirectoryView from './components/FacultyDirectoryView';
import NotificationsView from './components/NotificationsView';
import BookmarksView from './components/BookmarksView';
import ComposeModal from './components/ComposeModal';
import CreateEventModal from './components/CreateEventModal';
import DisplayModal from './components/DisplayModal';
import LightboxModal from './components/LightboxModal';
import QRAttendanceModal from './components/QRAttendanceModal';
import AuthPage from './components/AuthPage';
import Toast from './components/Toast';
import {
  IconAnnouncements,
  IconEvents,
  IconWebsites,
  IconNotifications,
  IconBookmarks,
  IconProfile
} from './components/Icons';
import {
  USERS,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_EVENTS,
  INITIAL_WEBSITES,
  INITIAL_NOTIFICATIONS,
  INITIAL_LECTURERS
} from './data/initialData';
import {
  fetchAnnouncements,
  createAnnouncement,
  deleteAnnouncementFromDB,
  toggleNoticeLike,
  toggleNoticeBookmark,
  clearAllNoticeBookmarks,
  toggleNoticePin,
  fetchEvents,
  createEvent,
  deleteEventFromDB,
  toggleEventRegistration,
  recordAttendanceInDB,
  fetchWebsites,
  createWebsite,
  fetchNotifications,
  createNotification,
  markAllNotificationsReadInDB,
  subscribeToTable,
  fetchLecturers,
  upsertLecturerProfile,
  loadLocalLecturers,
  saveLocalLecturers,
  findLecturerProfile
} from './services/dbService';

const getRouteNav = () => {
  if (typeof window === 'undefined') return 'announcements';
  const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (path === 'events' || path === 'event' || hash === 'events' || hash === 'event') return 'events';
  if (path === 'websites' || path === 'portals' || hash === 'websites') return 'websites';
  if (path === 'bookmarks' || hash === 'bookmarks') return 'bookmarks';
  if (path === 'notifications' || hash === 'notifications') return 'notifications';
  return 'announcements';
};

export default function App({ isClerkConfigured = false }) {
  // Theme & Styling
  const [theme, setTheme] = useState(() => localStorage.getItem('college_hub_theme') || 'dark');
  const [color, setColor] = useState(() => localStorage.getItem('college_hub_color') || 'blue');

  // Authentication State
  const isClerkEnabled = Boolean(
    isClerkConfigured ||
    (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && import.meta.env.VITE_CLERK_PUBLISHABLE_KEY.trim() !== '')
  );

  const { isLoaded, isSignedIn } = useAuth();
  const { user: clerkUser } = useUser();
  const { signOut } = useClerk();
  const redirectedClerkUserRef = useRef(null);

  const [clerkTimedOut, setClerkTimedOut] = useState(!isClerkEnabled);

  useEffect(() => {
    if (!isClerkEnabled) {
      setClerkTimedOut(true);
      return;
    }
    if (isLoaded) return;
    const timer = setTimeout(() => {
      setClerkTimedOut(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isClerkEnabled, isLoaded]);

  const clerkEmail =
    clerkUser?.primaryEmailAddress?.emailAddress ||
    clerkUser?.emailAddresses?.[0]?.emailAddress ||
    '';
  const collegeAccess = isClerkEnabled && isSignedIn && clerkUser ? parseCollegeEmail(clerkEmail) : null;

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

  // Lecturer Profiles State
  const [lecturers, setLecturers] = useState(() => loadLocalLecturers());
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  const baseUser = activeUser || USERS[currentRoleKey] || USERS.student;
  const matchedActiveLecturer =
    baseUser.roleKey === 'faculty'
      ? findLecturerProfile(lecturers, {
          lecturerId: baseUser.lecturerId,
          id: baseUser.id,
          handle: baseUser.handle,
          name: baseUser.name
        })
      : null;

  const currentUser = matchedActiveLecturer
    ? {
        ...baseUser,
        lecturerId: matchedActiveLecturer.id,
        name: matchedActiveLecturer.name,
        branch: matchedActiveLecturer.branch,
        department: matchedActiveLecturer.department,
        avatarChar: matchedActiveLecturer.avatarChar,
        avatarBg: matchedActiveLecturer.avatarBg,
        photoUrl: matchedActiveLecturer.photoUrl || null
      }
    : baseUser;

  // Sidebar Hideable & Mobile Drawer State
  const [isSidebarHidden, setIsSidebarHidden] = useState(() => {
    return localStorage.getItem('college_hub_sidebar_hidden') === 'true';
  });
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Navigation & Filtering (supports direct URL routing: /events, /websites, /bookmarks, /notifications)
  const [activeNav, setActiveNav] = useState(getRouteNav); // announcements | events | websites | notifications | bookmarks
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
      localStorage.removeItem('college_hub_notices_v2');
      const savedV4 = localStorage.getItem('college_hub_notices_v4');
      if (savedV4) return JSON.parse(savedV4);
      const saved = localStorage.getItem('college_hub_notices_v3');
      if (saved && saved.includes('algorhythm')) {
        return JSON.parse(saved);
      }
      return INITIAL_ANNOUNCEMENTS;
    } catch {
      return INITIAL_ANNOUNCEMENTS;
    }
  });

  const INTERNAL_GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor';

  const [events, setEvents] = useState(() => {
    try {
      localStorage.removeItem('college_hub_events_v1');
      localStorage.removeItem('college_hub_events_v2');
      localStorage.removeItem('college_hub_events_v3');
      localStorage.removeItem('college_hub_events_v4');
      localStorage.removeItem('college_hub_events_v5');
      localStorage.removeItem('college_hub_events_v6');
      localStorage.removeItem('college_hub_events_v7');
      const savedV8 = localStorage.getItem('college_hub_events_v8');
      if (savedV8) {
        const parsed = JSON.parse(savedV8);
        return parsed.map((e) => ({
          ...e,
          link: e.type === 'internal' ? INTERNAL_GOOGLE_FORM_URL : e.link
        }));
      }
      return INITIAL_EVENTS.map((e) => ({
        ...e,
        link: e.type === 'internal' ? INTERNAL_GOOGLE_FORM_URL : e.link
      }));
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [websites, setWebsites] = useState(() => {
    try {
      localStorage.removeItem('college_hub_websites_v8');
      localStorage.removeItem('college_hub_websites_v9');
      const saved = localStorage.getItem('college_hub_websites_v10');
      if (saved) {
        const parsed = JSON.parse(saved);
        const map = new Map();
        INITIAL_WEBSITES.forEach((w) => map.set(w.id, w));
        parsed.forEach((w) => {
          if (w && w.id) map.set(w.id, { ...map.get(w.id), ...w });
        });
        return Array.from(map.values());
      }
      return INITIAL_WEBSITES;
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

  // Initial Data Sync & Realtime Listeners with Supabase
  useEffect(() => {
    let isMounted = true;

    async function loadBackendData() {
      try {
        const [noticesData, eventsData, websitesData, notifsData, lecturersData] = await Promise.all([
          fetchAnnouncements(currentUser.id),
          fetchEvents(currentUser.id),
          fetchWebsites(),
          fetchNotifications(currentUser.id),
          fetchLecturers()
        ]);

        if (isMounted) {
          if (noticesData) setAnnouncements(noticesData);
          if (eventsData) setEvents(eventsData);
          if (websitesData) {
            const map = new Map();
            INITIAL_WEBSITES.forEach((w) => map.set(w.id, w));
            websitesData.forEach((w) => {
              if (w && w.id) map.set(w.id, { ...map.get(w.id), ...w });
            });
            setWebsites(Array.from(map.values()));
          }
          if (notifsData) setNotifications(notifsData);
          if (lecturersData && lecturersData.length > 0) setLecturers(lecturersData);
        }
      } catch (err) {
        console.info('[Supabase:initSync fallback]', err.message);
      }
    }

    loadBackendData();

    // Realtime channel subscriptions
    const unsubNotices = subscribeToTable('announcements', () => {
      fetchAnnouncements(currentUser.id).then((data) => {
        if (isMounted && data) setAnnouncements(data);
      });
    });

    const unsubEvents = subscribeToTable('events', () => {
      fetchEvents(currentUser.id).then((data) => {
        if (isMounted && data) setEvents(data);
      });
    });

    const unsubWebsites = subscribeToTable('websites', () => {
      fetchWebsites().then((data) => {
        if (isMounted && data) setWebsites(data);
      });
    });

    return () => {
      isMounted = false;
      unsubNotices();
      unsubEvents();
      unsubWebsites();
    };
  }, [currentUser.id]);

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
      localStorage.setItem('college_hub_notices_v4', JSON.stringify(announcements));
    } catch {}
  }, [announcements]);

  useEffect(() => {
    try {
      localStorage.setItem('college_hub_events_v8', JSON.stringify(events));
    } catch {}
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem('college_hub_websites_v10', JSON.stringify(websites));
    } catch {}
  }, [websites]);

  // Sync URL route with activeNav
  useEffect(() => {
    const currentNav = getRouteNav();
    const targetPath = activeNav === 'announcements' ? '/' : `/${activeNav}`;
    if (currentNav !== activeNav && window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [activeNav]);

  // Handle browser back / forward navigation and hash changes
  useEffect(() => {
    const handleUrlChange = () => {
      const nav = getRouteNav();
      setActiveNav(nav);
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

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

  // Persist Lecturer Profiles
  useEffect(() => {
    saveLocalLecturers(lecturers);
  }, [lecturers]);

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

  // Register PWA service worker with update check
  useEffect(() => {
    // Reset any temporary chunk load retry flag once successfully mounted
    sessionStorage.removeItem('chunk_load_failed');

    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => {
          reg.update().catch(() => {});
        })
        .catch((err) => {
          console.info('Service Worker registration skipped:', err);
        });
    }
  }, []);

  // Auto-hide mobile dock and top sticky header on scroll
  const [isBottomNavHidden, setIsBottomNavHidden] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
          const diff = currentScrollY - lastScrollYRef.current;

          if (currentScrollY <= 60) {
            setIsBottomNavHidden(false);
            setIsHeaderHidden(false);
          } else if (diff > 8) {
            // Scrolling down feed (swiping up) -> auto hide dock & top header
            setIsBottomNavHidden(true);
            setIsHeaderHidden(true);
          } else if (diff < -8) {
            // Scrolling up feed (swiping down) -> show dock & top header
            setIsBottomNavHidden(false);
            setIsHeaderHidden(false);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When switching views/tabs, always restore top header and bottom nav
  useEffect(() => {
    setIsHeaderHidden(false);
    setIsBottomNavHidden(false);
  }, [activeNav]);

  // Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  // --- Handlers ---
  const handleLike = async (id) => {
    const target = announcements.find((item) => item.id === id);
    const wasLiked = target ? Boolean(target.isLiked) : false;
    const currentLikes = target ? (target.likes || 0) : 0;

    // Optimistic UI update
    setAnnouncements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const isLiked = !item.isLiked;
          return {
            ...item,
            isLiked,
            likes: Math.max(0, (item.likes || 0) + (isLiked ? 1 : -1))
          };
        }
        return item;
      })
    );

    // Persist to Supabase
    await toggleNoticeLike(id, currentUser.id, wasLiked, currentLikes);
  };

  const handleBookmark = async (id) => {
    const target = announcements.find((item) => item.id === id);
    const wasBookmarked = target ? Boolean(target.isBookmarked) : false;

    // Optimistic UI update
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

    // Persist to Supabase
    await toggleNoticeBookmark(id, currentUser.id, wasBookmarked);
  };

  const handleClearAllBookmarks = async () => {
    const bookmarkedCount = announcements.filter((a) => a.isBookmarked).length;
    if (bookmarkedCount === 0) return;

    setAnnouncements((prev) =>
      prev.map((item) => (item.isBookmarked ? { ...item, isBookmarked: false } : item))
    );
    showToast('All bookmarks cleared');
    await clearAllNoticeBookmarks(currentUser.id);
  };

  const handleTogglePin = async (noticeId) => {
    if (currentUser.roleKey === 'student') return;
    const target = announcements.find((item) => item.id === noticeId);
    const nextPinned = target ? !(target.isImportant || target.important || target.tag === 'Important') : true;

    setAnnouncements((prev) =>
      prev.map((item) => {
        if (item.id === noticeId) {
          showToast(nextPinned ? 'Notice pinned to top of feed' : 'Notice unpinned');
          return {
            ...item,
            isImportant: nextPinned
          };
        }
        return item;
      })
    );

    await toggleNoticePin(noticeId, nextPinned);
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

  const handlePublishNotice = async (noticeData) => {
    if (currentUser.roleKey === 'student') return;
    const newNotice = {
      id: `post-${Date.now()}`,
      userId: currentUser.id,
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
      isImportant: Boolean(noticeData.isImportant),
      time: noticeData.time || 'Just now',
      timestamp: Date.now(),
      articleTitle: noticeData.articleTitle || null,
      text: noticeData.text,
      media: noticeData.media,
      mediaKind: noticeData.mediaKind || null,
      mediaName: noticeData.mediaName || null,
      mediaSize: noticeData.mediaSize || null,
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
    const newNotif = {
      id: `notif-${Date.now()}`,
      type: 'notice',
      title: noticeData.isImportant
        ? `Important Notice for ${noticeData.branch === 'ALL' ? 'All Branches' : noticeData.branch}`
        : `New Notice for ${noticeData.branch === 'ALL' ? 'All Branches' : noticeData.branch}`,
      body: `${currentUser.name} (${currentUser.role}) published: ${noticeData.text.slice(0, 60)}...`,
      time: 'Just now',
      unread: true
    };
    setNotifications([newNotif, ...notifications]);

    // Persist asynchronously
    await createAnnouncement(newNotice);
    await createNotification(newNotif);
  };

  const handleDeleteNotice = async (noticeId) => {
    const target = announcements.find((n) => n.id === noticeId);
    if (!target) return;

    const canDelete =
      currentUser.roleKey === 'admin' ||
      target.userId === currentUser.id ||
      target.handle === currentUser.handle ||
      target.author === currentUser.name;

    if (!canDelete) {
      showToast('You can only remove notices that you posted');
      return;
    }

    setAnnouncements((prev) => prev.filter((n) => n.id !== noticeId));
    showToast('Notice deleted');

    await deleteAnnouncementFromDB(noticeId);
  };

  const handleRegisterEvent = async (eventId, registrationDetails = null) => {
    const target = events.find((evt) => evt.id === eventId);
    if (!target) return;
    const wasRegistered = Boolean(target.isRegistered);
    const currentCount = target.registeredCount || 0;

    if (!wasRegistered && target.maxCapacity && currentCount >= target.maxCapacity) {
      showToast('Event capacity full (Housefull)');
      return;
    }

    const nextIsRegistered = registrationDetails ? true : !wasRegistered;

    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const delta = nextIsRegistered === wasRegistered ? 0 : (nextIsRegistered ? 1 : -1);
          showToast(nextIsRegistered ? 'Registration submitted via Google Form!' : 'Registration cancelled');
          return {
            ...evt,
            isRegistered: nextIsRegistered,
            registeredCount: Math.max(0, (evt.registeredCount || 0) + delta),
            registrationDetails: nextIsRegistered ? registrationDetails : null
          };
        }
        return evt;
      })
    );

    // Persist to Supabase
    await toggleEventRegistration(eventId, currentUser, wasRegistered, currentCount);
  };

  const handleRecordAttendance = async (eventId, record) => {
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
    const newNotif = {
      id: `notif-${Date.now()}`,
      type: 'attendance',
      title: 'Attendance Confirmed',
      body: `${record.status} recorded for ${record.name} at ${record.checkIn || record.checkOut}`,
      time: 'Just now',
      unread: true
    };
    setNotifications([newNotif, ...notifications]);

    // Persist to Supabase
    await recordAttendanceInDB(eventId, record);
    await createNotification(newNotif);
  };

  const handleCreateEvent = async (eventData) => {
    if (currentUser.roleKey === 'student') return;
    const newEvent = {
      id: `evt-${Date.now()}`,
      creatorId: currentUser.id,
      organizer: eventData.organizer || currentUser.name,
      ...eventData,
      registeredCount: 0,
      maxCapacity: 150,
      isRegistered: false,
      qrPayload: `EVENT_${Date.now()}`,
      attendance: []
    };

    setEvents([newEvent, ...events]);
    showToast('New event published');

    // Persist to Supabase
    await createEvent(newEvent);
  };

  const handleDeleteEvent = async (eventId) => {
    const target = events.find((e) => e.id === eventId);
    if (!target) return;

    const canDelete =
      currentUser.roleKey === 'admin' ||
      target.creatorId === currentUser.id ||
      target.organizer === currentUser.name ||
      (currentUser.roleKey === 'coordinator' && target.type === 'internal');

    if (!canDelete) {
      showToast('You can only remove events that you posted');
      return;
    }

    setEvents((prev) => prev.filter((e) => e.id !== eventId));
    showToast('Event deleted');

    await deleteEventFromDB(eventId);
  };

  const handleAddWebsite = async (websiteData) => {
    if (currentUser.roleKey === 'student') return;
    const newWeb = {
      id: `web-${Date.now()}`,
      ...websiteData
    };

    setWebsites([newWeb, ...websites]);
    showToast('Website added to directory');

    // Persist to Supabase
    await createWebsite(newWeb);
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

  useEffect(() => {
    if (!isSignedIn || !clerkUser) {
      redirectedClerkUserRef.current = null;
      return;
    }

    if (!collegeAccess?.isAllowed) return;

    const displayName =
      clerkUser.fullName ||
      clerkUser.username ||
      clerkEmail.split('@')[0] ||
      'Campus User';

    setCurrentRoleKey(collegeAccess.roleKey);
    setActiveUser((prev) => ({
      ...USERS[collegeAccess.roleKey] || USERS.student,
      ...prev,
      id: clerkUser.id,
      name: displayName,
      email: clerkEmail,
      usn: collegeAccess.usn || (collegeAccess.roleKey === 'faculty' ? 'FACULTY' : prev?.usn || USERS.student.usn),
      role: collegeAccess.role,
      roleKey: collegeAccess.roleKey,
      canAccessAllDepts: Boolean(collegeAccess.canAccessAllDepts),
      verifiedType: collegeAccess.roleKey === 'student' ? 'blue' : 'gold',
      branch: collegeAccess.branchId,
      department: collegeAccess.branch?.description || `Dept. of ${collegeAccess.branchId}`,
      handle: clerkUser.username
        ? `@${clerkUser.username}`
        : `@${displayName.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
      avatarChar: displayName.charAt(0).toUpperCase(),
      avatarUrl: clerkUser.imageUrl || prev?.avatarUrl
    }));

    if (redirectedClerkUserRef.current !== clerkUser.id) {
      redirectedClerkUserRef.current = clerkUser.id;
      setActiveBranch(collegeAccess.branchId);
      setActiveNav('announcements');
      showToast(`Welcome, ${displayName}! Opened ${collegeAccess.branch?.slug || collegeAccess.branchId}`);
    }
  }, [isSignedIn, clerkUser, clerkEmail, collegeAccess]);

  const handleLogin = (user) => {
    setActiveUser(user);
    setCurrentRoleKey(user.roleKey || 'student');
    setIsAuthenticated(true);
    showToast(`Welcome back, ${user.name}!`);
  };

  const handleSignup = (newUser) => {
    let userToSet = newUser;
    if (newUser.roleKey === 'faculty') {
      const existing = findLecturerProfile(lecturers, {
        id: newUser.id,
        handle: newUser.handle,
        name: newUser.name
      });
      if (!existing) {
        const newLecId = `lec-${Date.now()}`;
        const starterLecturer = {
          id: newLecId,
          userId: newUser.id,
          name: newUser.name,
          handle: newUser.handle,
          aliases: [],
          employeeId: newUser.usn || `FAC-${Date.now().toString().slice(-4)}`,
          designation: 'Assistant Professor',
          headline: `Faculty · ${newUser.department}`,
          branch: newUser.branch || 'AI&DS',
          department: newUser.department || 'Dept. of AI & Data Science',
          location: 'SMVITM Campus, Bantakal, Udupi',
          experienceYears: '1+ years',
          avatarChar: newUser.avatarChar,
          avatarBg: newUser.avatarBg,
          photoUrl: null,
          bannerBg: 'linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)',
          verified: true,
          verifiedType: 'gold',
          about: `Faculty member in ${newUser.department} at SMVITM Bantakal.`,
          contact: {
            email: '',
            phone: '',
            office: '',
            officeHours: 'Mon – Fri · 3:00 PM – 4:30 PM',
            linkedin: '',
            scholar: '',
            website: ''
          },
          yearsTaught: ['2nd Year'],
          semestersTaught: ['3rd Sem'],
          subjects: [],
          education: [],
          experience: [],
          skills: []
        };
        setLecturers((prev) => [starterLecturer, ...prev]);
        upsertLecturerProfile(starterLecturer);
        userToSet = { ...newUser, lecturerId: newLecId };
      }
    }
    setActiveUser(userToSet);
    setCurrentRoleKey(userToSet.roleKey || 'student');
    setIsAuthenticated(true);
    showToast(`Account created! Welcome, ${userToSet.name}.`);
  };

  const handleLogout = async () => {
    if (isSignedIn) {
      await signOut();
    }
    setIsAuthenticated(false);
    showToast('Signed out of campus account');
  };

  const handleSwitchUser = (roleKey) => {
    setCurrentRoleKey(roleKey);
    const u = USERS[roleKey];
    setActiveUser(u);
    showToast(`Switched active role: ${u.role} (${u.name})`);
  };

  const handleSwitchLecturer = (lecturer) => {
    if (!lecturer) return;
    setCurrentRoleKey('faculty');
    setActiveUser({
      id: lecturer.userId || lecturer.id,
      lecturerId: lecturer.id,
      name: lecturer.name,
      usn: lecturer.employeeId || 'FAC-01',
      role: 'Faculty',
      roleKey: 'faculty',
      branch: lecturer.branch,
      department: lecturer.department,
      handle: lecturer.handle,
      avatarChar: lecturer.avatarChar,
      avatarBg: lecturer.avatarBg,
      photoUrl: lecturer.photoUrl || null,
      verified: true,
      verifiedType: lecturer.verifiedType || 'gold'
    });
    showToast(`Switched lecturer profile: ${lecturer.name}`);
  };

  const handleSaveLecturerPhoto = async (lecturerId, photoUrl) => {
    let updatedTarget = null;
    setLecturers((prev) =>
      prev.map((lec) => {
        if (lec.id === lecturerId) {
          updatedTarget = { ...lec, photoUrl: photoUrl || null };
          return updatedTarget;
        }
        return lec;
      })
    );
    if (
      activeUser &&
      (activeUser.lecturerId === lecturerId ||
        activeUser.id === updatedTarget?.userId ||
        activeUser.handle === updatedTarget?.handle)
    ) {
      setActiveUser((prev) => ({ ...prev, photoUrl: photoUrl || null }));
    }
    showToast(photoUrl ? 'Profile photo updated' : 'Profile photo removed');
    if (updatedTarget) {
      await upsertLecturerProfile(updatedTarget);
    }
  };

  const handleSaveLecturerProfile = async (updatedProfile) => {
    setLecturers((prev) =>
      prev.map((lec) => (lec.id === updatedProfile.id ? updatedProfile : lec))
    );
    if (
      activeUser &&
      (activeUser.lecturerId === updatedProfile.id ||
        activeUser.id === updatedProfile.userId ||
        activeUser.handle === updatedProfile.handle)
    ) {
      setActiveUser((prev) => ({
        ...prev,
        name: updatedProfile.name,
        branch: updatedProfile.branch,
        department: updatedProfile.department,
        avatarChar: updatedProfile.avatarChar
      }));
    }
    showToast(`Updated profile for ${updatedProfile.name}`);
    await upsertLecturerProfile(updatedProfile);
  };

  const handleCreateLecturer = async (newProfile) => {
    setLecturers((prev) => [newProfile, ...prev]);
    setSelectedLecturerId(newProfile.id);
    showToast(`Created lecturer profile for ${newProfile.name}`);
    await upsertLecturerProfile(newProfile);
  };

  const handleOpenLecturer = (lecturerId) => {
    setSelectedLecturerId(lecturerId);
    setActiveNav('faculty');
    setIsHeaderHidden(false);
    setIsBottomNavHidden(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleMarkAllRead = async () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('All notifications marked as read');
    await markAllNotificationsReadInDB();
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  const openCompose = (intent) => {
    if (currentUser.roleKey === 'student') return;
    setComposeIntent(intent || { mode: 'text' });
    setIsComposeOpen(true);
  };

  // Open a community page (Reddit style): only that community's posts
  const openCommunity = (branchId) => {
    if (!canAccessCommunity(currentUser, branchId)) {
      showToast(`Access restricted: You can only view your ${currentUser.branch} department community`);
      return;
    }
    setActiveBranch(branchId);
    setActiveNav('announcements');
    setIsHeaderHidden(false);
    setIsBottomNavHidden(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
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

  if (isClerkEnabled && !isLoaded && !clerkTimedOut) {
    return (
      <div className="auth-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'var(--text-secondary)' }}>
        Loading...
      </div>
    );
  }

  if (isSignedIn && clerkUser && collegeAccess && !collegeAccess.isAllowed) {
    return (
      <div
        className="auth-root"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 24
        }}
      >
        <div
          style={{
            maxWidth: 440,
            width: '100%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: 16,
            padding: 28,
            textAlign: 'center'
          }}
        >
          <h2 style={{ marginBottom: 10, fontSize: 22 }}>Access Restricted</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.5, marginBottom: 12 }}>
            Signed in as <strong>{clerkEmail || 'unknown email'}</strong>.
          </p>
          <p style={{ color: '#f4212e', fontSize: 14, lineHeight: 1.5, marginBottom: 20 }}>
            {collegeAccess.reason}
          </p>
          <button
            type="button"
            className="btn-auth-create"
            onClick={handleLogout}
            style={{ width: '100%' }}
          >
            Sign out &amp; switch account
          </button>
        </div>
        <Toast message={toastMessage} />
      </div>
    );
  }

  if (!isSignedIn && !isAuthenticated) {
    return (
      <div className="auth-root">
        <AuthPage
          onLogin={handleLogin}
          onSignup={handleSignup}
          users={USERS}
          isClerkEnabled={isClerkEnabled}
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
        setActiveNav={(nav) => {
          if (nav === 'faculty') setSelectedLecturerId(null);
          setActiveNav(nav);
        }}
        currentUser={currentUser}
        onSwitchUser={handleSwitchUser}
        users={USERS}
        onOpenCompose={() => {
          if (currentUser.roleKey === 'student') return;
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
            joinedCommunities={joinedCommunities}
            onToggleJoin={handleToggleJoin}
            onOpenCommunity={openCommunity}
            unreadCount={unreadCount}
            onOpenNotifications={() => setActiveNav('notifications')}
            isHeaderHidden={isHeaderHidden}
            onTogglePin={handleTogglePin}
            onDeleteNotice={handleDeleteNotice}
            lecturers={lecturers}
            onOpenLecturer={handleOpenLecturer}
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
            onDeleteEvent={handleDeleteEvent}
            searchQuery={searchQuery}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            unreadCount={unreadCount}
            onOpenNotifications={() => setActiveNav('notifications')}
            isHeaderHidden={isHeaderHidden}
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
            unreadCount={unreadCount}
            onOpenNotifications={() => setActiveNav('notifications')}
            isHeaderHidden={isHeaderHidden}
          />
        )}

        {activeNav === 'notifications' && (
          <NotificationsView
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            currentUser={currentUser}
            onBack={() => setActiveNav('announcements')}
            isHeaderHidden={isHeaderHidden}
          />
        )}

        {activeNav === 'faculty' && (
          <FacultyDirectoryView
            lecturers={lecturers}
            announcements={announcements}
            currentUser={currentUser}
            selectedLecturerId={selectedLecturerId}
            onSelectLecturer={setSelectedLecturerId}
            onSavePhoto={handleSaveLecturerPhoto}
            onSaveProfile={handleSaveLecturerProfile}
            onCreateLecturer={handleCreateLecturer}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            unreadCount={unreadCount}
            onOpenNotifications={() => setActiveNav('notifications')}
            isHeaderHidden={isHeaderHidden}
            onOpenCommunity={openCommunity}
            onBackToProfile={() => setActiveNav('profile')}
          />
        )}

        {activeNav === 'profile' && (
          <ProfileView
            currentUser={currentUser}
            users={USERS}
            lecturers={lecturers}
            announcements={announcements}
            onSwitchUser={handleSwitchUser}
            onSwitchLecturer={handleSwitchLecturer}
            onSavePhoto={handleSaveLecturerPhoto}
            onSaveProfile={handleSaveLecturerProfile}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            onSelectNav={(nav) => setActiveNav(nav)}
            onOpenDisplay={() => setIsDisplayOpen(true)}
            onOpenCommunity={openCommunity}
            onOpenFacultyDirectory={() => {
              setSelectedLecturerId(null);
              setActiveNav('faculty');
            }}
            onLogout={handleLogout}
            isHeaderHidden={isHeaderHidden}
          />
        )}

        {activeNav === 'bookmarks' && (
          <BookmarksView
            announcements={announcements.filter((a) => a.isBookmarked)}
            onBookmark={handleBookmark}
            onShare={handleShare}
            onOpenImage={(img) => setLightboxImg(img)}
            currentUser={currentUser}
            isSidebarHidden={isSidebarHidden}
            onToggleSidebar={handleToggleSidebar}
            onBack={() => {
              setActiveNav('announcements');
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            onSelectNav={setActiveNav}
            isHeaderHidden={isHeaderHidden}
            onTogglePin={handleTogglePin}
            onOpenCommunity={openCommunity}
            onClearAll={handleClearAllBookmarks}
            onDeleteNotice={handleDeleteNotice}
            lecturers={lecturers}
            onOpenLecturer={handleOpenLecturer}
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
        currentUser={currentUser}
      />

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav
        className={`mobile-bottom-nav ${isBottomNavHidden ? 'nav-hidden' : ''}`}
        aria-label="Mobile Navigation"
      >
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
          className={`mobile-nav-item ${activeNav === 'profile' || activeNav === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveNav('profile')}
          aria-label="Profile"
        >
          <div style={{ position: 'relative' }}>
            <IconProfile className="mobile-nav-icon" />
            {unreadCount > 0 && <span className="badge-dot" style={{ top: -2, right: -2 }} />}
          </div>
        </button>
      </nav>

      {/* MOBILE FLOATING ACTION BUTTON (POST: Faculty, Coordinator, Admin only) */}
      {currentUser.roleKey !== 'student' && activeNav !== 'bookmarks' && (
        <button
          type="button"
          className={`mobile-fab-btn ${isBottomNavHidden ? 'nav-hidden' : ''}`}
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
      )}

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
        onRegisterEvent={handleRegisterEvent}
      />

      {/* FLOATING TOAST NOTIFICATION */}
      <Toast message={toastMessage} />
    </div>
  );
}
