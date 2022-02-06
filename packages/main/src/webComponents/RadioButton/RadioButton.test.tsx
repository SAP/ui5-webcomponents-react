import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { RadioButton } from './index';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<RadioButton />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(RadioButton);
});
