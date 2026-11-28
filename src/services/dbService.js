import { supabase } from '../lib/supabase';
import {
  INITIAL_ANNOUNCEMENTS,
  INITIAL_EVENTS,
  INITIAL_WEBSITES,
  INITIAL_NOTIFICATIONS,
  INITIAL_LECTURERS,
  PORTAL_LOGOS,
  USERS
} from '../data/initialData';
import { cleanInstagramUrl } from '../utils/urlUtils';

// --- Helpers to Map DB Schema to Frontend State ---

function mapAnnouncementFromDB(row, userLikedSet = new Set(), userBookmarkedSet = new Set()) {
  return {
    id: row.id,
    author: row.author,
    authorRole: row.author_role || row.authorRole || 'Faculty',
    handle: row.handle,
    department: row.department,
    verified: row.verified ?? true,
    verifiedType: row.verified_type || row.verifiedType || 'blue',
    avatarChar: row.avatar_char || row.avatarChar || (row.author ? row.author[0] : 'U'),
    avatarBg: row.avatar_bg || row.avatarBg || '#1d9bf0',
    branch: row.branch || 'ALL',
    category: row.category || 'Academic',
    isImportant: Boolean(row.is_important ?? row.isImportant),
    time: row.time || 'Just now',
    timestamp: row.timestamp || (row.created_at ? new Date(row.created_at).getTime() : Date.now()),
    articleTitle: row.article_title || row.articleTitle || null,
    text: row.text || '',
    media: row.media || null,
    mediaKind: row.media_kind || row.mediaKind || null,
    mediaName: row.media_name || row.mediaName || null,
    mediaSize: row.media_size || row.mediaSize || null,
    linkUrl: row.link_url || row.linkUrl || null,
    linkLabel: row.link_label || row.linkLabel || (row.link_url ? 'Link' : null),
    comments: row.comments_policy || row.comments || 'Anyone',
    collaborators: Array.isArray(row.collaborators) ? row.collaborators : [],
    replies: Number(row.replies_count ?? row.replies ?? 0),
    reposts: Number(row.reposts_count ?? row.reposts ?? 0),
    likes: Number(row.likes_count ?? row.likes ?? 0),
    views: row.views || '1',
    isLiked: userLikedSet.has(row.id),
    isBookmarked: userBookmarkedSet.has(row.id)
  };
}

function mapAnnouncementToDB(notice) {
  return {
    id: notice.id,
    author: notice.author,
    author_role: notice.authorRole,
    handle: notice.handle,
    department: notice.department,
    verified: notice.verified,
    verified_type: notice.verifiedType,
    avatar_char: notice.avatarChar,
    avatar_bg: notice.avatarBg,
    branch: notice.branch,
    category: notice.category,
    is_important: Boolean(notice.isImportant),
    time: notice.time || 'Just now',
    timestamp: notice.timestamp || Date.now(),
    article_title: notice.articleTitle || null,
    text: notice.text,
    media: notice.media || null,
    media_kind: notice.mediaKind || null,
    media_name: notice.mediaName || null,
    media_size: notice.mediaSize || null,
    link_url: notice.linkUrl || null,
    link_label: notice.linkLabel || null,
    comments_policy: notice.comments || 'Anyone',
    collaborators: notice.collaborators || [],
    replies_count: notice.replies || 0,
    reposts_count: notice.reposts || 0,
    likes_count: notice.likes || 0,
    views: notice.views || '1'
  };
}

function mapEventFromDB(row, userRegisteredSet = new Set(), attendanceList = []) {
  return {
    id: row.id,
    type: row.type || 'internal',
    title: row.title,
    organizer: row.organizer,
    date: row.date,
    time: row.time,
    venue: row.venue,
    poster: row.poster || null,
    deadline: row.deadline || '',
    description: row.description || '',
    maxCapacity: Number(row.max_capacity ?? row.maxCapacity ?? 150),
    registeredCount: Number(row.registered_count ?? row.registeredCount ?? 0),
    isRegistered: userRegisteredSet.has(row.id),
    qrPayload: row.qr_payload || row.qrPayload || `EVENT_${row.id}`,
    link: (row.type === 'internal')
      ? 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor'
      : ((row.link && !row.link.includes('instagram.com')) ? row.link : null),
    attendance: attendanceList
  };
}

