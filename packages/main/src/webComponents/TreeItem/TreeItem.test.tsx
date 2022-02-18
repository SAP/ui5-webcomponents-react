import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { TreeItem } from './index';

describe('TreeItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TreeItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(TreeItem);
  createWaitForDefineTest(TreeItem);
});
