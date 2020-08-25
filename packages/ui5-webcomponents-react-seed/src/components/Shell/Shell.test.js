import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Shell from './Shell';

test('should render', () => {
  const { getByTestId } = render(<Shell />);
  const shell = getByTestId('shell-wrapper');
  expect(shell).toBeInTheDocument();
});
