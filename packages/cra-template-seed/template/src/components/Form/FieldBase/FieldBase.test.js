import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../util/TestSetup';

import FieldBase from '../FieldBase/FieldBase';

describe('FieldBase.js Test Suite', () => {
  beforeEach(() => {
    render(
      <FieldBase labelText="Text Content">
        <p data-testid="inner-component-wrapper">Some Inner Text</p>
      </FieldBase>,
    );
  });

  test('should render', () => {
    const component = screen.getByTestId('fieldbase-wrapper');

    expect(component).toBeInTheDocument();
  });

  test('should render with Inner Component with Text Content as text', () => {
    const component = screen.getByTestId('fieldbase-wrapper');
    const innerComponent = screen.getByTestId('inner-component-wrapper');

    expect(component).toBeInTheDocument();
    expect(innerComponent).toHaveTextContent('Some Inner Text');
  });
});
