import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'modern-normalize';
import './index.css';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
