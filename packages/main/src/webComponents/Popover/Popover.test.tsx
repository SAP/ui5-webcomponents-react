import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Popover } from './index';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Popover />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Popover);
  createWaitForDefineTest(Popover);
});
