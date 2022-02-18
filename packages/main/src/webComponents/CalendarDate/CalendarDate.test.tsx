import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { CalendarDate } from './index';

describe('CalendarDate', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CalendarDate />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(CalendarDate);
  createWaitForDefineTest(CalendarDate);
});
