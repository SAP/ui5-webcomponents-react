import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MultiInput } from './index';

describe('MultiInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiInput />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiInput);
  createWaitForDefineTest(MultiInput);
});
