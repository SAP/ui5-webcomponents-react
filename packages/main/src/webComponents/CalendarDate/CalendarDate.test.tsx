import { render } from '@shared/tests';
import { CalendarDate } from '@ui5/webcomponents-react/dist/CalendarDate';
import React from 'react';

describe('CalendarDate', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CalendarDate />);
    expect(asFragment()).toMatchSnapshot();
  });
});
