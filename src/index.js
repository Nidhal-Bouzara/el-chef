import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import responsiveReducer from './redux/responsiveness/responsive';

// Global Styles
import './index.css';

// App
import App from './App';

// Redux setup
const reducer = {
  responsive: responsiveReducer
}

const store = configureStore({
  reducer
})

WebFont.load(
  {
    google: {
      families: ['Work Sans', 'Caveat'],
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);