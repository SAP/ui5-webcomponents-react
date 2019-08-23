import React from 'react';
import { DatePicker } from '../../lib/DatePicker';
import { mountThemedComponent } from '@shared/tests/utils';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<DatePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
