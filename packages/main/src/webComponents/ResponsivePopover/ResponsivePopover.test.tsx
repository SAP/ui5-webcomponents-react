import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ResponsivePopover } from './index';

describe('ResponsivePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ResponsivePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ResponsivePopover);
  createWaitForDefineTest(ResponsivePopover);
});
