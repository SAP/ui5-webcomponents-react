import React from 'react';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBarItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
