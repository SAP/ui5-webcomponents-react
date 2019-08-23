import React from 'react';
import { Option } from '../../lib/Option';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Option />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
