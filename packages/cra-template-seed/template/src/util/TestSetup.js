import { render as rtlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Router } from 'react-router-dom';

import { ROUTES } from '../routes/Routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000 * 60, // 5 minutes
      cacheTime: Infinity, // do not delete stale data
    },
  },
});

const customRender = (ui, { route = ROUTES.HOME, ...renderOptions } = {}) => {
  const WrapperProvider = (props) => {
    const history = createMemoryHistory({ initialEntries: [route] });
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Router history={history}>{props.children}</Router>
        </MemoryRouter>
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

export { customRender as render, serverCustom };
