import React from 'react';
import { Input } from '../../lib/Input';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Input />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
