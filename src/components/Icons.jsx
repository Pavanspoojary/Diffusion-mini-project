import React from 'react';

export const XLogo = ({ className = 'x-logo', style = {} }) => (
  <img
    src="/smvitm-logo.png"
    alt="SMVITM Logo"
    className={`smvitm-brand-logo ${className}`}
    style={{
      objectFit: 'contain',
      display: 'inline-block',
      ...style
    }}
  />
);

export const CollegeLogo = XLogo;
export const SMVITMLogo = XLogo;

export const IconAnnouncements = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .504.42 1.013 1 1.013h6.5v-7h5v7h6.5c.58 0 1-.509 1-1.013V7.903c0-.301-.15-.584-.409-.757z" fill="currentColor" />
  </svg>
);

export const IconEvents = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M6 3V1h2v2h8V1h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1zm13 6H5v10h14V9zm-2 4h-4v4h4v-4z" fill="currentColor" />
  </svg>
);

export const IconWebsites = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8zm3.98 11.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM10.27 14c-.09-.66-.15-1.32-.15-2s.06-1.34.15-2h3.46c.09.66.15 1.32.15 2s-.06 1.34-.15 2zm5.71 5.56A15.65 15.65 0 0 0 17.36 16h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z" fill="currentColor" />
  </svg>
);

export const IconNotifications = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19.993 9.042C19.48 5.017 16.054 2 12 2s-7.48 3.017-7.993 7.042A8.156 8.156 0 0 0 2 16.5c0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5 0-3.18-1.834-5.918-2.007-7.458zm-1.986 7.458c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5 0-2.31 1.583-4.764 1.956-6.852C7.387 6.136 9.458 4 12 4s4.613 2.136 5.037 5.648c.373 2.088 1.956 4.542 1.956 6.852zM9.5 21a2.5 2.5 0 0 0 5 0h-5z" fill="currentColor" />
  </svg>
);

export const IconBookmarks = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v16.71a.75.75 0 0 1-1.215.59L12 16.48l-6.785 5.32a.75.75 0 0 1-1.215-.59V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.49l5.535-4.34a.75.75 0 0 1 .93 0L18 18.99V4.5c0-.28-.224-.5-.5-.5h-11z" fill="currentColor" />
  </svg>
);

export const IconQR = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm-5 0h3v3h-3v-3zm2 5h3v3h-3v-3zm3 0h3v3h-3v-3zm-2-2h2v2h-2v-2z" fill="currentColor" />
  </svg>
);

