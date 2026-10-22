import React, { useState } from 'react';
import { XLogo, IconClose, VerifiedBadge } from './Icons';
import { BRANCHES } from '../data/initialData';

export default function AuthPage({
  onLogin,
  onSignup,
  users
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

  // Handle Quick Demo Login
  const handleQuickDemo = (roleKey) => {
    const user = users[roleKey];
    if (user) {
      onLogin(user);
    }
  };

  // Submit Sign In
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginIdentifier.trim() || !loginPassword.trim()) {
      setLoginError('Please enter both identifier and password.');
      return;
    }

    const idLower = loginIdentifier.trim().toLowerCase();

    // Check if matches known demo user (by USN, handle, or role)
    let matchedUser = Object.values(users).find(
      (u) =>
        u.usn.toLowerCase() === idLower ||
        u.handle.toLowerCase() === idLower ||
        u.handle.toLowerCase() === `@${idLower}` ||
        u.name.toLowerCase().includes(idLower)
    );

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

    const newUser = {
      id: `user-${Date.now()}`,
      name: signupName.trim(),
      usn: signupUsn.trim().toUpperCase(),
      role: signupRole === 'faculty' ? 'Faculty / Guide' : (signupRole === 'coordinator' ? 'Event Coordinator' : 'Student'),
      roleKey: signupRole,
      branch: signupBranch,
      department: signupBranch === 'ALL' ? 'Institutional Administration' : `Dept. of ${signupBranch}`,
      handle: `@${signupUsn.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')}`,
      avatarChar: signupName.charAt(0).toUpperCase(),
      avatarBg: signupRole === 'faculty' ? '#8e24aa' : (signupRole === 'coordinator' ? '#00897b' : 'linear-gradient(135deg, #1d9bf0, #7856ff)'),
      verified: true,
      verifiedType: signupRole === 'faculty' ? 'gold' : 'blue'
    };

    onSignup(newUser);
  };

  return (
    <div className="auth-page-container">
      {/* SPLIT SCREEN LANDING */}
      <div className="auth-main-grid">
        {/* Left Giant X Logo Section */}
        <div className="auth-hero-logo-col">
          <XLogo className="auth-hero-x-logo" />
        </div>

        {/* Right Content Section */}
        <div className="auth-content-col">
          {/* Top Mobile Logo */}
          <div className="auth-mobile-logo-bar">
            <XLogo style={{ width: 40, height: 40 }} />
          </div>

          <h1 className="auth-main-heading">Happening now</h1>
          <h2 className="auth-sub-heading">Join your campus community today.</h2>

          <div className="auth-actions-group">
            {/* Campus SSO Button */}
            <button
              type="button"
              className="btn-auth-sso"
              onClick={() => handleQuickDemo('student')}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 18, height: 18, fill: 'currentColor' }}>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              <span>Sign in with SMVITM SSO</span>
            </button>

            {/* Divider */}
            <div className="auth-divider-line">
              <span>or</span>
            </div>

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
              By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
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

            {/* Evaluator / Quick Demo Roster */}
            <div className="auth-quick-demo-box">
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                1-Click Role Login
              </div>
              <div className="quick-demo-chips">
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => handleQuickDemo('student')}
                  title="Student (AI&DS)"
                >
                  Student (AI&DS)
                </button>
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => handleQuickDemo('faculty')}
                  title="Faculty"
                >
                  Faculty
                </button>
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => handleQuickDemo('coordinator')}
                  title="Event Coordinator"
                >
                  Coordinator
                </button>
                <button
                  type="button"
                  className="demo-chip"
                  onClick={() => handleQuickDemo('admin')}
                  title="Campus Admin"
                >
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="auth-footer">
        <div className="auth-footer-links">
          <a href="#">About</a>
          <a href="#">Download PWA</a>
          <a href="#">Help Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Department of AI&DS</a>
          <a href="#">SMVITM Bantakal</a>
        </div>
        <div className="auth-footer-copyright">
          © 2026 Campus Hub / X. All rights reserved.
        </div>
      </footer>

      {/* AUTHENTICATION MODAL (Sign In / Sign Up) */}
      {modalMode && (
        <div className="auth-modal-overlay" onClick={() => setModalMode(null)}>
          <div
            className="auth-modal-card"
            onClick={(e) => e.stopPropagation()}
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
                        {BRANCHES.map((b) => (
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
