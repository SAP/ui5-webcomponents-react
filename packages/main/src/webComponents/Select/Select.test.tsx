import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Select } from './index';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Select);
  createWaitForDefineTest(Select);
});
