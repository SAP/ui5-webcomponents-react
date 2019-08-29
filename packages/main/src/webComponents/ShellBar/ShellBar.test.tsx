import React from 'react';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { mountThemedComponent } from '@shared/tests/utils';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBar />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
