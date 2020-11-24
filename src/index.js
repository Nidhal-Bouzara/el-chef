import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

// Global Styles
import './index.css';

// App
import App from './App';

WebFont.load(
  {
    google: {
      families: ['Work Sans', 'Caveat'],
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);