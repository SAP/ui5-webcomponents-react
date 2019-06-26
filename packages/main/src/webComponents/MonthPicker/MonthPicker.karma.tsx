import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { MonthPicker } from '../../lib/MonthPicker';

use(matchSnapshot);

describe('MonthPicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MonthPicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
