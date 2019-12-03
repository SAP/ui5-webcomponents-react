import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ProductSwitchItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
