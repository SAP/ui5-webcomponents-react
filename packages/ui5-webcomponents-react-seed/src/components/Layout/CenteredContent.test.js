import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CenteredContent from './CenteredContent';

test('should match snapshot', () => {
  const { asFragment } = render(<CenteredContent />);
  expect(asFragment()).toMatchSnapshot();
});

test('should render', () => {
  const { getByTestId } = render(<CenteredContent />);
  const content = getByTestId('centeredContent');
  expect(content).toBeInTheDocument();
});

test('should have a g of 970px', () => {
  const { getByTestId } = render(<CenteredContent><p>text</p></CenteredContent>);
  const content = getByTestId('centeredContent');
  expect(content).toBeInTheDocument();
  expect(content).toHaveStyle(`max-width:970px`);
});
