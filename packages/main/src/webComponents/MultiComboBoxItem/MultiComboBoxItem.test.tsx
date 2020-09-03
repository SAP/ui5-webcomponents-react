import { render } from '@shared/tests';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import React from 'react';

describe('MultiComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
