import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ShellBar } from './index';
import React from 'react';

describe('ShellBar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ShellBar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ShellBar);
});