function mapEventToDB(event) {
  return {
    id: event.id,
    type: event.type || 'internal',
    title: event.title,
    organizer: event.organizer,
    date: event.date,
    time: event.time,
    venue: event.venue,
    poster: event.poster || null,
    deadline: event.deadline || null,
    description: event.description || '',
    max_capacity: event.maxCapacity || 150,
    registered_count: event.registeredCount || 0,
    qr_payload: event.qrPayload || `EVENT_${Date.now()}`,
    link: event.link || null
  };
}

function mapWebsiteFromDB(row) {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    url: row.url,
    badge: row.badge || row.category,
    iconType: row.icon_type || row.iconType || 'external',
    logo: row.logo || PORTAL_LOGOS[row.id] || null
  };
}

function mapWebsiteToDB(web) {
  return {
    id: web.id,
    name: web.name,
    category: web.category,
    description: web.description,
    url: web.url,
    badge: web.badge || web.category,
    icon_type: web.iconType || 'external'
  };
}

function mapNotificationFromDB(row) {
  return {
    id: row.id,
    type: row.type || 'notice',
    title: row.title,
    body: row.body || row.text || '',
    time: row.time || 'Just now',
    unread: Boolean(row.unread)
  };
}

function mapNotificationToDB(notif) {
  return {
    id: notif.id,
    type: notif.type || 'notice',
    title: notif.title,
    body: notif.body,
    time: notif.time || 'Just now',
    unread: Boolean(notif.unread)
  };
}

// --- Announcements (Notices) API ---

