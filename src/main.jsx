import { ClerkProvider } from '@clerk/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const clerkKey = (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '').trim();
const isClerkConfigured = Boolean(clerkKey);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={isClerkConfigured ? clerkKey : 'pk_test_placeholder_key_not_configured'}
      afterSignOutUrl="/"
    >
      <App isClerkConfigured={isClerkConfigured} />
    </ClerkProvider>
  </React.StrictMode>
);