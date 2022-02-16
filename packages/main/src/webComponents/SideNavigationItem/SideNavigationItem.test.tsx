import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SideNavigationItem } from './index';

describe('SideNavigationItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SideNavigationItem);
  createWaitForDefineTest(SideNavigationItem);
});