export async function fetchAnnouncements(currentUserId = 'user-student') {
  try {
    const { data: notices, error: noticeErr } = await supabase
      .from('announcements')
      .select('*')
      .order('timestamp', { ascending: false });

    if (noticeErr) throw noticeErr;

    // Fetch user's likes & bookmarks
    let likedSet = new Set();
    let bookmarkedSet = new Set();

    if (currentUserId) {
      const [likesRes, bookmarksRes] = await Promise.all([
        supabase.from('notice_likes').select('notice_id').eq('user_id', currentUserId),
        supabase.from('notice_bookmarks').select('notice_id').eq('user_id', currentUserId)
      ]);

      if (likesRes.data) {
        likedSet = new Set(likesRes.data.map((r) => r.notice_id));
      }
      if (bookmarksRes.data) {
        bookmarkedSet = new Set(bookmarksRes.data.map((r) => r.notice_id));
      }
    }

    if (notices && notices.length > 0) {
      return notices.map((n) => mapAnnouncementFromDB(n, likedSet, bookmarkedSet));
    }
    return INITIAL_ANNOUNCEMENTS;
  } catch (err) {
    console.info('[Supabase:fetchAnnouncements fallback]', err.message);
    try {
      const saved = localStorage.getItem('college_hub_notices_v4') || localStorage.getItem('college_hub_notices_v3');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_ANNOUNCEMENTS;
  }
}

export async function createAnnouncement(newNotice) {
  try {
    const payload = mapAnnouncementToDB(newNotice);
    const { data, error } = await supabase
      .from('announcements')
      .insert(payload)
      .select()
      .single();

    if (error) throw error;
    return mapAnnouncementFromDB(data);
  } catch (err) {
    console.warn('[Supabase:createAnnouncement fallback to local]', err.message);
    return newNotice;
  }
}

export async function deleteAnnouncementFromDB(noticeId) {
  try {
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', noticeId);
    if (error) throw error;
    return true;
  } catch (err) {
    console.warn('[Supabase:deleteAnnouncement fallback]', err.message);
    return false;
  }
}

export async function toggleNoticeLike(noticeId, currentUserId, currentIsLiked, currentLikes) {
  try {
    const nextIsLiked = !currentIsLiked;
    const nextLikes = Math.max(0, currentLikes + (nextIsLiked ? 1 : -1));

    if (nextIsLiked) {
      await supabase.from('notice_likes').upsert({
        notice_id: noticeId,
        user_id: currentUserId
      });
    } else {
      await supabase.from('notice_likes').delete().match({
        notice_id: noticeId,
        user_id: currentUserId
      });
    }

    // Update count on post
    await supabase.from('announcements').update({ likes_count: nextLikes }).eq('id', noticeId);

    return { isLiked: nextIsLiked, likes: nextLikes };
  } catch (err) {
    console.warn('[Supabase:toggleNoticeLike fallback]', err.message);
    const nextIsLiked = !currentIsLiked;
    return {
      isLiked: nextIsLiked,
      likes: Math.max(0, currentLikes + (nextIsLiked ? 1 : -1))
    };
  }
}

export async function toggleNoticeBookmark(noticeId, currentUserId, currentIsBookmarked) {
  try {
    const nextIsBookmarked = !currentIsBookmarked;

    if (nextIsBookmarked) {
      await supabase.from('notice_bookmarks').upsert({
        notice_id: noticeId,
        user_id: currentUserId
      });
    } else {
      await supabase.from('notice_bookmarks').delete().match({
        notice_id: noticeId,
        user_id: currentUserId
      });
    }

    return { isBookmarked: nextIsBookmarked };
  } catch (err) {
    console.warn('[Supabase:toggleNoticeBookmark fallback]', err.message);
    return { isBookmarked: !currentIsBookmarked };
  }
}

export async function clearAllNoticeBookmarks(currentUserId) {
  try {
    const { error } = await supabase
      .from('notice_bookmarks')
      .delete()
      .eq('user_id', currentUserId);
    if (error) throw error;
    return true;
  } catch (err) {
    console.warn('[Supabase:clearAllNoticeBookmarks fallback]', err.message);
    return false;
  }
}

export async function toggleNoticePin(noticeId, nextPinned) {
  try {
    const { error } = await supabase
      .from('announcements')
      .update({ is_important: nextPinned })
      .eq('id', noticeId);
    if (error) throw error;
    return { isImportant: nextPinned };
  } catch (err) {
    console.warn('[Supabase:toggleNoticePin fallback]', err.message);
    return { isImportant: nextPinned };
  }
}

// --- Events API ---

export async function fetchEvents(currentUserId = 'user-student') {
  try {
    const [eventsRes, regRes, attRes] = await Promise.all([
      supabase.from('events').select('*').order('created_at', { ascending: false }),
      currentUserId ? supabase.from('event_registrations').select('event_id').eq('user_id', currentUserId) : Promise.resolve({ data: [] }),
      supabase.from('event_attendance').select('*')
    ]);

    if (eventsRes.error) throw eventsRes.error;

    const registeredSet = new Set((regRes.data || []).map((r) => r.event_id));
    const attendanceMap = new Map();

    (attRes.data || []).forEach((item) => {
      if (!attendanceMap.has(item.event_id)) {
        attendanceMap.set(item.event_id, []);
      }
      attendanceMap.get(item.event_id).push({
        usn: item.usn,
        name: item.name,
        checkIn: item.check_in,
        checkOut: item.check_out || 'In Progress',
        status: item.status || 'Checked In'
      });
    });

    if (eventsRes.data && eventsRes.data.length > 0) {
      return eventsRes.data.map((evt) =>
        mapEventFromDB(evt, registeredSet, attendanceMap.get(evt.id) || [])
      );
    }
    return INITIAL_EVENTS;
  } catch (err) {
    console.info('[Supabase:fetchEvents fallback]', err.message);
    try {
      const saved = localStorage.getItem('college_hub_events_v8');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((e) => ({
          ...e,
          link: e.type === 'internal'
            ? 'https://docs.google.com/forms/d/e/1FAIpQLSfPzeFRunxDAwmcZNHQDBOziyT3qCQ327DA-4tWFjiGFsvDsg/viewform?usp=publish-editor'
            : e.link
        }));
      }
    } catch {}
    return INITIAL_EVENTS;
  }
}

