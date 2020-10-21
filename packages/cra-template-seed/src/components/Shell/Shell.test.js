import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import Shell from './Shell';

describe('Shell.js Test Suite', () => {
  beforeEach(() => {
    render(<Shell />);
  });
  test('should render', () => {
    const shell = screen.getByTestId('shell-wrapper');

    expect(shell).toBeInTheDocument();
  });

  test('should contain an empty space after the Shell Element', () => {
    const emptySpace = screen.getByTestId('emptySpace-wrapper');

    expect(emptySpace).toBeInTheDocument();
  });

  test('should contain an profile element', () => {
    const { container } = render(<Shell title="Test" />);
    const profile = container.querySelector('[slot="profile"]');

    expect(profile).toBeInTheDocument();
  });

  test('should render with primaryTitle "Test"', () => {
    render(<Shell title="Test" />);

    const shell = screen.queryAllByTestId('shell-wrapper')[1];
    expect(shell).toBeInTheDocument();
    expect(shell).toHaveProperty('primaryTitle', 'Test');
  });
});
