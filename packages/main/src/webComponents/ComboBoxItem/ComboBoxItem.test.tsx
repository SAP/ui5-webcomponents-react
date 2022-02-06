import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ComboBoxItem } from './index';
import React from 'react';

describe('ComboBoxItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBoxItem);
});
