import { render } from '@shared/tests';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import React from 'react';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});
