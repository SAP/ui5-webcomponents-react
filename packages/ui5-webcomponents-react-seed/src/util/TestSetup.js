import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import BrowserProvider from './URL/BrowserProvider';

const render = (ui, { route = BrowserProvider.HOME, ...renderOptions } = {}) => {
  const WrapperProvider = ({ children }) => {
    const history = createMemoryHistory({ initialEntries: [route] });
    return (
      <BrowserRouter>
        <Router history={history}>{children}</Router>
      </BrowserRouter>
    );
  };

  return rtlRender(ui, { wrapper: WrapperProvider, ...renderOptions });
};

const serverCustom = (apiUrl, data) => {
  return setupServer(
    rest.get(`*${apiUrl}`, (req, res, ctx) => {
      return res(ctx.json(data));
    }),
  );
};

export * from '@testing-library/react';

export { render, serverCustom };
