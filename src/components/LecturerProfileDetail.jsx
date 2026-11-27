// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState } from 'react';
import {
  IconArrowLeft,
  IconCamera,
  IconEdit,
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconBook,
  IconBriefcase,
  IconGraduationCap,
  IconExternal,
  IconCopy,
  IconCheck,
  IconAward,
  VerifiedBadge,
  CommunityAvatar,
  UserAvatar
} from './Icons';
import ProfilePhotoModal from './ProfilePhotoModal';
import LecturerEditModal from './LecturerEditModal';

export default function LecturerProfileDetail({
  lecturer,
  announcements = [],
  canEdit = false,
  onSavePhoto,
  onSaveProfile,
  onBack,
  backLabel = 'All Lecturers',
  onOpenCommunity,
  onSelectNoticeBranch
}) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  if (!lecturer) return null;

  const lecturerNotices = announcements.filter((a) => {
    const aHandle = (a.handle || '').toLowerCase();
    const lHandle = (lecturer.handle || '').toLowerCase();
    const aAuthor = (a.author || '').toLowerCase();
    const lName = (lecturer.name || '').toLowerCase();
    const aliases = (lecturer.aliases || []).map((x) => x.toLowerCase());
    return (
      (a.userId && a.userId === lecturer.userId) ||
      (lHandle && aHandle === lHandle) ||
      (lName && aAuthor === lName) ||
      aliases.includes(aAuthor)
    );
  });

  const handleCopy = (label, value) => {
    if (!value || !navigator.clipboard) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 1600);
    }).catch(() => {});
  };

  return (
    <div className="li-profile-detail">
      {onBack && (
        <div className="li-profile-subbar">
          <button type="button" className="li-back-btn" onClick={onBack}>
            <IconArrowLeft style={{ width: 16, height: 16 }} />
            <span>{backLabel}</span>
          </button>
          <span className="li-subbar-meta">
            {lecturer.department} · {lecturer.employeeId}
          </span>
        </div>
      )}

      {/* LinkedIn Hero Profile Card */}
      <section className="li-profile-card li-hero-card" aria-label="Lecturer Profile Overview">
        <div
          className="li-hero-banner"
          style={{ background: lecturer.bannerBg || 'linear-gradient(135deg, #4f46e5, #1d9bf0)' }}
        >
          <div className="li-hero-banner-grid" />
          <span className="li-hero-dept-pill">{lecturer.branch} Faculty</span>
          {canEdit && (
            <button
              type="button"
              className="li-hero-edit-top-btn"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit lecturer profile"
            >
              <IconEdit style={{ width: 15, height: 15 }} />
              <span>Edit profile</span>
            </button>
          )}
        </div>

        <div className="li-hero-body">
          <div className="li-hero-avatar-row">
            <div className="li-hero-avatar-wrap">
              <UserAvatar
                user={lecturer}
                sizeClass="li-hero-avatar"
                onClick={() => setIsPhotoModalOpen(true)}
              />
              {canEdit && (
                <button
                  type="button"
                  className="li-avatar-camera-btn"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title={lecturer.photoUrl ? 'Change or remove profile photo' : 'Upload profile photo'}
                  aria-label="Manage profile photo"
                >
                  <IconCamera style={{ width: 16, height: 16 }} />
                </button>
              )}
            </div>

            {canEdit && (
              <div className="li-photo-quick-controls">
                <button
                  type="button"
                  className="li-btn-outline"
                  onClick={() => setIsPhotoModalOpen(true)}
                >
                  <IconCamera style={{ width: 15, height: 15 }} />
                  <span>{lecturer.photoUrl ? 'Change / Remove Photo' : 'Upload Photo'}</span>
                </button>
              </div>
            )}
          </div>

          <div className="li-hero-identity">
            <div className="li-hero-name-line">
              <h2 className="li-hero-name">{lecturer.name}</h2>
              <VerifiedBadge type={lecturer.verifiedType || 'gold'} />
              {lecturer.employeeId && (
                <span className="li-emp-id-badge">{lecturer.employeeId}</span>
              )}
            </div>

            <p className="li-hero-headline">
              {lecturer.headline || `${lecturer.designation} · ${lecturer.department}`}
            </p>

            <div className="li-hero-meta-row">
              <span>
                <IconMapPin style={{ width: 14, height: 14 }} />
                {lecturer.location || 'SMVITM Campus, Bantakal'}
              </span>
              {lecturer.experienceYears && (
                <>
                  <span className="post-dot">·</span>
                  <span>{lecturer.experienceYears} experience</span>
                </>
              )}
              <span className="post-dot">·</span>
              <button
                type="button"
                className="li-inline-link"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact info
              </button>
            </div>

            {/* Teaching Years Highlights */}
            {lecturer.yearsTaught && lecturer.yearsTaught.length > 0 && (
              <div className="li-hero-years-strip">
                <span className="li-years-label">Teaches:</span>
                {lecturer.yearsTaught.map((yr) => (
                  <span key={yr} className="li-year-pill">{yr}</span>
                ))}
                {lecturer.semestersTaught && lecturer.semestersTaught.length > 0 && (
                  <span className="li-sem-summary">
                    ({lecturer.semestersTaught.join(', ')})
                  </span>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="li-hero-actions">
              {canEdit && (
                <button
                  type="button"
                  className="li-btn-primary"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  <IconEdit style={{ width: 15, height: 15 }} />
                  <span>Edit Profile</span>
                </button>
              )}

              {lecturer.contact?.email && (
                <a
                  href={`mailto:${lecturer.contact.email}`}
                  className={canEdit ? 'li-btn-outline' : 'li-btn-primary'}
                >
                  <IconMail style={{ width: 15, height: 15 }} />
                  <span>Email Lecturer</span>
                </a>
              )}

              <button
                type="button"
                className="li-btn-outline"
                onClick={() => setIsContactModalOpen(true)}
              >
                <IconPhone style={{ width: 14, height: 14 }} />
                <span>Contact Details</span>
              </button>

              {onOpenCommunity && (
                <button
                  type="button"
                  className="li-btn-ghost"
                  onClick={() => onOpenCommunity(lecturer.branch)}
                >
                  <CommunityAvatar id={lecturer.branch} size={18} />
                  <span>s/{lecturer.branch}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About / Professional Info */}
      <section className="li-profile-card">
        <div className="li-section-header">
          <h3 className="li-section-title">About</h3>
          {canEdit && (
            <button
              type="button"
              className="li-section-edit-icon"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit About"
            >
              <IconEdit style={{ width: 15, height: 15 }} />
            </button>
          )}
        </div>
        <p className="li-about-text">
          {lecturer.about || 'Faculty member at SMVITM Bantakal.'}
        </p>
        <div className="li-about-highlights">
          <div className="li-highlight-item">
            <span className="li-highlight-label">Designation</span>
            <span className="li-highlight-val">{lecturer.designation || 'Faculty'}</span>
          </div>
          <div className="li-highlight-item">
            <span className="li-highlight-label">Department</span>
            <span className="li-highlight-val">{lecturer.department}</span>
          </div>
          <div className="li-highlight-item">
            <span className="li-highlight-label">Teaching Tenure</span>
            <span className="li-highlight-val">{lecturer.experienceYears || 'Academic Staff'}</span>
          </div>
        </div>
      </section>

      {/* Teaching Years & Subjects Handled */}
      <section className="li-profile-card">
        <div className="li-section-header">
          <div>
            <h3 className="li-section-title">Subjects Handled & Teaching Years</h3>
            <p className="li-section-sub">Courses taught across B.E. academic years</p>
          </div>
          {canEdit && (
            <button
              type="button"
              className="li-section-edit-icon"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit Subjects & Years"
            >
              <IconEdit style={{ width: 15, height: 15 }} />
            </button>
          )}
        </div>

        <div className="li-teaching-years-box">
          <div className="li-teaching-row">
            <span className="li-teaching-key">Years Taught:</span>
            <div className="li-teaching-pills">
              {lecturer.yearsTaught?.length > 0 ? (
                lecturer.yearsTaught.map((yr) => (
                  <span key={yr} className="li-year-badge-lg">{yr}</span>
                ))
              ) : (
                <span className="li-muted-text">Not specified</span>
              )}
            </div>
          </div>
          {lecturer.semestersTaught?.length > 0 && (
            <div className="li-teaching-row">
              <span className="li-teaching-key">Semesters:</span>
              <div className="li-teaching-pills">
                {lecturer.semestersTaught.map((sem) => (
                  <span key={sem} className="li-sem-badge">{sem}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="li-subjects-grid">
          {lecturer.subjects?.length > 0 ? (
            lecturer.subjects.map((sub, idx) => (
              <div key={`${sub.code}-${idx}`} className="li-subject-card">
                <div className="li-subject-icon">
                  <IconBook style={{ width: 18, height: 18 }} />
                </div>
                <div className="li-subject-body">
                  <div className="li-subject-top">
                    {sub.code && <span className="li-subject-code">{sub.code}</span>}
                    <span className="li-subject-type">{sub.type || 'Theory'}</span>
                  </div>
                  <div className="li-subject-name">{sub.name}</div>
                  <div className="li-subject-meta">
                    {[sub.year, sub.semester].filter(Boolean).join(' · ')}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="li-muted-text">No subjects listed yet.</p>
          )}
        </div>
      </section>

      {/* Education ("What all they have studied") */}
      <section className="li-profile-card">
        <div className="li-section-header">
          <div>
            <h3 className="li-section-title">Education</h3>
            <p className="li-section-sub">Academic degrees & qualifications</p>
          </div>
          {canEdit && (
            <button
              type="button"
              className="li-section-edit-icon"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit Education"
            >
              <IconEdit style={{ width: 15, height: 15 }} />
            </button>
          )}
        </div>

        <div className="li-timeline-list">
          {lecturer.education?.length > 0 ? (
            lecturer.education.map((edu, idx) => (
              <div key={idx} className="li-timeline-item">
                <div className="li-timeline-logo edu">
                  <IconGraduationCap style={{ width: 20, height: 20 }} />
                </div>
                <div className="li-timeline-content">
                  <h4 className="li-timeline-title">{edu.degree}</h4>
                  <div className="li-timeline-org">{edu.institution}</div>
                  {edu.year && <div className="li-timeline-date">{edu.year}</div>}
                  {edu.details && <p className="li-timeline-desc">{edu.details}</p>}
                </div>
              </div>
            ))
          ) : (
            <p className="li-muted-text">No education details added yet.</p>
          )}
        </div>
      </section>

      {/* Experience */}
      {lecturer.experience && lecturer.experience.length > 0 && (
        <section className="li-profile-card">
          <div className="li-section-header">
            <h3 className="li-section-title">Experience</h3>
            {canEdit && (
              <button
                type="button"
                className="li-section-edit-icon"
                onClick={() => setIsEditModalOpen(true)}
                title="Edit Experience"
              >
                <IconEdit style={{ width: 15, height: 15 }} />
              </button>
            )}
          </div>
          <div className="li-timeline-list">
            {lecturer.experience.map((ex, idx) => (
              <div key={idx} className="li-timeline-item">
                <div className="li-timeline-logo work">
                  <IconBriefcase style={{ width: 18, height: 18 }} />
                </div>
                <div className="li-timeline-content">
                  <h4 className="li-timeline-title">{ex.role}</h4>
                  <div className="li-timeline-org">{ex.organization}</div>
                  {ex.duration && <div className="li-timeline-date">{ex.duration}</div>}
                  {ex.description && <p className="li-timeline-desc">{ex.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact & Office Hours Card */}
      <section className="li-profile-card">
        <div className="li-section-header">
          <h3 className="li-section-title">Contact & Office Hours</h3>
          {canEdit && (
            <button
              type="button"
              className="li-section-edit-icon"
              onClick={() => setIsEditModalOpen(true)}
              title="Edit Contact Info"
            >
              <IconEdit style={{ width: 15, height: 15 }} />
            </button>
          )}
        </div>

        <div className="li-contact-grid">
          <div className="li-contact-item">
            <div className="li-contact-icon"><IconMail style={{ width: 16, height: 16 }} /></div>
            <div className="li-contact-text">
              <span className="li-contact-label">Official Email</span>
              <span className="li-contact-val">{lecturer.contact?.email || 'Not provided'}</span>
            </div>
            {lecturer.contact?.email && (
              <button
                type="button"
                className="li-copy-mini"
                onClick={() => handleCopy('email', lecturer.contact.email)}
                title="Copy email"
              >
                {copiedField === 'email' ? <IconCheck style={{ width: 14, height: 14, color: '#00ba7c' }} /> : <IconCopy style={{ width: 14, height: 14 }} />}
              </button>
            )}
          </div>

          <div className="li-contact-item">
            <div className="li-contact-icon"><IconPhone style={{ width: 16, height: 16 }} /></div>
            <div className="li-contact-text">
              <span className="li-contact-label">Phone / Intercom</span>
              <span className="li-contact-val">{lecturer.contact?.phone || 'Not provided'}</span>
            </div>
            {lecturer.contact?.phone && (
              <button
                type="button"
                className="li-copy-mini"
                onClick={() => handleCopy('phone', lecturer.contact.phone)}
                title="Copy phone"
              >
                {copiedField === 'phone' ? <IconCheck style={{ width: 14, height: 14, color: '#00ba7c' }} /> : <IconCopy style={{ width: 14, height: 14 }} />}
              </button>
            )}
          </div>

          <div className="li-contact-item">
            <div className="li-contact-icon"><IconMapPin style={{ width: 16, height: 16 }} /></div>
            <div className="li-contact-text">
              <span className="li-contact-label">Faculty Cabin / Office</span>
              <span className="li-contact-val">{lecturer.contact?.office || 'Department Staff Room'}</span>
            </div>
          </div>

          <div className="li-contact-item">
            <div className="li-contact-icon"><IconClock style={{ width: 16, height: 16 }} /></div>
            <div className="li-contact-text">
              <span className="li-contact-label">Student Consultation Hours</span>
              <span className="li-contact-val">{lecturer.contact?.officeHours || 'By appointment'}</span>
            </div>
          </div>
        </div>

        {(lecturer.contact?.linkedin || lecturer.contact?.scholar || lecturer.contact?.website) && (
          <div className="li-external-links-row">
            {lecturer.contact?.linkedin && (
              <a
                href={lecturer.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="li-ext-link-pill"
              >
                <span>LinkedIn</span>
                <IconExternal style={{ width: 13, height: 13 }} />
              </a>
            )}
            {lecturer.contact?.scholar && (
              <a
                href={lecturer.contact.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="li-ext-link-pill"
              >
                <span>Google Scholar</span>
                <IconExternal style={{ width: 13, height: 13 }} />
              </a>
            )}
            {lecturer.contact?.website && (
              <a
                href={lecturer.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="li-ext-link-pill"
              >
                <span>Department Portal</span>
                <IconExternal style={{ width: 13, height: 13 }} />
              </a>
            )}
          </div>
        )}
      </section>

      {/* Skills & Research Areas */}
      {lecturer.skills && lecturer.skills.length > 0 && (
        <section className="li-profile-card">
          <div className="li-section-header">
            <h3 className="li-section-title">Skills & Specializations</h3>
          </div>
          <div className="li-skills-wrap">
            {lecturer.skills.map((skill) => (
              <span key={skill} className="li-skill-pill">
                <IconAward style={{ width: 13, height: 13 }} />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Activity: Recent Notices Posted by this Lecturer */}
      <section className="li-profile-card">
        <div className="li-section-header">
          <div>
            <h3 className="li-section-title">Activity · Campus Notices</h3>
            <p className="li-section-sub">
              {lecturerNotices.length} {lecturerNotices.length === 1 ? 'notice' : 'notices'} published
            </p>
          </div>
        </div>

        {lecturerNotices.length === 0 ? (
          <p className="li-muted-text">No notices published by this lecturer yet.</p>
        ) : (
          <div className="li-activity-list">
            {lecturerNotices.map((notice) => (
              <div
                key={notice.id}
                className="li-activity-item"
                role={onSelectNoticeBranch ? 'button' : undefined}
                tabIndex={onSelectNoticeBranch ? 0 : undefined}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && onSelectNoticeBranch) {
                    e.preventDefault();
                    onSelectNoticeBranch(notice.branch);
                  }
                }}
                onClick={() => onSelectNoticeBranch && onSelectNoticeBranch(notice.branch)}
              >
                <div className="li-activity-top">
                  <span className={`category-badge cat-${(notice.category || '').toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                    {notice.category}
                  </span>
                  <span className="li-activity-branch">
                    {notice.branch === 'ALL' ? 's/all' : `s/${notice.branch}`}
                  </span>
                  <span className="li-activity-time">{notice.time}</span>
                </div>
                {notice.articleTitle && (
                  <strong className="li-activity-headline">{notice.articleTitle}</strong>
                )}
                <p className="li-activity-text">{notice.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact Info Modal (LinkedIn-style Contact Info popup) */}
      {isContactModalOpen && (
        <div
          className="confirm-modal-overlay"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsContactModalOpen(false);
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsContactModalOpen(false);
          }}
        >
          <div className="confirm-modal-box li-contact-modal">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="confirm-modal-title">{lecturer.name}</h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsContactModalOpen(false)}
                aria-label="Close contact dialog"
              >
                ×
              </button>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: -6 }}>
              Contact Info & Office Location
            </span>

            <div className="li-contact-modal-list">
              {lecturer.contact?.email && (
                <div className="li-contact-modal-row">
                  <IconMail style={{ width: 17, height: 17, color: 'var(--accent-color)' }} />
                  <div>
                    <small>Email</small>
                    <a href={`mailto:${lecturer.contact.email}`}>{lecturer.contact.email}</a>
                  </div>
                </div>
              )}
              {lecturer.contact?.phone && (
                <div className="li-contact-modal-row">
                  <IconPhone style={{ width: 17, height: 17, color: 'var(--accent-color)' }} />
                  <div>
                    <small>Phone</small>
                    <span>{lecturer.contact.phone}</span>
                  </div>
                </div>
              )}
              {lecturer.contact?.office && (
                <div className="li-contact-modal-row">
                  <IconMapPin style={{ width: 17, height: 17, color: 'var(--accent-color)' }} />
                  <div>
                    <small>Cabin / Room</small>
                    <span>{lecturer.contact.office}</span>
                  </div>
                </div>
              )}
              {lecturer.contact?.officeHours && (
                <div className="li-contact-modal-row">
                  <IconClock style={{ width: 17, height: 17, color: 'var(--accent-color)' }} />
                  <div>
                    <small>Office Hours</small>
                    <span>{lecturer.contact.officeHours}</span>
                  </div>
                </div>
              )}
              {lecturer.contact?.linkedin && (
                <div className="li-contact-modal-row">
                  <IconExternal style={{ width: 17, height: 17, color: 'var(--accent-color)' }} />
                  <div>
                    <small>LinkedIn</small>
                    <a href={lecturer.contact.linkedin} target="_blank" rel="noopener noreferrer">
                      {lecturer.contact.linkedin}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="btn-confirm-cancel"
              onClick={() => setIsContactModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Photo Upload / Remove Modal */}
      <ProfilePhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        lecturer={lecturer}
        canEdit={canEdit}
        onSavePhoto={onSavePhoto}
      />

      {/* Edit Lecturer Profile Modal */}
      <LecturerEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        lecturer={lecturer}
        onSaveProfile={onSaveProfile}
      />
    </div>
  );
}
