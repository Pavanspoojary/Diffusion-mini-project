import { ClerkProvider } from '@clerk/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const clerkKey = (() => {
  const nextKey = (import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '').trim();
  const viteKey = (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '').trim();
  // Prioritize live production keys (pk_live_*) over development keys (pk_test_*)
  if (nextKey.startsWith('pk_live_')) return nextKey;
  if (viteKey.startsWith('pk_live_')) return viteKey;
  return nextKey || viteKey || '';
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