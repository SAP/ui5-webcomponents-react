import { render } from '@shared/tests';
import { TimePicker } from '@ui5/webcomponents-react/dist/TimePicker';
import React from 'react';

describe('TimePicker', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TimePicker />);
    expect(asFragment()).toMatchSnapshot();
  });
});
