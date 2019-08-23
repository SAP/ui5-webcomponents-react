import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { CalendarHeader } from '../../lib/CalendarHeader';

describe('CalendarHeader', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CalendarHeader />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
