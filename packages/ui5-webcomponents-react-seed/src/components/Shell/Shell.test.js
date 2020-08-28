import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Shell from './Shell';

test('should match snapshot', () => {
  const { asFragment } = render(<Shell />);
  expect(asFragment()).toMatchSnapshot();
});

test('should render', () => {
  const { getByTestId } = render(<Shell />);
  const shell = getByTestId('shell-wrapper');
  expect(shell).toBeInTheDocument();
});

test('should render with primaryTitle "Test"', () => {
  const { getByTestId } = render(<Shell title='Test' />);
  const shell = getByTestId('shell-wrapper');
  expect(shell).toBeInTheDocument();
  expect(shell).toHaveProperty('primaryTitle', 'Test');
});
