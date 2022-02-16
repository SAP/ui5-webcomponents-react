import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ShellBar } from './index';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ShellBar);
  createWaitForDefineTest(ShellBar);
});
