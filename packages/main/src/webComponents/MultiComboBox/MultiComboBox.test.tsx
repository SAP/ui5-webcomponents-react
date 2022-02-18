import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MultiComboBox } from './index';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiComboBox);
  createWaitForDefineTest(MultiComboBox);
});
