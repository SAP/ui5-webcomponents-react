import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MessageStrip } from './index';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MessageStrip />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MessageStrip);
  createWaitForDefineTest(MessageStrip);
});
