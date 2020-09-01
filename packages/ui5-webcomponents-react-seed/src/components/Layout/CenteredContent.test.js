import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import CenteredContent from './CenteredContent';

beforeEach(() => {
  render(<CenteredContent />);
});

test('should match snapshot', () => {
  const { asFragment } = render(<CenteredContent />);

  expect(asFragment()).toMatchSnapshot();
});

test('should render', () => {
  const content = screen.getByTestId('centeredContent');

  expect(content).toBeInTheDocument();
});

test('should have a g of 970px', () => {
  const content = screen.getByTestId('centeredContent');

  expect(content).toBeInTheDocument();
  expect(content).toHaveStyle(`max-width:970px`);
});
