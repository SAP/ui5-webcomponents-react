import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ShellBarItem } from './index';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBarItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ShellBarItem);
  createWaitForDefineTest(ShellBarItem);
});
