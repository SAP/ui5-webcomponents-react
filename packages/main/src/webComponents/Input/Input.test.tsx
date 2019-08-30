import React from 'react';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Input />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
