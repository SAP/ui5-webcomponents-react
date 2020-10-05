import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../util/TestSetup';

import Input from '../Input/Input';

describe('Input.js Test Suite', () => {
  test('should have rendered with the fieldbase', () => {
    render(<Input labelText="Text Content" name="description" field={{ name: 'description' }} form={{ touched: { name: 'description' }, errors: { name: 'description' } }} />);

    const fieldbase = screen.getByTestId('fieldbase-wrapper');
    const component = screen.getByTestId('input-wrapper');

    expect(fieldbase).toBeInTheDocument();
    expect(component).toBeInTheDocument();
  });

  test('should have attribute name as description if passed', () => {
    render(<Input labelText="Text Content" name="description" field={{ name: 'description' }} form={{ touched: { name: 'description' }, errors: { name: 'description' } }} />);

    const component = screen.getByTestId('input-wrapper');

    expect(component).toHaveProperty('name', 'description');
  });
});
