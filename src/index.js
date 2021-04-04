import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import ErrorContextProvider from './contexts/ErrorContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>

        <App />
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

