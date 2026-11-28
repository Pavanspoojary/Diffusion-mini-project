import { ClerkProvider } from '@clerk/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const clerkKey = (() => {
  const nextKey = (import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '').trim();
  const viteKey = (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '').trim();
  const isVercelApp = typeof window !== 'undefined' && window.location.hostname.endsWith('.vercel.app');
  // On *.vercel.app without a custom domain, production keys (pk_live_*) fail because CNAMEs cannot be configured.
  // Prefer development keys (pk_test_*) on vercel.app to avoid net::ERR_CONNECTION_CLOSED script failure.
  if (isVercelApp) {
    if (viteKey.startsWith('pk_test_')) return viteKey;
    if (nextKey.startsWith('pk_test_')) return nextKey;
  }
  return viteKey || nextKey || '';
})();

const isClerkConfigured = Boolean(clerkKey);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={isClerkConfigured ? clerkKey : 'pk_test_placeholder_key_not_configured'}
      afterSignOutUrl="/"
    >
      <App isClerkConfigured={isClerkConfigured} clerkPublishableKey={clerkKey} />
    </ClerkProvider>
  </React.StrictMode>
);