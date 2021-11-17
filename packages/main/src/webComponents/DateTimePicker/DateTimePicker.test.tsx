import { render } from '@shared/tests';
import { DateTimePicker } from '@ui5/webcomponents-react/dist/DateTimePicker';
import React from 'react';

describe('DateTimePicker', () => {
  test('Basic Test (generated)', async () => {
    const { asFragment } = render(<DateTimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});
