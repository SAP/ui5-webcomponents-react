import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Select } from './index';
import React from 'react';

describe('Select', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Select);
});
