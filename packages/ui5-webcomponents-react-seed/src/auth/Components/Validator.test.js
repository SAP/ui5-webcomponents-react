import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen, serverCustom } from '../../util/TestSetup';
import ComponentValidator from './Validator';
import APIProvider from '../../util/URL/APIProvider';

describe('Validator.js Test Suite', () => {
  const GET_USER_LOGGED_RESPONSE = {
    id: 'UG9rZW1vbjowMDE=',
    name: 'testeeeeeeeeeeeeeeeee',
    permissions: ['canAccessTodoListPage', 'canAccessTodoEditPage', 'canAccessDropApplication'],
  };

  const server = serverCustom(APIProvider.getUrl('GET_USER_LOGGED'), GET_USER_LOGGED_RESPONSE);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should match snapshot', async () => {
    const childText = 'inner text';

    render(
      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <p>{childText}</p>
      </ComponentValidator>,
      { route: '/todo/list' },
    );
    const child = await waitFor(() => screen.getByText(childText));

    expect(child).toMatchSnapshot();
  });

  test('should appear in the document', async () => {
    const childText = 'inner text';

    render(
      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <p>{childText}</p>
      </ComponentValidator>,
      { route: '/todo/list' },
    );
    const child = await waitFor(() => screen.getByText(childText));

    expect(child).toBeInTheDocument();
  });

  test('should not appear in the document', async () => {
    const childText = 'inner text';

    render(
      <ComponentValidator allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <p>{childText}</p>
      </ComponentValidator>,
      { route: '/todo/list' },
    );
    const child = screen.queryByAltText(childText);

    expect(child).not.toBeInTheDocument();
  });
});
