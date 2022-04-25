import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Menu } from './index';

describe('Menu', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Menu);
  createWaitForDefineTest(Menu);
});
