import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ComboBox } from './index';

describe('ComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBox);
  createWaitForDefineTest(ComboBox);
});
