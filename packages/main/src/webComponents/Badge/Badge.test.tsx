import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Badge } from './index';

describe('Badge', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Badge />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Badge);
  createWaitForDefineTest(Badge);
});
