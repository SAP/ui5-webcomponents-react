import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { CalendarDate } from './index';
import React from 'react';

describe('CalendarDate', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CalendarDate />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CalendarDate);
});
