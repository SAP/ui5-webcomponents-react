import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SideNavigationSubItem } from './index';
import React from 'react';

describe('SideNavigationSubItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<SideNavigationSubItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(SideNavigationSubItem);
});
