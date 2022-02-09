import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ComboBoxGroupItem } from './index';
import React from 'react';

describe('ComboBoxGroupItem', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBoxGroupItem />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBoxGroupItem);
});
