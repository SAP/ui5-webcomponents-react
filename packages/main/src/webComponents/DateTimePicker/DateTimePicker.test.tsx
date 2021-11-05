import { render, waitFor } from '@shared/tests';
import { DateTimePicker } from '@ui5/webcomponents-react/dist/DateTimePicker';
import React from 'react';

describe('DateTimePicker', () => {
  test('Basic Test (generated)', async () => {
    const { baseElement, asFragment } = render(<DateTimePicker />);
    await waitFor(() => expect(baseElement).toHaveAttribute('ui5-datetime-picker'));
    expect(asFragment()).toMatchSnapshot();
  });
});
