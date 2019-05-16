import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { CalendarHeader } from '@lib/CalendarHeader';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('CalendarHeader', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CalendarHeader />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
