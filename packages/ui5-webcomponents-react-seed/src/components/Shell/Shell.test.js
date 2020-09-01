import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import Shell from './Shell';

beforeEach(() => {
  render(<Shell />);
});

test('should match snapshot', () => {
  const shell = screen.getByTestId('shell-wrapper');

  expect(shell).toMatchSnapshot();
});

test('should render', () => {
  const shell = screen.getByTestId('shell-wrapper');

  expect(shell).toBeInTheDocument();
});

test('should render with primaryTitle "Test"', () => {
  render(<Shell title='Test' />);

  const shell = screen.queryAllByTestId('shell-wrapper')[1];
  expect(shell).toBeInTheDocument();
  expect(shell).toHaveProperty('primaryTitle', 'Test');
});
