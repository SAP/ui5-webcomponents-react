import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { DatePicker } from '@ui5/webcomponents-react/dist/DatePicker';
import React from 'react';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(DatePicker);
});
