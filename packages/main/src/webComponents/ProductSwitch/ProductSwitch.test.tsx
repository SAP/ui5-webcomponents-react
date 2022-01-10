import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ProductSwitch } from '@ui5/webcomponents-react/dist/ProductSwitch';
import { ProductSwitchItem } from '@ui5/webcomponents-react/dist/ProductSwitchItem';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
      <ProductSwitch>
        <ProductSwitchItem titleText="Product Switch Item" />
      </ProductSwitch>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ProductSwitch);
});
