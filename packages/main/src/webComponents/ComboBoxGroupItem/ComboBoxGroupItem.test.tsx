import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ComboBoxGroupItem } from './index';

describe('ComboBoxGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBoxGroupItem);
  createWaitForDefineTest(ComboBoxGroupItem);
});
