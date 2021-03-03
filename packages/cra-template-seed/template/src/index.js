import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

import React from 'react';
import ReactDOM from 'react-dom';

import './util/i18n';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
