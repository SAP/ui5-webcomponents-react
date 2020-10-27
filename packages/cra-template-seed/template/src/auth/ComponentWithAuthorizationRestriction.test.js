import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen, serverCustom } from '../util/TestSetup';
import ComponentWithAuthorizationRestriction from './ComponentWithAuthorizationRestriction';
import { getUrl } from '../util/api/url/APIProvider';

describe('ComponentWithAuthorizationRestriction.js Test Suite', () => {
  const GET_USER_LOGGED_RESPONSE = {
    id: 'UG9rZW1vbjowMDE=',
    name: 'testeeeeeeeeeeeeeeeee',
    permissions: ['canAccessTodoListPage', 'canAccessTodoEditPage', 'canAccessDropApplication'],
  };

  const server = serverCustom(getUrl('GET_USER_LOGGED'), GET_USER_LOGGED_RESPONSE);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should appear in the document', async () => {
    const childText = 'inner text';

    render(
      <ComponentWithAuthorizationRestriction allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <p>{childText}</p>
      </ComponentWithAuthorizationRestriction>,
      { route: '/todo/all' },
    );
    const child = await waitFor(() => screen.getByText(childText));

    expect(child).toBeInTheDocument();
  });

  test.only('should not appear in the document', async () => {
    const childText = 'inner text';

    render(
      <ComponentWithAuthorizationRestriction allowedAuthorities={['canAccessDropApplication']} authorityKey="permissions">
        <p>{childText}</p>
      </ComponentWithAuthorizationRestriction>,
      { route: '/todo/all' },
    );
    const child = screen.queryByAltText(childText);

    expect(child).not.toBeInTheDocument();
  });
});
