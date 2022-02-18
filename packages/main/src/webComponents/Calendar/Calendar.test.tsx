import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { Calendar } from './index';

describe('Calendar', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Calendar />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Calendar);
  createWaitForDefineTest(Calendar);
});
