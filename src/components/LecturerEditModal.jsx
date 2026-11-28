// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState, useEffect, useRef } from 'react';
import { IconClose, IconPlus, IconTrash } from './Icons';
import { BRANCHES, TEACHING_YEAR_OPTIONS } from '../data/initialData';

const SEMESTER_OPTIONS = [
  '1st Sem',
  '2nd Sem',
  '3rd Sem',
  '4th Sem',
  '5th Sem',
  '6th Sem',
  '7th Sem',
  '8th Sem'
];

function getInitialForm(lecturer) {
  if (!lecturer) {
    return {
      name: '',
      designation: '',
      headline: '',
      branch: 'AI&DS',
      department: '',
      employeeId: '',
      location: 'SMVITM Campus, Bantakal, Udupi',
      experienceYears: '',
      about: '',
      contact: {
        email: '',
        phone: '',
        office: '',
        officeHours: '',
        linkedin: '',
        scholar: '',
        website: ''
      },
      yearsTaught: [],
      semestersTaught: [],
      subjects: [],
      education: [],
      experience: [],
      skills: []
    };
  }
  return {
    name: lecturer.name || '',
    designation: lecturer.designation || '',
    headline: lecturer.headline || '',
    branch: lecturer.branch || 'AI&DS',
    department: lecturer.department || '',
    employeeId: lecturer.employeeId || '',
    location: lecturer.location || 'SMVITM Campus, Bantakal, Udupi',
    experienceYears: lecturer.experienceYears || '',
    about: lecturer.about || '',
    contact: {
      email: lecturer.contact?.email || '',
      phone: lecturer.contact?.phone || '',
      office: lecturer.contact?.office || '',
      officeHours: lecturer.contact?.officeHours || '',
      linkedin: lecturer.contact?.linkedin || '',
      scholar: lecturer.contact?.scholar || '',
      website: lecturer.contact?.website || ''
    },
    yearsTaught: Array.isArray(lecturer.yearsTaught) ? [...lecturer.yearsTaught] : [],
    semestersTaught: Array.isArray(lecturer.semestersTaught) ? [...lecturer.semestersTaught] : [],
    subjects: Array.isArray(lecturer.subjects)
      ? lecturer.subjects.map((s) => ({ ...s }))
      : [],
    education: Array.isArray(lecturer.education)
      ? lecturer.education.map((e) => ({ ...e }))
      : [],
    experience: Array.isArray(lecturer.experience)
      ? lecturer.experience.map((ex) => ({ ...ex }))
      : [],
    skills: Array.isArray(lecturer.skills) ? [...lecturer.skills] : []
  };
}

