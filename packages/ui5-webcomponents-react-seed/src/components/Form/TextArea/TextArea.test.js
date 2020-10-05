import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../util/TestSetup';

import TextArea from '../TextArea/TextArea';

describe('TextArea.js Test Suite', () => {
  test('should have rendered with the fieldbase', () => {
    render(<TextArea labelText="Text Content" name="description" field={{ name: 'description' }} form={{ touched: { name: 'description' }, errors: { name: 'description' } }} />);

    const fieldbase = screen.getByTestId('fieldbase-wrapper');
    const component = screen.getByTestId('textArea-wrapper');

    expect(fieldbase).toBeInTheDocument();
    expect(component).toBeInTheDocument();
  });
});
