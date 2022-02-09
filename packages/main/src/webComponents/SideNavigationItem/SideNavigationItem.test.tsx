import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SideNavigationItem } from './index';
import React from 'react';

describe('SideNavigationItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SideNavigationItem);
});
