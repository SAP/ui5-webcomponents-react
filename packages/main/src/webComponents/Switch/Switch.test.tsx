import { mountThemedComponent } from '@shared/tests/utils';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import React from 'react';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Switch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
