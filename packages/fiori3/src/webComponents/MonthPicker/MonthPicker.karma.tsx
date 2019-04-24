import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { MonthPicker } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('MonthPicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MonthPicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