export const IconProfile = ({ className = 'nav-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM9 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-5 13.5v-1.5A5.5 5.5 0 0 1 9.5 14h5a5.5 5.5 0 0 1 5.5 5.5V21h-2v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5a3.5 3.5 0 0 0-3.5 3.5V21H4z" fill="currentColor" />
  </svg>
);

export const IconSidebarToggle = ({ className = 'icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M9 3.5v17" />
  </svg>
);

export const IconCommunity = ({ className = 'icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const VerifiedBadge = ({ type = 'blue', className = 'badge-icon' }) => (
  <svg viewBox="0 0 22 22" aria-hidden="true" className={`${className} ${type === 'gold' ? 'verified-gold' : 'verified-blue'}`}>
    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.136 2.136 5.485-5.58 1.302 1.293-6.787 6.88z" fill="currentColor" />
  </svg>
);

export const IconSearch = ({ className = 'search-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M10.25 3.75a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm-8.5 6.5a8.5 8.5 0 1 1 15.176 5.262l4.781 4.781-1.414 1.414-4.781-4.781A8.5 8.5 0 0 1 1.75 10.25z" fill="currentColor" />
  </svg>
);

export const IconHeart = ({ filled = false, className = 'action-icon' }) => filled ? (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={{ fill: 'var(--like-color)' }}>
    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" />
  </svg>
) : (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.807 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-2.415.11-4.304 2.08-4.304 4.58 0 4.39 5.868 9.29 9 11.23 3.132-1.94 9-6.84 9-11.23 0-2.5-1.889-4.47-4.303-4.58zm-4.697 13.92C8.75 17.29 5 13.1 5 10.08c0-1.45 1.07-2.58 2.39-2.63.99-.04 2.17.47 3.01 1.76l1.6 2.18 1.6-2.18c.84-1.29 2.02-1.8 3.01-1.76 1.32.05 2.39 1.18 2.39 2.63 0 3.02-3.75 7.21-7 9.34z" fill="currentColor" />
  </svg>
);

export const IconRepost = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 20.12l-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14z" fill="currentColor" />
  </svg>
);

export const IconReply = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-1.602.88 1.157 2.65c.294.67-.197 1.43-.923 1.43H8.25C4.664 22.2 1.751 19.28 1.751 15.7V10zm8.005-6c-3.317 0-6.005 2.69-6.005 6v5.7c0 2.48 2.02 4.5 4.5 4.5h5.539l-.74-1.69c-.312-.72-.057-1.56.59-1.92 2.14-1.18 3.46-3.41 3.46-5.86 0-3.38-2.75-6.13-6.13-6.13H9.756z" fill="currentColor" />
  </svg>
);

export const IconBookmarkAction = ({ filled = false, className = 'action-icon' }) => filled ? (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={{ fill: 'var(--accent-color)' }}>
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v16.71a.75.75 0 0 1-1.215.59L12 16.48l-6.785 5.32a.75.75 0 0 1-1.215-.59V4.5z" />
  </svg>
) : (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v16.71a.75.75 0 0 1-1.215.59L12 16.48l-6.785 5.32a.75.75 0 0 1-1.215-.59V4.5zm2.5-.5a.5.5 0 0 0-.5.5v14.49l5.535-4.34a.75.75 0 0 1 .93 0L18 18.99V4.5c0-.28-.224-.5-.5-.5h-11z" fill="currentColor" />
  </svg>
);

export const IconShare = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41L7.71 9.71 6.3 8.29 12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21.01 3 19.9 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" fill="currentColor" />
  </svg>
);

export const IconClose = ({ className = 'icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" fill="currentColor" />
  </svg>
);

export const IconMore = ({ className = 'icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="currentColor" />
  </svg>
);

export const IconMedia = ({ className = 'tool-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.41 0 .75.34.75.75v9.64l-4.14-4.14c-.68-.68-1.79-.68-2.47 0l-5.64 5.64-1.64-1.64c-.68-.68-1.79-.68-2.47 0L3.5 14.36V4.25c0-.41.34-.75.75-.75zm15.5 17H4.25a.75.75 0 0 1-.75-.75v-4.04l2.5-2.5a.25.25 0 0 1 .35 0l1.64 1.64c.68.68 1.79.68 2.47 0l5.64-5.64a.25.25 0 0 1 .35 0l4.65 4.65v5.89c0 .41-.34.75-.75.75zM7.5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
  </svg>
);

export const IconPrinter = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="currentColor" />
  </svg>
);

export const IconDatabase = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm0 16c-4.42 0-8-1.34-8-2v-2.23c1.78 1.02 4.69 1.63 8 1.63s6.22-.61 8-1.63V18c0 .66-3.58 2-8 2zm0-5c-4.42 0-8-1.34-8-2v-2.23c1.78 1.02 4.69 1.63 8 1.63s6.22-.61 8-1.63V13c0 .66-3.58 2-8 2z" fill="currentColor" />
  </svg>
);

export const IconExternal = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor" />
  </svg>
);

export const IconBook = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" fill="currentColor" />
  </svg>
);

export const IconUsers = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
  </svg>
);

export const IconBriefcase = ({ className = 'dir-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor" />
  </svg>
);

export const IconCamera = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm7-11h-3.17L14.4 4.5A1.98 1.98 0 0 0 12.8 4H11.2c-.63 0-1.22.3-1.6.8L8.17 6H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="currentColor" />
  </svg>
);

