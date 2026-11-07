import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

/* BrowserRouter gives clean URLs (/publications, not /#/publications).
   It needs the host to serve index.html for every path; vercel.json and
   public/_redirects already configure Vercel and Netlify to do that.

   Building with VITE_ROUTER=memory produces an in-memory router instead,
   for embedding the built site in a sandbox that owns the URL. */
const Router = import.meta.env.VITE_ROUTER === 'memory' ? MemoryRouter : BrowserRouter;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
