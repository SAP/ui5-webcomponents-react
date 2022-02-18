import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ColorPicker } from './index';

describe('ColorPicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ColorPicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ColorPicker);
  createWaitForDefineTest(ColorPicker);
});