export const IconCheck = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
  </svg>
);

export const CommunityAvatar = ({ id, size = 36, className = '' }) => {
  const containerStyle = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    userSelect: 'none',
    flexShrink: 0
  };

  switch (id) {
    case 'ALL':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#0ea5e9', color: '#ffffff' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.64} height={size * 0.64} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M2.5 12h19" />
            <path d="M12 2.5a14 14 0 0 1 0 19" />
            <path d="M12 2.5a14 14 0 0 0 0 19" />
          </svg>
        </div>
      );

    case 'AI&DS':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#4f46e5', color: '#ffffff' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <circle cx="4" cy="7" r="2" />
            <circle cx="20" cy="7" r="2" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="18" cy="19" r="2" />
            <line x1="12" y1="9" x2="4" y2="7" />
            <line x1="12" y1="9" x2="20" y2="7" />
            <line x1="12" y1="15" x2="6" y2="19" />
            <line x1="12" y1="15" x2="18" y2="19" />
          </svg>
        </div>
      );

    case 'AI-ML':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#ff4500', color: '#ffffff' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="15" r="2" fill="currentColor" />
            <path d="M8.5 11.5a5 5 0 0 1 7 0" />
            <path d="M5.5 8.5a9 9 0 0 1 13 0" />
            <path d="M12 17v4" />
          </svg>
        </div>
      );

    case 'CS':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#ffffff', border: '1.5px solid #cbd5e1' }}
        >
          <div style={{ width: size * 0.62, height: size * 0.62, backgroundColor: '#1e293b', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" width={size * 0.42} height={size * 0.42} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
            </svg>
          </div>
        </div>
      );

    case 'EC':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#0284c7', color: '#ffffff' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
          </svg>
        </div>
      );

    case 'MECH':
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#d97706', color: '#ffffff' }}
        >
          <svg viewBox="0 0 24 24" width={size * 0.58} height={size * 0.58} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className={`reddit-avatar-circle ${className}`}
          style={{ ...containerStyle, backgroundColor: '#334155', color: '#ffffff' }}
        >
          <span style={{ fontSize: size * 0.44, fontWeight: 700 }}>{id?.substring(0, 2)}</span>
        </div>
      );
  }
};

export const IconChevronDown = ({ className = 'li-icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor" />
  </svg>
);

export const IconEye = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-4.2a.8.8 0 100 1.6.8.8 0 000-1.6z" fill="currentColor" />
  </svg>
);

export const IconCommentBubble = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="currentColor" />
  </svg>
);

export const IconLink = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="currentColor" />
  </svg>
);

export const IconVideo = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" fill="currentColor" />
  </svg>
);

export const IconArticle = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" />
  </svg>
);

export const IconClock = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
  </svg>
);

export const IconPlus = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
  </svg>
);

export const IconTag = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" fill="currentColor" />
  </svg>
);

export const IconCollaborate = ({ className = 'li-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
  </svg>
);

export const IconProofread = ({ className = 'li-icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor" />
  </svg>
);

export const IconSettings = ({ className = 'icon-default' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93V17a1 1 0 0 0-2 0v2.93A8 8 0 0 1 4.07 13H7a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V7a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H17a1 1 0 0 0 0 2h2.93A8 8 0 0 1 13 19.93z" fill="currentColor" />
  </svg>
);

export const IconSort = ({ className = 'li-icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill="currentColor" />
  </svg>
);

export const IconArrowLeft = ({ className = 'li-icon-sm' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor" />
  </svg>
);

export const IconCopy = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const IconWhatsApp = ({ className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const IconPin = ({ filled = false, className = 'action-icon' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="17" x2="12" y2="22" />
    <path d="M5 17h14v-2l-2-3V6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v6l-2 3v2z" />
  </svg>
);
