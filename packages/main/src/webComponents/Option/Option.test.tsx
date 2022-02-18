import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Option } from './index';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Option />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Option);
  createWaitForDefineTest(Option);
});
