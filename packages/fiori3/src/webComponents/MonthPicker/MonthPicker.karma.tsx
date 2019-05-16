import { MonthPicker } from '../../lib/MonthPicker';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('MonthPicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MonthPicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
