import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MenuItem } from './index';

describe('MenuItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MenuItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MenuItem);
  createWaitForDefineTest(MenuItem);
});
