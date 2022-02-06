import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ShellBarItem } from './index';
import React from 'react';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBarItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ShellBarItem);
});
