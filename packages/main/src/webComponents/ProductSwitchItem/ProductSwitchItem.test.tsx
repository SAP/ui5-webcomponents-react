import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ProductSwitchItem } from './index';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProductSwitchItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ProductSwitchItem);
  createWaitForDefineTest(ProductSwitchItem);
});
