import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CenteredLink from './CenteredLink';

test('should match snapshot', () => {
  const { asFragment } = render(<CenteredLink />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders with test text', () => {
  const { getByText } = render(<CenteredLink text='test' />);
  const linkElement = getByText('test');
  expect(linkElement).toBeInTheDocument();
});
