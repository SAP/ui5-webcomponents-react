import React from 'react';

import { render } from '@testing-library/react';

import CenteredLink from './CenteredLink';

test('renders learn react link', () => {
  const { getByText } = render(<CenteredLink />);
  const linkElement = getByText(/Getting Started with UI5 Web Component for React/i);
  expect(linkElement).toBeInTheDocument();
});
