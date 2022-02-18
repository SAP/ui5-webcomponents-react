import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Dialog } from './index';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Dialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Dialog);
  createWaitForDefineTest(Dialog);
});
