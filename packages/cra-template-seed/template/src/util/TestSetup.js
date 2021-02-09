import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ROUTES } from '../routes/Routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60, // 5 minutes
      cacheTime: Infinity, // do not delete stale data
    },
  },
});

const render = (ui, { route = ROUTES.HOME, ...renderOptions } = {}) => {
  const WrapperProvider = (props) => {
    const history = createMemoryHistory({ initialEntries: [route] });
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router history={history}>{props.children}</Router>
        </BrowserRouter>
      </QueryClientProvider>
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
