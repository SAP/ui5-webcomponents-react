import { mountThemedComponent } from '@shared/tests/utils';
import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';
import React from 'react';

describe('ProductSwitchItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ProductSwitchItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
