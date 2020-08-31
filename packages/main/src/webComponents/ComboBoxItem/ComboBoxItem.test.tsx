import { render } from '@shared/tests';
import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import React from 'react';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
