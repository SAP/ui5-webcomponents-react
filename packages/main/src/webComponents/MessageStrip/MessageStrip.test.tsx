import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MessageStrip } from './index';
import React from 'react';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MessageStrip />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MessageStrip);
});
