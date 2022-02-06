import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ProductSwitch } from './index';
import { ProductSwitchItem } from '../ProductSwitchItem';
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
