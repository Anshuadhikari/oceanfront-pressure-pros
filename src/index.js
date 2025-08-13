import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Sidebar collapse handler
window.addEventListener('toggle-reviews-sidebar', () => {
  const grid = document.getElementById('page-grid');
  const main = document.getElementById('page-main');
  if (!grid || !main) return;
  grid.classList.toggle('sidebar-collapsed');
  main.classList.toggle('expanded');
  // Smooth scroll to top of reviews/main as needed
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
