import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './util/i18n';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
