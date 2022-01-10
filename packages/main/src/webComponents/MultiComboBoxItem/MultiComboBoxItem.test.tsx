import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/dist/MultiComboBoxItem';
import React from 'react';

describe('MultiComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiComboBoxItem);
});
