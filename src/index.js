import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'modern-normalize';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider {...theme}>
    <App />
  </ThemeProvider>
);