export default function LecturerEditModal({
  isOpen,
  onClose,
  lecturer,
  onSaveProfile
}) {
  const [activeSection, setActiveSection] = useState('intro'); // 'intro' | 'contact' | 'teaching' | 'education'
  const [form, setForm] = useState(() => getInitialForm(lecturer));
  const [skillInput, setSkillInput] = useState('');
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && lecturer) {
      setActiveSection('intro');
      setSkillInput('');
      setForm(getInitialForm(lecturer));
    }
  }, [isOpen, lecturer]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        try {
          dialog.showModal();
        } catch {
          dialog.setAttribute('open', '');
        }
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Lock background scrolling while editing profile
  useEffect(() => {
    if (!isOpen) return;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen || !lecturer) return null;

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateContact = (field, value) => {
    setForm((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  const toggleYear = (year) => {
    setForm((prev) => {
      const exists = prev.yearsTaught.includes(year);
      return {
        ...prev,
        yearsTaught: exists
          ? prev.yearsTaught.filter((y) => y !== year)
          : [...prev.yearsTaught, year]
      };
    });
  };

  const toggleSemester = (sem) => {
    setForm((prev) => {
      const exists = prev.semestersTaught.includes(sem);
      return {
        ...prev,
        semestersTaught: exists
          ? prev.semestersTaught.filter((s) => s !== sem)
          : [...prev.semestersTaught, sem]
      };
    });
  };

  const handleAddSubject = () => {
    setForm((prev) => ({
      ...prev,
      subjects: [
        ...prev.subjects,
        { code: '', name: '', year: '2nd Year', semester: '3rd Sem', type: 'Theory + Lab' }
      ]
    }));
  };

  const handleUpdateSubject = (index, field, value) => {
    setForm((prev) => ({
      ...prev,
      subjects: prev.subjects.map((sub, i) => (i === index ? { ...sub, [field]: value } : sub))
    }));
  };

  const handleRemoveSubject = (index) => {
    setForm((prev) => ({
      ...prev,
      subjects: prev.subjects.filter((_, i) => i !== index)
    }));
  };

  const handleAddEducation = () => {
    setForm((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: '', institution: '', year: '', details: '' }
      ]
    }));
  };

  const handleUpdateEducation = (index, field, value) => {
    setForm((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu))
    }));
  };

  const handleRemoveEducation = (index) => {
    setForm((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleAddExperience = () => {
    setForm((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { role: '', organization: 'SMVITM, Bantakal', duration: '', description: '' }
      ]
    }));
  };

  const handleUpdateExperience = (index, field, value) => {
    setForm((prev) => ({
      ...prev,
      experience: prev.experience.map((ex, i) => (i === index ? { ...ex, [field]: value } : ex))
    }));
  };

  const handleRemoveExperience = (index) => {
    setForm((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleAddSkill = () => {
    const clean = skillInput.trim();
    if (!clean) return;
    if (!form.skills.includes(clean)) {
      setForm((prev) => ({ ...prev, skills: [...prev.skills, clean] }));
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    const cleanSubjects = form.subjects.filter((s) => s.name.trim() || s.code.trim());
    const cleanEducation = form.education.filter((ed) => ed.degree.trim() || ed.institution.trim());
    const cleanExperience = form.experience.filter((ex) => ex.role.trim() || ex.organization.trim());
    const cleanName = form.name.trim();

    onSaveProfile({
      ...lecturer,
      name: cleanName,
      avatarChar: cleanName.replace(/^(Dr\.|Prof\.)\s*/i, '').charAt(0).toUpperCase() || cleanName.charAt(0).toUpperCase(),
      designation: form.designation.trim(),
      headline: form.headline.trim(),
      branch: form.branch,
      department: form.department.trim(),
      employeeId: form.employeeId.trim(),
      location: form.location.trim(),
      experienceYears: form.experienceYears.trim(),
      about: form.about.trim(),
      contact: {
        email: form.contact.email.trim(),
        phone: form.contact.phone.trim(),
        office: form.contact.office.trim(),
        officeHours: form.contact.officeHours.trim(),
        linkedin: form.contact.linkedin.trim(),
        scholar: form.contact.scholar.trim(),
        website: form.contact.website.trim()
      },
      yearsTaught: form.yearsTaught,
      semestersTaught: form.semestersTaught,
      subjects: cleanSubjects,
      education: cleanEducation,
      experience: cleanExperience,
      skills: form.skills
    });
    onClose();
  };

  return (
    <dialog
      ref={(el) => {
        dialogRef.current = el;
        if (el && isOpen && !el.open) {
          try {
            el.showModal();
          } catch {
            el.setAttribute('open', '');
          }
        }
      }}
      closedby="any"
      className="x-modal li-edit-profile-modal"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="modal-dialog-content">
        <div className="modal-header">
          <h2 className="modal-heading">Edit Lecturer Profile</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <IconClose />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="li-edit-tabs" role="tablist">
          {[
            { id: 'intro', label: 'Intro & Bio' },
            { id: 'contact', label: 'Contact' },
            { id: 'teaching', label: 'Subjects & Years' },
            { id: 'education', label: 'Education & Work' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`li-edit-tab-btn ${activeSection === tab.id ? 'active' : ''}`}
              onClick={() => setActiveSection(tab.id)}
              role="tab"
              aria-selected={activeSection === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="li-edit-form">
          <div className="li-edit-scroll-body">
            {activeSection === 'intro' && (
              <div className="li-edit-fields">
                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Full Name *</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="e.g. Dr. Raghavendra Bhat"
                      required
                    />
                  </label>
                  <label className="li-field">
                    <span>Faculty / Employee ID</span>
                    <input
                      type="text"
                      value={form.employeeId}
                      onChange={(e) => updateField('employeeId', e.target.value)}
                      placeholder="e.g. FAC-AI-012"
                    />
                  </label>
                </div>

                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Designation / Role</span>
                    <input
                      type="text"
                      value={form.designation}
                      onChange={(e) => updateField('designation', e.target.value)}
                      placeholder="e.g. Associate Professor & HOD"
                    />
                  </label>
                  <label className="li-field">
                    <span>Years of Teaching Experience</span>
                    <input
                      type="text"
                      value={form.experienceYears}
                      onChange={(e) => updateField('experienceYears', e.target.value)}
                      placeholder="e.g. 11+ years"
                    />
                  </label>
                </div>

                <label className="li-field">
                  <span>LinkedIn Headline</span>
                  <input
                    type="text"
                    value={form.headline}
                    onChange={(e) => updateField('headline', e.target.value)}
                    placeholder="e.g. Associate Professor · Dept. of AI & DS | Deep Learning & Vision"
                  />
                </label>

                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Branch / Department Code</span>
                    <select
                      value={form.branch}
                      onChange={(e) => {
                        const code = e.target.value;
                        const matched = BRANCHES.find((b) => b.id === code);
                        updateField('branch', code);
                        if (matched) {
                          updateField('department', `Dept. of ${matched.label}`);
                        }
                      }}
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id}>{b.code} — {b.label}</option>
                      ))}
                    </select>
                  </label>
                  <label className="li-field">
                    <span>Department Display Name</span>
                    <input
                      type="text"
                      value={form.department}
                      onChange={(e) => updateField('department', e.target.value)}
                      placeholder="Dept. of AI & Data Science"
                    />
                  </label>
                </div>

                <label className="li-field">
                  <span>Campus Location</span>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="SMVITM Campus, Bantakal, Udupi"
                  />
                </label>

                <label className="li-field">
                  <span>About (Professional Summary & Research Focus)</span>
                  <textarea
                    rows={4}
                    value={form.about}
                    onChange={(e) => updateField('about', e.target.value)}
                    placeholder="Describe teaching focus, research specializations, projects guided..."
                  />
                </label>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="li-edit-fields">
                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Official Email</span>
                    <input
                      type="email"
                      value={form.contact.email}
                      onChange={(e) => updateContact('email', e.target.value)}
                      placeholder="name@smvitm.ac.in"
                    />
                  </label>
                  <label className="li-field">
                    <span>Phone / Intercom</span>
                    <input
                      type="text"
                      value={form.contact.phone}
                      onChange={(e) => updateContact('phone', e.target.value)}
                      placeholder="+91 98450 00000"
                    />
                  </label>
                </div>

                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Cabin / Office Room</span>
                    <input
                      type="text"
                      value={form.contact.office}
                      onChange={(e) => updateContact('office', e.target.value)}
                      placeholder="Academic Block B · Room 304"
                    />
                  </label>
                  <label className="li-field">
                    <span>Student Consultation / Office Hours</span>
                    <input
                      type="text"
                      value={form.contact.officeHours}
                      onChange={(e) => updateContact('officeHours', e.target.value)}
                      placeholder="Mon – Fri · 3:00 PM – 4:30 PM"
                    />
                  </label>
                </div>

                <label className="li-field">
                  <span>LinkedIn Profile URL</span>
                  <input
                    type="url"
                    value={form.contact.linkedin}
                    onChange={(e) => updateContact('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                  />
                </label>

                <div className="li-edit-grid-2">
                  <label className="li-field">
                    <span>Google Scholar / ORCID URL</span>
                    <input
                      type="url"
                      value={form.contact.scholar}
                      onChange={(e) => updateContact('scholar', e.target.value)}
                      placeholder="https://scholar.google.com/..."
                    />
                  </label>
                  <label className="li-field">
                    <span>Personal / Department Website</span>
                    <input
                      type="url"
                      value={form.contact.website}
                      onChange={(e) => updateContact('website', e.target.value)}
                      placeholder="https://smvitm.ac.in/..."
                    />
                  </label>
                </div>
              </div>
            )}

            {activeSection === 'teaching' && (
              <div className="li-edit-fields">
                <div className="li-field">
                  <span>Years They Teach</span>
                  <div className="li-chip-select-grid">
                    {TEACHING_YEAR_OPTIONS.map((yr) => {
                      const selected = form.yearsTaught.includes(yr);
                      return (
                        <button
                          key={yr}
                          type="button"
                          className={`li-chip-toggle ${selected ? 'selected' : ''}`}
                          onClick={() => toggleYear(yr)}
                        >
                          {yr}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="li-field">
                  <span>Semesters Handled</span>
                  <div className="li-chip-select-grid">
                    {SEMESTER_OPTIONS.map((sem) => {
                      const selected = form.semestersTaught.includes(sem);
                      return (
                        <button
                          key={sem}
                          type="button"
                          className={`li-chip-toggle ${selected ? 'selected' : ''}`}
                          onClick={() => toggleSemester(sem)}
                        >
                          {sem}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="li-edit-list-header">
                  <span>Subjects Handled ({form.subjects.length})</span>
                  <button type="button" className="li-add-row-btn" onClick={handleAddSubject}>
                    <IconPlus style={{ width: 14, height: 14 }} />
                    <span>Add subject</span>
                  </button>
                </div>

                <div className="li-edit-cards-stack">
                  {form.subjects.map((sub, idx) => (
                    <div key={idx} className="li-edit-repeat-card">
                      <div className="li-edit-repeat-top">
                        <strong>Subject #{idx + 1}</strong>
                        <button
                          type="button"
                          className="li-remove-row-btn"
                          onClick={() => handleRemoveSubject(idx)}
                          aria-label="Remove subject"
                        >
                          <IconTrash style={{ width: 14, height: 14 }} />
                        </button>
                      </div>
                      <div className="li-edit-grid-2">
                        <input
                          type="text"
                          placeholder="Code (e.g. BAD502)"
                          value={sub.code}
                          onChange={(e) => handleUpdateSubject(idx, 'code', e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Subject Name"
                          value={sub.name}
                          onChange={(e) => handleUpdateSubject(idx, 'name', e.target.value)}
                        />
                      </div>
                      <div className="li-edit-grid-3">
                        <select
                          value={sub.year || '2nd Year'}
                          onChange={(e) => handleUpdateSubject(idx, 'year', e.target.value)}
                        >
                          {TEACHING_YEAR_OPTIONS.map((y) => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        <select
                          value={sub.semester || '3rd Sem'}
                          onChange={(e) => handleUpdateSubject(idx, 'semester', e.target.value)}
                        >
                          {SEMESTER_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <select
                          value={sub.type || 'Theory + Lab'}
                          onChange={(e) => handleUpdateSubject(idx, 'type', e.target.value)}
                        >
                          <option value="Theory">Theory</option>
                          <option value="Lab">Lab</option>
                          <option value="Theory + Lab">Theory + Lab</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="li-edit-fields">
                <div className="li-edit-list-header">
                  <span>Education — Degrees & Qualifications ({form.education.length})</span>
                  <button type="button" className="li-add-row-btn" onClick={handleAddEducation}>
                    <IconPlus style={{ width: 14, height: 14 }} />
                    <span>Add degree</span>
                  </button>
                </div>

                <div className="li-edit-cards-stack">
                  {form.education.map((edu, idx) => (
                    <div key={idx} className="li-edit-repeat-card">
                      <div className="li-edit-repeat-top">
                        <strong>Qualification #{idx + 1}</strong>
                        <button
                          type="button"
                          className="li-remove-row-btn"
                          onClick={() => handleRemoveEducation(idx)}
                          aria-label="Remove education"
                        >
                          <IconTrash style={{ width: 14, height: 14 }} />
                        </button>
                      </div>
                      <input
                        type="text"
                        placeholder="Degree & Field (e.g. Ph.D. in Artificial Intelligence)"
                        value={edu.degree}
                        onChange={(e) => handleUpdateEducation(idx, 'degree', e.target.value)}
                      />
                      <div className="li-edit-grid-2">
                        <input
                          type="text"
                          placeholder="University / College"
                          value={edu.institution}
                          onChange={(e) => handleUpdateEducation(idx, 'institution', e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Years (e.g. 2017 – 2021)"
                          value={edu.year}
                          onChange={(e) => handleUpdateEducation(idx, 'year', e.target.value)}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Honors / Thesis / Specialization (optional)"
                        value={edu.details || ''}
                        onChange={(e) => handleUpdateEducation(idx, 'details', e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="li-edit-list-header" style={{ marginTop: 12 }}>
                  <span>Academic Experience ({form.experience.length})</span>
                  <button type="button" className="li-add-row-btn" onClick={handleAddExperience}>
                    <IconPlus style={{ width: 14, height: 14 }} />
                    <span>Add role</span>
                  </button>
                </div>

                <div className="li-edit-cards-stack">
                  {form.experience.map((ex, idx) => (
                    <div key={idx} className="li-edit-repeat-card">
                      <div className="li-edit-repeat-top">
                        <strong>Role #{idx + 1}</strong>
                        <button
                          type="button"
                          className="li-remove-row-btn"
                          onClick={() => handleRemoveExperience(idx)}
                          aria-label="Remove experience"
                        >
                          <IconTrash style={{ width: 14, height: 14 }} />
                        </button>
                      </div>
                      <div className="li-edit-grid-2">
                        <input
                          type="text"
                          placeholder="Role / Title"
                          value={ex.role}
                          onChange={(e) => handleUpdateExperience(idx, 'role', e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Duration (e.g. 2021 – Present)"
                          value={ex.duration}
                          onChange={(e) => handleUpdateExperience(idx, 'duration', e.target.value)}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Institution / Organization"
                        value={ex.organization}
                        onChange={(e) => handleUpdateExperience(idx, 'organization', e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Brief responsibilities"
                        value={ex.description || ''}
                        onChange={(e) => handleUpdateExperience(idx, 'description', e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="li-field" style={{ marginTop: 8 }}>
                  <span>Skills & Research Areas</span>
                  <div className="li-skill-input-row">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder="Add skill or research area (e.g. Deep Learning)"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                    />
                    <button type="button" className="li-link-add" onClick={handleAddSkill}>
                      Add
                    </button>
                  </div>
                  {form.skills.length > 0 && (
                    <div className="li-edit-skills-list">
                      {form.skills.map((skill) => (
                        <span key={skill} className="li-edit-skill-chip">
                          <span>{skill}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            aria-label={`Remove ${skill}`}
                          >
                            <IconClose style={{ width: 12, height: 12 }} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="li-edit-modal-footer">
            <button
              type="button"
              className="btn-confirm-cancel"
              style={{ width: 'auto', padding: '9px 18px' }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="li-post-btn">
              Save profile
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
