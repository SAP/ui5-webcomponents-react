import { render } from '@shared/tests';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import React from 'react';

describe('DatePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<DatePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});
