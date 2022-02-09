import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Token } from './index';
import React from 'react';

describe('Token', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Token />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Token);
});
