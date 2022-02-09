import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { CheckBox } from './index';
import React from 'react';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CheckBox />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CheckBox);
});
