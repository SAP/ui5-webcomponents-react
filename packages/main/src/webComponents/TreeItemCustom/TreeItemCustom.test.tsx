import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TreeItemCustom } from './index';

describe('TreeItemCustom', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TreeItemCustom />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TreeItemCustom);
  createWaitForDefineTest(TreeItemCustom);
});
