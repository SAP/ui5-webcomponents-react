import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

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
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[route]}>{props.children}</MemoryRouter>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: WrapperProvider, ...renderOptions });
};

export const serverCustom = (apiUrl, data) => {
  return setupServer(
    rest.get(`*${apiUrl}`, (req, res, ctx) => {
      return res(ctx.json(data));
    }),
  );
};

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
