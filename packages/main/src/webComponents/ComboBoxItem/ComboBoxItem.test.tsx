import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ComboBoxItem } from './index';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBoxItem);
  createWaitForDefineTest(ComboBoxItem);
});
