import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/modal.js';

import './assets/styles/custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>
);
