import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import CenteredContent from './CenteredContent';

describe('CenteredContent.js Test Suite', () => {
  beforeEach(() => {
    render(<CenteredContent />);
  });

  test('should render', () => {
    const content = screen.getByTestId('centered-content');

    expect(content).toBeInTheDocument();
  });

  test('should have a minWidth of 50% when desktop', () => {
    const content = screen.getByTestId('centered-content');

    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('min-width: 50%');
  });
});
