import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Toast } from './index';

describe('Toast', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Toast />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Toast);
  createWaitForDefineTest(Toast);
});
