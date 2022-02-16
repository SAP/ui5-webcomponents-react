import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Switch } from './index';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Switch);
  createWaitForDefineTest(Switch);
});
