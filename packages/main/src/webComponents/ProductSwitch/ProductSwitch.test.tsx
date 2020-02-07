import { mountThemedComponent } from '@shared/tests/utils';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import React from 'react';

describe('ProductSwitch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ProductSwitch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
