import React from 'react';
import { Select } from '../../lib/Select';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Select />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
