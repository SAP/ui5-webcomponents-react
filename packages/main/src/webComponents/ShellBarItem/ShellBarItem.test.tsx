import { mountThemedComponent } from '@shared/tests/utils';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import React from 'react';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBarItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
