import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';


import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet title={t('helmet.title.app')} />
      <Shell title={t('shell.title')} />
      <div style={{ paddingTop: '44px' }} />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
