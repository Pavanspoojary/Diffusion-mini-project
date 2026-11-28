import { ClerkProvider } from '@clerk/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const clerkKey = (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '').trim();
const isClerkConfigured = Boolean(clerkKey);

const clerkAppearance = {
  layout: {
    socialButtonsPlacement: 'top',
    socialButtonsVariant: 'blockButton',
    logoPlacement: 'inside',
  },
  variables: {
    colorPrimary: '#1d9bf0',
    colorText: '#0f1419',
    colorTextSecondary: '#536471',
    colorBackground: '#ffffff',
    colorInputBackground: '#ffffff',
    colorInputText: '#0f1419',
    colorDanger: '#f4212e',
    borderRadius: '12px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: '15px',
  },
  elements: {
    modalBackdrop: 'clerk-modal-backdrop',
    modalContent: 'clerk-modal-content',
    card: 'clerk-card',
    headerTitle: 'clerk-header-title',
    headerSubtitle: 'clerk-header-subtitle',
    formButtonPrimary: 'clerk-primary-btn',
    socialButtonsBlockButton: 'clerk-social-btn',
    socialButtonsBlockButtonText: 'clerk-social-btn-text',
    formFieldInput: 'clerk-field-input',
    formFieldLabel: 'clerk-field-label',
    dividerLine: 'clerk-divider-line',
    dividerText: 'clerk-divider-text',
    footerActionLink: 'clerk-footer-link',
    modalCloseButton: 'clerk-close-btn',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={isClerkConfigured ? clerkKey : 'pk_test_placeholder_key_not_configured'}
      afterSignOutUrl="/"
      appearance={clerkAppearance}
    >
      <App isClerkConfigured={isClerkConfigured} />
    </ClerkProvider>
  </React.StrictMode>
);