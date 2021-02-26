import { render } from '@shared/tests';
import { MultiComboBox } from '@ui5/webcomponents-react/dist/MultiComboBox';
import React from 'react';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
