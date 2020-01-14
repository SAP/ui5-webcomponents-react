import { mountThemedComponent } from '@shared/tests/utils';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import React from 'react';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<DatePicker />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
