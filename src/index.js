// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import Bootstrap CSS for a professional look
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Optional custom styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
