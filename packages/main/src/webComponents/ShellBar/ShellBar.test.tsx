import { mountThemedComponent } from '@shared/tests/utils';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import React from 'react';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
