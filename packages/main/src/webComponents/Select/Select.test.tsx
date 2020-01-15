import { mountThemedComponent } from '@shared/tests/utils';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import React from 'react';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Select />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
