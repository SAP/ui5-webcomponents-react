import { mountThemedComponent } from '@shared/tests/utils';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import React from 'react';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Option />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
