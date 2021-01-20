import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Helmet title={t('helmet.title.app')} />
        <Shell title={t('shell.title')} />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
