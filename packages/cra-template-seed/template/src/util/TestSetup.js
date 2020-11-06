import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getUrl } from './browser/BrowserProvider';

const render = (ui, { route = getUrl('HOME'), ...renderOptions } = {}) => {
  const WrapperProvider = (props) => {
    const history = createMemoryHistory({ initialEntries: [route] });
    return (
      <BrowserRouter>
        <Router history={history}>{props.children}</Router>
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
