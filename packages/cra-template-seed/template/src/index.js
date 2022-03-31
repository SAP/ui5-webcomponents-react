import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

import React from 'react';
import { createRoot } from 'react-dom/client';

import './util/i18n';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
