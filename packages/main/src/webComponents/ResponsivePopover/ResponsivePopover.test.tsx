import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ResponsivePopover } from './index';
import React from 'react';

describe('ResponsivePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ResponsivePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ResponsivePopover);
});
