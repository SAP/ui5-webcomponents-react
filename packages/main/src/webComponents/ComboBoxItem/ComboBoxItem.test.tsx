import { render } from '@shared/tests';
import { ComboBoxItem } from '@ui5/webcomponents-react/dist/ComboBoxItem';
import React from 'react';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
