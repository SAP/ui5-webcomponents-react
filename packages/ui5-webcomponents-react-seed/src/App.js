import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';
import CenteredContent from './components/Layout/CenteredContent';

const style = {
  emptySpace: {
    paddingTop: '44px',
  },
};

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet title={t('helmet.title.app')} />
      <Shell title={t('shell.title')} />
      <div style={style.emptySpace} />
      <ErrorBoundary>
        <CenteredContent>
          <Routes />
        </CenteredContent>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
