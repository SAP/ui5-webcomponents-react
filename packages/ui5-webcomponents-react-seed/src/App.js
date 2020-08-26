import React from 'react';
import { BrowserRouter } from "react-router-dom";

import ErrorBoundary from './pages/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Shell title='TodoList App' />
      <div style={{ paddingTop: '44px' }} />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
