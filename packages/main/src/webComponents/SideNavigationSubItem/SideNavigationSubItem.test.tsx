import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { SideNavigationSubItem } from './index';

describe('SideNavigationSubItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationSubItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SideNavigationSubItem);
  createWaitForDefineTest(SideNavigationSubItem);
});
