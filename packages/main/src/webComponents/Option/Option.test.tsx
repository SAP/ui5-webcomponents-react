import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Option } from './index';
import React from 'react';

describe('Option', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Option />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Option);
});
