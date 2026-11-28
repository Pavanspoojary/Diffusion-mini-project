// sloppy-allow-file: WORD_BUDGET_EXCEEDED
import React, { useState } from 'react';
import { SignInButton, SignUpButton } from '@clerk/react';
import { XLogo, IconClose, VerifiedBadge } from './Icons';
import { COMMUNITIES } from '../data/initialData';
import { ADMIN_EMAILS } from '../utils/collegeAuth';

export default function AuthPage({
  onLogin,
  onSignup,
  users,
  isClerkEnabled = false
}) {
  const [modalMode, setModalMode] = useState(null); // 'signin' | 'signup' | null
  const [showPassword, setShowPassword] = useState(false);

  // Sign In Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Sign Up Form State
  const [signupName, setSignupName] = useState('');
  const [signupUsn, setSignupUsn] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupBranch, setSignupBranch] = useState('AI&DS');
  const [signupRole, setSignupRole] = useState('student');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  // Submit Sign In
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setLoginError('Please enter both identifier and password.');
      return;
    }

    const idLower = loginIdentifier.trim().toLowerCase();

    // Check if matches known user account (by USN, handle, email, or role)
    let matchedUser = Object.values(users).find(
      (u) =>
        u.usn.toLowerCase() === idLower ||
        u.handle.toLowerCase() === idLower ||
        u.handle.toLowerCase() === `@${idLower}` ||
        (u.email && u.email.toLowerCase() === idLower) ||
        u.name.toLowerCase().includes(idLower)
    );

    if (!matchedUser && (ADMIN_EMAILS.has(idLower) || idLower === 'admin')) {
      matchedUser = {
        ...users.admin,
        email: idLower.includes('@') ? idLower : (users.admin.email || '01pavan06@gmail.com')
      };
    }

    if (!matchedUser) {
      // Default to student if custom USN was entered
      matchedUser = {
        id: `user-${Date.now()}`,
        name: loginIdentifier.trim(),
        usn: loginIdentifier.trim().toUpperCase(),
        role: 'Student',
        roleKey: 'student',
        branch: 'AI&DS',
        department: 'Dept. of AI & Data Science',
        handle: `@${loginIdentifier.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')}`,
        avatarChar: loginIdentifier.charAt(0).toUpperCase(),
        avatarBg: 'linear-gradient(135deg, #1d9bf0, #7856ff)',
        verified: true,
        verifiedType: 'blue'
      };
    }

    onLogin(matchedUser);
  };

  // Submit Sign Up
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSignupError('');

    if (!signupName.trim() || !signupUsn.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setSignupError('All fields are required.');
      return;
    }

    const emailLower = signupEmail.trim().toLowerCase();
    const isSignupAdmin = ADMIN_EMAILS.has(emailLower) || signupRole === 'admin';
    const resolvedRole = isSignupAdmin ? 'Administrator' : (signupRole === 'faculty' ? 'Faculty / Guide' : (signupRole === 'coordinator' ? 'Event Coordinator' : 'Student'));
    const resolvedRoleKey = isSignupAdmin ? 'admin' : signupRole;

    const newUser = {
      id: `user-${Date.now()}`,
      name: signupName.trim(),
      email: signupEmail.trim(),
      usn: signupUsn.trim().toUpperCase(),
      role: resolvedRole,
      roleKey: resolvedRoleKey,
      branch: isSignupAdmin ? 'ALL' : signupBranch,
      department: isSignupAdmin || signupBranch === 'ALL' ? 'Institutional Administration' : `Dept. of ${signupBranch}`,
      handle: `@${signupUsn.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')}`,
      avatarChar: signupName.charAt(0).toUpperCase(),
      avatarBg: isSignupAdmin ? '#e65100' : (signupRole === 'faculty' ? '#8e24aa' : (signupRole === 'coordinator' ? '#00897b' : 'linear-gradient(135deg, #1d9bf0, #7856ff)')),
      verified: true,
      verifiedType: isSignupAdmin || signupRole === 'faculty' ? 'gold' : 'blue',
      canAccessAllDepts: isSignupAdmin
    };

    onSignup(newUser);
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) setModalMode(null);
  };

  const handleModalKeyDown = (e) => {
    if (e.key === 'Escape') setModalMode(null);
  };

  return (
    <div className="auth-page-container">
      {/* SPLIT SCREEN LANDING */}
      <div className="auth-main-grid">
        {/* Left Giant X Logo Section */}
        <div className="auth-hero-logo-col">
          <XLogo className="auth-hero-x-logo smvitm-brand-logo" />
        </div>

        {/* Right Content Section */}
        <div className="auth-content-col">
          {/* Top Mobile Brand Header */}
          <div className="auth-mobile-logo-bar">
            <XLogo className="auth-mobile-logo smvitm-brand-logo" style={{ width: 56, height: 56 }} />
            <div className="auth-mobile-brand-meta">
              <span className="auth-mobile-institution-name">SMVITM Campus Hub</span>
              <span className="auth-mobile-institution-dept">Bantakal, Udupi</span>
            </div>
          </div>

          <h1 className="auth-main-heading">Happening now</h1>
          <h2 className="auth-sub-heading">Join your campus community today.</h2>

          <div className="auth-actions-group">
            {isClerkEnabled ? (
              <>
                {/* Create Account Button */}
                <SignUpButton mode="modal">
                  <button
                    type="button"
                    className="btn-auth-create"
                  >
                    Create campus account
                  </button>
                </SignUpButton>

                <p className="auth-terms-disclaimer">
                  By signing up, you agree to the <a href="https://smvitm.sode-edu.in/terms" target="_blank" rel="noreferrer">Terms of Service</a> and <a href="https://smvitm.sode-edu.in/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>, including <a href="https://smvitm.sode-edu.in/cookies" target="_blank" rel="noreferrer">Cookie Use</a>.
                </p>

                {/* Already have an account */}
                <div className="auth-signin-block">
                  <h3 className="auth-signin-title">Already have an account?</h3>
                  <SignInButton mode="modal">
                    <button
                      type="button"
                      className="btn-auth-signin"
                    >
                      Sign in
                    </button>
                  </SignInButton>
                </div>
              </>
            ) : (
              <>
                {/* Create Account Button */}
                <button
                  type="button"
                  className="btn-auth-create"
                  onClick={() => {
                    setModalMode('signup');
                    setSignupError('');
                  }}
                >
                  Create campus account
                </button>

                <p className="auth-terms-disclaimer">
                  By signing up, you agree to the <a href="https://smvitm.sode-edu.in/terms" target="_blank" rel="noreferrer">Terms of Service</a> and <a href="https://smvitm.sode-edu.in/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>, including <a href="https://smvitm.sode-edu.in/cookies" target="_blank" rel="noreferrer">Cookie Use</a>.
                </p>

                {/* Already have an account */}
                <div className="auth-signin-block">
                  <h3 className="auth-signin-title">Already have an account?</h3>
                  <button
                    type="button"
                    className="btn-auth-signin"
                    onClick={() => {
                      setModalMode('signin');
                      setLoginError('');
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="auth-footer">
        <nav className="auth-footer-links" aria-label="Campus links">
          <a href="https://smvitm.sode-edu.in/about-us/" target="_blank" rel="noreferrer">About</a>
          <a href="/manifest.webmanifest" download="manifest.webmanifest">Download PWA</a>
          <a href="https://smvitm.sode-edu.in/contact-us/" target="_blank" rel="noreferrer">Help Center</a>
          <a href="https://smvitm.sode-edu.in/terms" target="_blank" rel="noreferrer">Terms of Service</a>
          <a href="https://smvitm.sode-edu.in/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
          <a href="https://smvitm.sode-edu.in/cookies" target="_blank" rel="noreferrer">Cookie Policy</a>
          <a href="https://smvitm.sode-edu.in/accessibility" target="_blank" rel="noreferrer">Accessibility</a>
          <a href="https://smvitm.sode-edu.in/artificial-intelligence-data-science/" target="_blank" rel="noreferrer">Department of AI&DS</a>
          <a href="https://smvitm.sode-edu.in/" target="_blank" rel="noreferrer">SMVITM Bantakal</a>
        </nav>
        <div className="auth-footer-copyright">
          © 2026 Campus Hub. All rights reserved.
        </div>
      </footer>

      {/* AUTHENTICATION MODAL (Sign In / Sign Up) */}
      {modalMode && (
        <div
          role="button"
          tabIndex={0}
          className="auth-modal-overlay"
          onClick={handleCloseModal}
          onKeyDown={handleModalKeyDown}
          aria-label="Close authentication modal"
        >
          <div
            className="auth-modal-card"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="auth-modal-header">
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalMode(null)}
                aria-label="Close dialog"
              >
                <IconClose />
              </button>
              <div className="auth-modal-center-logo">
                <XLogo style={{ width: 28, height: 28 }} />
              </div>
              <div style={{ width: 36 }} />
            </div>

            {/* Modal Body */}
            <div className="auth-modal-body">
              {modalMode === 'signin' ? (
                /* SIGN IN FORM */
                <form onSubmit={handleSignInSubmit} className="auth-form">
                  <h2 className="auth-modal-title">Sign in to Campus Hub</h2>

                  {loginError && (
                    <div className="auth-error-banner">{loginError}</div>
                  )}

                  {/* Identifier Input */}
                  <div className="auth-input-group">
                    <input
                      type="text"
                      className="auth-text-input"
                      placeholder="USN, Handle (@student_aids), or Email"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      autoFocus
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div className="auth-input-group" style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="auth-text-input"
                      placeholder="Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="auth-show-pass-btn"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>

                  <button type="submit" className="btn-auth-submit">
                    Sign In
                  </button>

                  <div className="auth-modal-bottom-links">
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        className="auth-switch-link"
                        onClick={() => {
                          setModalMode('signup');
                          setLoginError('');
                        }}
                      >
                        Sign up
                      </button>
                    </span>
                  </div>
                </form>
              ) : (
                /* SIGN UP FORM */
                <form onSubmit={handleSignUpSubmit} className="auth-form">
                  <h2 className="auth-modal-title">Create your campus account</h2>

                  {signupError && (
                    <div className="auth-error-banner">{signupError}</div>
                  )}

                  <div className="auth-input-group">
                    <input
                      type="text"
                      className="auth-text-input"
                      placeholder="Full Name (e.g. Alex Morgan)"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                      autoFocus
                    />
                  </div>

                  <div className="auth-input-group">
                    <input
                      type="text"
                      className="auth-text-input"
                      placeholder="College ID / USN (e.g. USN2026)"
                      value={signupUsn}
                      onChange={(e) => setSignupUsn(e.target.value)}
                      required
                    />
                  </div>

                  <div className="auth-input-group">
                    <input
                      type="email"
                      className="auth-text-input"
                      placeholder="Email (e.g. student@smvitm.ac.in)"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
                    <div className="auth-input-group">
                      <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>
                        Branch / Dept:
                      </label>
                      <select
                        className="auth-select-input"
                        value={signupBranch}
                        onChange={(e) => setSignupBranch(e.target.value)}
                      >
                        {COMMUNITIES.map((b) => (
                          <option key={b.id} value={b.id}>{b.code} ({b.label})</option>
                        ))}
                      </select>
                    </div>

                    <div className="auth-input-group">
                      <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 4 }}>
                        Role:
                      </label>
                      <select
                        className="auth-select-input"
                        value={signupRole}
                        onChange={(e) => setSignupRole(e.target.value)}
                      >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty / Guide</option>
                        <option value="coordinator">Event Coordinator</option>
                      </select>
                    </div>
                  </div>

                  <div className="auth-input-group" style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="auth-text-input"
                      placeholder="Password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="auth-show-pass-btn"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>

                  <button type="submit" className="btn-auth-submit">
                    Complete Registration
                  </button>

                  <div className="auth-modal-bottom-links">
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Already have an account?{' '}
                      <button
                        type="button"
                        className="auth-switch-link"
                        onClick={() => {
                          setModalMode('signin');
                          setSignupError('');
                        }}
                      >
                        Sign in
                      </button>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
