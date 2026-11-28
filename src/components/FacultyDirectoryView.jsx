// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState, useMemo } from 'react';
import {
  IconSidebarToggle,
  IconNotifications,
  IconSearch,
  IconClose,
  IconPlus,
  IconBook,
  IconGraduationCap,
  IconArrowLeft,
  VerifiedBadge,
  UserAvatar
} from './Icons';
import { BRANCHES, TEACHING_YEAR_OPTIONS } from '../data/initialData';
import LecturerProfileDetail from './LecturerProfileDetail';
import LecturerEditModal from './LecturerEditModal';

export default function FacultyDirectoryView({
  lecturers = [],
  announcements = [],
  currentUser,
  selectedLecturerId,
  onSelectLecturer,
  onSavePhoto,
  onSaveProfile,
  onCreateLecturer,
  isSidebarHidden,
  onToggleSidebar,
  unreadCount = 0,
  onOpenNotifications,
  isHeaderHidden = false,
  onOpenCommunity,
  onBackToProfile
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const selectedLecturer = useMemo(
    () => lecturers.find((l) => l.id === selectedLecturerId) || null,
    [lecturers, selectedLecturerId]
  );

  const canManageLecturer = (lec) => {
    if (!currentUser || !lec) return false;
    if (currentUser.roleKey === 'admin') return true;
    if (currentUser.roleKey === 'faculty') {
      return (
        lec.id === currentUser.lecturerId ||
        lec.userId === currentUser.id ||
        (lec.handle && currentUser.handle && lec.handle.toLowerCase() === currentUser.handle.toLowerCase())
      );
    }
    return false;
  };

  const canAddLecturer = currentUser?.roleKey === 'admin' || currentUser?.roleKey === 'faculty';

  const filteredLecturers = useMemo(() => {
    return lecturers.filter((lec) => {
      if (selectedBranch !== 'ALL' && lec.branch !== selectedBranch) return false;
      if (selectedYear !== 'All Years' && !(lec.yearsTaught || []).includes(selectedYear)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = (lec.name || '').toLowerCase().includes(q);
        const matchDesig = (lec.designation || '').toLowerCase().includes(q);
        const matchDept = (lec.department || '').toLowerCase().includes(q);
        const matchHeadline = (lec.headline || '').toLowerCase().includes(q);
        const matchSub = (lec.subjects || []).some(
          (s) =>
            (s.name || '').toLowerCase().includes(q) ||
            (s.code || '').toLowerCase().includes(q)
        );
        const matchEdu = (lec.education || []).some(
          (e) =>
            (e.degree || '').toLowerCase().includes(q) ||
            (e.institution || '').toLowerCase().includes(q)
        );
        const matchSkills = (lec.skills || []).some((sk) => sk.toLowerCase().includes(q));
        return matchName || matchDesig || matchDept || matchHeadline || matchSub || matchEdu || matchSkills;
      }
      return true;
    });
  }, [lecturers, selectedBranch, selectedYear, searchQuery]);

  const draftNewLecturer = useMemo(
    () => ({
      id: `lec-${Date.now()}`,
      userId: `user-lec-${Date.now()}`,
      name: '',
      handle: `@faculty_${Date.now().toString().slice(-4)}`,
      aliases: [],
      employeeId: 'FAC-NEW',
      designation: 'Assistant Professor',
      headline: '',
      branch: currentUser?.branch && currentUser.branch !== 'ALL' ? currentUser.branch : 'AI&DS',
      department: currentUser?.department || 'Dept. of AI & Data Science',
      location: 'SMVITM Campus, Bantakal, Udupi',
      experienceYears: '1+ years',
      avatarChar: 'L',
      avatarBg: '#1d9bf0',
      photoUrl: null,
      bannerBg: 'linear-gradient(135deg, #4f46e5 0%, #7856ff 55%, #1d9bf0 100%)',
      verified: true,
      verifiedType: 'blue',
      about: '',
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
    }),
    [currentUser, isCreatingNew]
  );

  return (
    <div className="faculty-view-container">
      {/* Sticky Header */}
      <div className={`sticky-header ${isHeaderHidden ? 'header-hidden' : ''}`}>
        <div className="header-top-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {onBackToProfile && !selectedLecturer && (
              <button
                type="button"
                className="header-back-btn"
                onClick={onBackToProfile}
                aria-label="Back to Profile"
                title="Back to Profile"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  padding: 0
                }}
              >
                <IconArrowLeft style={{ width: 18, height: 18 }} />
              </button>
            )}
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
              <h1 className="header-main-title">
                {selectedLecturer ? selectedLecturer.name : 'Faculty & Lecturers'}
              </h1>
              <span className="header-sub-title">
                {selectedLecturer
                  ? `${selectedLecturer.designation} · ${selectedLecturer.department}`
                  : `${lecturers.length} academic profiles · subjects, qualifications & contact`}
              </span>
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
            {!selectedLecturer && canAddLecturer && (
              <button
                type="button"
                className="btn-primary-post"
                onClick={() => setIsCreatingNew(true)}
                style={{ fontSize: 13, padding: '6px 14px', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <IconPlus style={{ width: 14, height: 14 }} />
                <span>Add Lecturer</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Bar (Directory Mode) */}
        {!selectedLecturer && (
          <div className="faculty-filter-bar">
            <div className="web-search-box" style={{ maxWidth: 'none', flex: 1 }}>
              <IconSearch className="web-search-icon" />
              <input
                type="text"
                className="web-search-input"
                placeholder="Search lecturer, subject, degree, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="web-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <IconClose />
                </button>
              )}
            </div>

            <div className="faculty-selects-row">
              <select
                className="faculty-filter-select"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                aria-label="Filter by department"
              >
                <option value="ALL">All Departments</option>
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>{b.code} — {b.label}</option>
                ))}
              </select>

              <select
                className="faculty-filter-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                aria-label="Filter by year taught"
              >
                <option value="All Years">All Years</option>
                {TEACHING_YEAR_OPTIONS.map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Main Body */}
      {selectedLecturer ? (
        <LecturerProfileDetail
          lecturer={selectedLecturer}
          announcements={announcements}
          canEdit={canManageLecturer(selectedLecturer)}
          onSavePhoto={onSavePhoto}
          onSaveProfile={onSaveProfile}
          onBack={() => onSelectLecturer(null)}
          backLabel="All Lecturers"
          onOpenCommunity={onOpenCommunity}
          onSelectNoticeBranch={onOpenCommunity}
        />
      ) : (
        <div className="faculty-directory-body">
          {filteredLecturers.length === 0 ? (
            <div style={{ padding: '64px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>
                No lecturer profiles match your filters
              </h3>
              <p style={{ fontSize: 14, marginBottom: 16 }}>
                Try clearing your search or selecting another department or teaching year.
              </p>
              <button
                type="button"
                className="bookmarks-explore-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedBranch('ALL');
                  setSelectedYear('All Years');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="faculty-cards-grid">
              {filteredLecturers.map((lec) => {
                const isOwn = canManageLecturer(lec);
                const topDegree = lec.education?.[0]?.degree;
                const focusArea = (lec.headline && lec.headline.includes('|'))
                  ? lec.headline.split('|').slice(1).join('|').trim()
                  : (lec.about && lec.about !== lec.headline ? lec.about : '');
                return (
                  <article
                    key={lec.id}
                    className="li-directory-card"
                    onClick={() => onSelectLecturer(lec.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectLecturer(lec.id);
                      }
                    }}
                  >
                    <div
                      className="li-dir-banner"
                      style={{ background: lec.bannerBg || 'linear-gradient(135deg, #4f46e5, #1d9bf0)' }}
                    >
                      <span className="li-dir-branch-tag">{lec.branch}</span>
                      {isOwn && <span className="li-dir-own-tag">Editable</span>}
                    </div>

                    <div className="li-dir-body">
                      <div className="li-dir-avatar-row">
                        <UserAvatar user={lec} sizeClass="li-dir-avatar" />
                      </div>

                      <div className="li-dir-name-row">
                        <h2 className="li-dir-name">{lec.name}</h2>
                        <VerifiedBadge type={lec.verifiedType || 'gold'} />
                      </div>

                      <div className="li-dir-designation">
                        {lec.designation} · {lec.department}
                      </div>

                      {focusArea && (
                        <p className="li-dir-headline">
                          {focusArea}
                        </p>
                      )}

                      {topDegree && (
                        <div className="li-dir-edu-line">
                          <IconGraduationCap style={{ width: 14, height: 14, flexShrink: 0 }} />
                          <span>{topDegree}</span>
                        </div>
                      )}

                      {lec.yearsTaught && lec.yearsTaught.length > 0 && (
                        <div className="li-dir-years-row">
                          {lec.yearsTaught.map((yr) => (
                            <span key={yr} className="li-dir-year-chip">{yr}</span>
                          ))}
                        </div>
                      )}

                      {lec.subjects && lec.subjects.length > 0 && (
                        <div className="li-dir-subjects-row">
                          <IconBook style={{ width: 13, height: 13, flexShrink: 0, color: 'var(--text-secondary)' }} />
                          <span className="li-dir-subjects-text">
                            {lec.subjects.slice(0, 2).map((s) => s.name).join(' · ')}
                            {lec.subjects.length > 2 ? ` +${lec.subjects.length - 2} more` : ''}
                          </span>
                        </div>
                      )}

                      <div className="li-dir-footer">
                        <span className="li-dir-contact-preview">
                          {lec.contact?.email || lec.contact?.office || 'SMVITM Faculty'}
                        </span>
                        <span className="li-dir-view-cta">View Profile</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Create New Lecturer Modal */}
      <LecturerEditModal
        isOpen={isCreatingNew}
        onClose={() => setIsCreatingNew(false)}
        lecturer={draftNewLecturer}
        onSaveProfile={(created) => {
          const handleClean = `@${created.name
            .toLowerCase()
            .replace(/^(dr\.|prof\.)\s*/i, '')
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_|_$/g, '') || 'faculty'}`;
          onCreateLecturer({
            ...created,
            handle: handleClean
          });
          setIsCreatingNew(false);
        }}
      />
    </div>
  );
}
