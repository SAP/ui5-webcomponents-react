import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Token } from './index';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Token />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Token);
  createWaitForDefineTest(Token);
});
