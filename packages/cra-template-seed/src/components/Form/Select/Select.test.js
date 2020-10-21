import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../util/TestSetup';

import Select from '../Select/Select';

const descrOptions = [
  { id: 'LOW', text: 'Low' },
  { id: 'MEDIUM', text: 'Medium' },
  { id: 'HIGH', text: 'High' },
];

describe('Select.js Test Suite', () => {
  test('should have rendered with the fieldbase', () => {
    render(<Select labelText="Text Content" name="description" options={descrOptions} field={{ name: 'description' }} form={{ touched: { name: 'description' }, errors: { name: 'description' } }} />);

    const fieldbase = screen.getByTestId('fieldbase-wrapper');
    const component = screen.getByTestId('select-wrapper');

    expect(fieldbase).toBeInTheDocument();
    expect(component).toBeInTheDocument();
  });

  test('should have 3 options with MEDIUM selected', () => {
    render(
      <Select
        labelText="Text Content"
        name="description"
        options={descrOptions}
        field={{ name: 'description', value: 'MEDIUM' }}
        form={{ touched: { name: 'description' }, errors: { name: 'description' } }}
      />,
    );

    const component = screen.getByTestId('select-wrapper');
    const options = screen.getAllByTestId('select-option-wrapper');
    expect(component.children).toHaveLength(3);
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
  });
});
