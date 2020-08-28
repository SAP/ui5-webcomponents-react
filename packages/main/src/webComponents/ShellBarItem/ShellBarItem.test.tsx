import { render } from '@shared/tests';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import React from 'react';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBarItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
