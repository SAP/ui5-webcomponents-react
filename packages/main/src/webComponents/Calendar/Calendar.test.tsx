import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Calendar } from './index';
import React from 'react';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Calendar);
});
