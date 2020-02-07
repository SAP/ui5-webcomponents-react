import { mountThemedComponent } from '@shared/tests/utils';
import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
import React from 'react';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Calendar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