export async function createEvent(newEvent) {
  try {
    const payload = mapEventToDB(newEvent);
    const { data, error } = await supabase.from('events').insert(payload).select().single();
    if (error) throw error;
    return mapEventFromDB(data);
  } catch (err) {
    console.warn('[Supabase:createEvent fallback to local]', err.message);
    return newEvent;
  }
}

export async function deleteEventFromDB(eventId) {
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', eventId);
    if (error) throw error;
    return true;
  } catch (err) {
    console.warn('[Supabase:deleteEvent fallback]', err.message);
    return false;
  }
}

export async function toggleEventRegistration(eventId, currentUser, currentIsRegistered, currentRegisteredCount) {
  try {
    const nextIsRegistered = !currentIsRegistered;
    const nextCount = Math.max(0, currentRegisteredCount + (nextIsRegistered ? 1 : -1));

    if (nextIsRegistered) {
      await supabase.from('event_registrations').upsert({
        event_id: eventId,
        user_id: currentUser.id,
        user_name: currentUser.name,
        user_usn: currentUser.usn
      });
    } else {
      await supabase.from('event_registrations').delete().match({
        event_id: eventId,
        user_id: currentUser.id
      });
    }

    await supabase.from('events').update({ registered_count: nextCount }).eq('id', eventId);

    return { isRegistered: nextIsRegistered, registeredCount: nextCount };
  } catch (err) {
    console.warn('[Supabase:toggleEventRegistration fallback]', err.message);
    const nextIsRegistered = !currentIsRegistered;
    return {
      isRegistered: nextIsRegistered,
      registeredCount: Math.max(0, currentRegisteredCount + (nextIsRegistered ? 1 : -1))
    };
  }
}

export async function recordAttendanceInDB(eventId, record) {
  try {
    const { error } = await supabase.from('event_attendance').upsert({
      event_id: eventId,
      usn: record.usn,
      name: record.name,
      check_in: record.checkIn,
      check_out: record.checkOut || 'In Progress',
      status: record.status || 'Checked In'
    }, { onConflict: 'event_id,usn' });

    if (error) throw error;
    return true;
  } catch (err) {
    console.warn('[Supabase:recordAttendance fallback]', err.message);
    return false;
  }
}

// --- Websites Directory API ---

export async function fetchWebsites() {
  try {
    const { data, error } = await supabase
      .from('websites')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    if (data && data.length > 0) {
      const dbList = data.map(mapWebsiteFromDB);
      const mergedMap = new Map();
      INITIAL_WEBSITES.forEach((w) => mergedMap.set(w.id, w));
      dbList.forEach((w) => {
        if (w && w.id) {
          mergedMap.set(w.id, { ...mergedMap.get(w.id), ...w });
        }
      });

      // Sync missing initial items (like Social Media portals) to Supabase in the background
      const dbIds = new Set(data.map((d) => d.id));
      const missing = INITIAL_WEBSITES.filter((w) => !dbIds.has(w.id));
      if (missing.length > 0) {
        supabase
          .from('websites')
          .upsert(missing.map(mapWebsiteToDB))
          .then(({ error: upErr }) => {
            if (upErr) console.info('[Supabase:syncWebsites]', upErr.message);
          })
          .catch(() => {});
      }

      return Array.from(mergedMap.values());
    }
    return INITIAL_WEBSITES;
  } catch (err) {
    console.info('[Supabase:fetchWebsites fallback]', err.message);
    try {
      localStorage.removeItem('college_hub_websites_v10');
      const saved = localStorage.getItem('college_hub_websites_v11');
      if (saved) {
        const parsed = JSON.parse(saved);
        const mergedMap = new Map();
        INITIAL_WEBSITES.forEach((w) => mergedMap.set(w.id, { ...w, url: cleanInstagramUrl(w.url) }));
        parsed.forEach((w) => {
          if (w && w.id) {
            const merged = { ...mergedMap.get(w.id), ...w };
            merged.url = cleanInstagramUrl(merged.url);
            mergedMap.set(w.id, merged);
          }
        });
        return Array.from(mergedMap.values());
      }
    } catch {}
    return INITIAL_WEBSITES;
  }
}

