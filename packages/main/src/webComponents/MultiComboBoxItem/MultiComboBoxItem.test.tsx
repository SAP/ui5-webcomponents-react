import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MultiComboBoxItem } from './index';

describe('MultiComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiComboBoxItem);
  createWaitForDefineTest(MultiComboBoxItem);
});
