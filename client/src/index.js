import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state"; // Ensure the path to state is correct
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    global: globalReducer, // Use 'global' as the key
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
