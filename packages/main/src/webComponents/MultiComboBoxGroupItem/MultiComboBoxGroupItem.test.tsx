import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { MultiComboBoxGroupItem } from './index';

describe('MultiComboBoxGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBoxGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiComboBoxGroupItem);
  createWaitForDefineTest(MultiComboBoxGroupItem);
});
