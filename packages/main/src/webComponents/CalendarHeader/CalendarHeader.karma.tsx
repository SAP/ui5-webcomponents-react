import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { CalendarHeader } from '../../lib/CalendarHeader';

use(matchSnapshot);

describe('CalendarHeader', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CalendarHeader />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
