import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Tree } from './index';

describe('Tree', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tree />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Tree);
  createWaitForDefineTest(Tree);
});
