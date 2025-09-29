import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global styles if needed
import './styles.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);