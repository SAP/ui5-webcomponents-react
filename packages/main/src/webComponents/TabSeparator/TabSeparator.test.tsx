import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TabSeparator } from './index';

describe('TabSeparator', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TabSeparator />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TabSeparator);
  createWaitForDefineTest(TabSeparator);
});
