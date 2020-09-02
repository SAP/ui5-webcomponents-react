import { render } from '@shared/tests';
import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';
import React from 'react';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProductSwitchItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
