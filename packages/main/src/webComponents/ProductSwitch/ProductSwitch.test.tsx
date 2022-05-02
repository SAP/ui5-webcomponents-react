import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ProductSwitchItem } from '../ProductSwitchItem';
import { ProductSwitch } from './index';

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
  createWaitForDefineTest(ProductSwitch);
});
