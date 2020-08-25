import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';

import ErrorBoundary from './components/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Shell title='TodoList App' />
        <div>
          <Routes />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
