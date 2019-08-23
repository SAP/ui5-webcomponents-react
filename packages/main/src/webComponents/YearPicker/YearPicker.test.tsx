import React from 'react';
import { YearPicker } from '../../lib/YearPicker';
import { mountThemedComponent } from '@shared/tests/utils';

describe('YearPicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<YearPicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
