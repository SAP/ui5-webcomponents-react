import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Input } from './index';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Input);
  createWaitForDefineTest(Input);
});