export async function createWebsite(newWeb) {
  try {
    const payload = mapWebsiteToDB(newWeb);
    const { data, error } = await supabase.from('websites').insert(payload).select().single();
    if (error) throw error;
    return mapWebsiteFromDB(data);
  } catch (err) {
    console.warn('[Supabase:createWebsite fallback to local]', err.message);
    return newWeb;
  }
}

// --- Notifications API ---

export async function fetchNotifications(userId = 'all') {
  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    if (data && data.length > 0) {
      return data.map(mapNotificationFromDB);
    }
    return INITIAL_NOTIFICATIONS;
  } catch (err) {
    console.info('[Supabase:fetchNotifications fallback]', err.message);
    try {
      const saved = localStorage.getItem('college_hub_notifs_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_NOTIFICATIONS;
  }
}

export async function createNotification(newNotif) {
  try {
    const payload = mapNotificationToDB(newNotif);
    await supabase.from('notifications').insert(payload);
  } catch (err) {
    console.warn('[Supabase:createNotification fallback to local]', err.message);
  }
}

export async function markAllNotificationsReadInDB() {
  try {
    await supabase.from('notifications').update({ unread: false }).eq('unread', true);
  } catch (err) {
    console.warn('[Supabase:markAllRead fallback]', err.message);
  }
}

// --- Realtime Subscriptions ---

export function subscribeToTable(table, onPayload) {
  try {
    const channel = supabase
      .channel(`public:${table}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload) => {
          onPayload(payload);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  } catch (err) {
    console.warn(`[Supabase:realtime] Channel failed for ${table}:`, err.message);
    return () => {};
  }
}

// --- Lecturer Profiles API ---

const LECTURERS_STORAGE_KEY = 'college_hub_lecturers_v2';

function mapLecturerFromDB(row) {
  return {
    id: row.id,
    userId: row.user_id || row.userId || row.id,
    name: row.name,
    handle: row.handle,
    aliases: Array.isArray(row.aliases) ? row.aliases : [],
    employeeId: row.employee_id || row.employeeId || '',
    designation: row.designation || 'Faculty',
    headline: row.headline || '',
    branch: row.branch || 'AI&DS',
    department: row.department || 'Dept. of AI & Data Science',
    location: row.location || 'SMVITM Campus, Bantakal, Udupi',
    experienceYears: row.experience_years || row.experienceYears || '',
    avatarChar: row.avatar_char || row.avatarChar || (row.name ? row.name.charAt(0).toUpperCase() : 'L'),
    avatarBg: row.avatar_bg || row.avatarBg || '#8e24aa',
    photoUrl: row.photo_url ?? row.photoUrl ?? null,
    bannerBg: row.banner_bg || row.bannerBg || 'linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)',
    verified: row.verified ?? true,
    verifiedType: row.verified_type || row.verifiedType || 'blue',
    about: row.about || '',
    contact: row.contact || {},
    yearsTaught: Array.isArray(row.years_taught || row.yearsTaught) ? (row.years_taught || row.yearsTaught) : [],
    semestersTaught: Array.isArray(row.semesters_taught || row.semestersTaught) ? (row.semesters_taught || row.semestersTaught) : [],
    subjects: Array.isArray(row.subjects) ? row.subjects : [],
    education: Array.isArray(row.education) ? row.education : [],
    experience: Array.isArray(row.experience) ? row.experience : [],
    skills: Array.isArray(row.skills) ? row.skills : []
  };
}

function mapLecturerToDB(lec) {
  return {
    id: lec.id,
    user_id: lec.userId || lec.id,
    name: lec.name,
    handle: lec.handle,
    aliases: lec.aliases || [],
    employee_id: lec.employeeId || '',
    designation: lec.designation || 'Faculty',
    headline: lec.headline || '',
    branch: lec.branch || 'AI&DS',
    department: lec.department || '',
    location: lec.location || '',
    experience_years: lec.experienceYears || '',
    avatar_char: lec.avatarChar || (lec.name ? lec.name.charAt(0).toUpperCase() : 'L'),
    avatar_bg: lec.avatarBg || '#8e24aa',
    photo_url: lec.photoUrl || null,
    banner_bg: lec.bannerBg || '',
    verified: lec.verified ?? true,
    verified_type: lec.verifiedType || 'blue',
    about: lec.about || '',
    contact: lec.contact || {},
    years_taught: lec.yearsTaught || [],
    semesters_taught: lec.semestersTaught || [],
    subjects: lec.subjects || [],
    education: lec.education || [],
    experience: lec.experience || [],
    skills: lec.skills || []
  };
}

export function loadLocalLecturers() {
  try {
    const saved = localStorage.getItem(LECTURERS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= 50) {
        return parsed;
      }
    }
  } catch {}
  saveLocalLecturers(INITIAL_LECTURERS);
  return INITIAL_LECTURERS;
}

export function saveLocalLecturers(lecturers) {
  try {
    localStorage.setItem(LECTURERS_STORAGE_KEY, JSON.stringify(lecturers));
  } catch (err) {
    console.warn('[LocalStorage:saveLocalLecturers failed]', err.message);
  }
}

export async function fetchLecturers() {
  try {
    const { data, error } = await supabase
      .from('lecturer_profiles')
      .select('*');

    if (error) throw error;
    if (data && data.length > 0) {
      const mapped = data.map(mapLecturerFromDB);
      saveLocalLecturers(mapped);
      return mapped;
    }
    return loadLocalLecturers();
  } catch (err) {
    console.info('[Supabase:fetchLecturers fallback]', err.message);
    return loadLocalLecturers();
  }
}

export async function upsertLecturerProfile(profile) {
  try {
    const payload = mapLecturerToDB(profile);
    const { data, error } = await supabase
      .from('lecturer_profiles')
      .upsert(payload)
      .select()
      .single();

    if (error) throw error;
    return mapLecturerFromDB(data);
  } catch (err) {
    console.warn('[Supabase:upsertLecturerProfile fallback to local]', err.message);
    return profile;
  }
}

export function findLecturerProfile(lecturers = [], query = {}) {
  if (!Array.isArray(lecturers) || !query) return null;
  const { id, userId, lecturerId, handle, author, name } = query;
  const targetName = (author || name || '').trim().toLowerCase();
  const targetHandle = (handle || '').trim().toLowerCase();

  return (
    lecturers.find((l) => {
      if (lecturerId && l.id === lecturerId) return true;
      if (id && (l.id === id || l.userId === id)) return true;
      if (userId && (l.userId === userId || l.id === userId)) return true;
      if (targetHandle && (l.handle || '').toLowerCase() === targetHandle) return true;
      if (targetName && (l.name || '').toLowerCase() === targetName) return true;
      if (
        targetName &&
        Array.isArray(l.aliases) &&
        l.aliases.some((alias) => alias.toLowerCase() === targetName)
      ) {
        return true;
      }
      return false;
    }) || null
  );
}
