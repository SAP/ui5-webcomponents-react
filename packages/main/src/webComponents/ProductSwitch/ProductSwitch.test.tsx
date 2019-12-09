import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ProductSwitch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
