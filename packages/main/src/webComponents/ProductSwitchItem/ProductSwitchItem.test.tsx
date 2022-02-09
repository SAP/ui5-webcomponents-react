import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ProductSwitchItem } from './index';
import React from 'react';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ProductSwitchItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ProductSwitchItem);
});
