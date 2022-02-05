import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Input } from './index';
import React from 'react';

describe('Input', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Input);
});
