import { render } from '@shared/tests';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <ProductSwitch>
        <ProductSwitchItem heading="Product Switch Item" />
      </ProductSwitch>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
