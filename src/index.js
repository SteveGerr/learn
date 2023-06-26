import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/styles/fonts.scss';
import './assets/styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
