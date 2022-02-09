import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Switch } from './index';
import React from 'react';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Switch);
});
