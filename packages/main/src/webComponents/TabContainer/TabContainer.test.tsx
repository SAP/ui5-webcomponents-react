import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TabContainer } from './index';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TabContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TabContainer);
  createWaitForDefineTest(TabContainer);
});
