import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Calendar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
