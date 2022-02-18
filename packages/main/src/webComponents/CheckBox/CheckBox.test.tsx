import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { CheckBox } from './index';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CheckBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CheckBox);
  createWaitForDefineTest(CheckBox);
});
