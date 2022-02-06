import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { MultiComboBox } from './index';
import React from 'react';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<MultiComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(MultiComboBox);
});
