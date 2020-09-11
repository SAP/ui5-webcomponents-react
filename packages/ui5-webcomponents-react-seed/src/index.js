import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11.js';
import '@ui5/webcomponents-react-base/polyfill/IE11';
import '@ui5/webcomponents-icons/dist/json-imports/Icons.js';

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';

import React from 'react';
import ReactDOM from 'react-dom';

import './util/i18n';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
