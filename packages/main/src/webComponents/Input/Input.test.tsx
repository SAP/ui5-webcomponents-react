import { mountThemedComponent } from '@shared/tests/utils';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import React from 'react';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Input />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
