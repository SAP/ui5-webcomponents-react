import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ComboBox } from './index';
import React from 'react';

describe('ComboBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ComboBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ComboBox);
});
