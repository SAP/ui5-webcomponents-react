import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../util/TestSetup';

import Label from '../Label/Label';

describe('Label.js Test Suite', () => {
  test('should render children', () => {
    render(
      <Label>
        <p data-testid="inner-text-wrapper">inner text</p>
      </Label>,
    );

    const component = screen.getByTestId('label-wrapper');
    const inner = screen.getByTestId('inner-text-wrapper');

    expect(component).toBeInTheDocument();
    expect(inner).toBeInTheDocument();
  });

  test('should render with lineHeight of 20px', () => {
    render(<Label />);

    const component = screen.getByTestId('label-wrapper');

    expect(component).toBeInTheDocument();
    expect(component).toHaveStyle('lineHeight: 20px');
  });
});
