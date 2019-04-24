import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { DayPicker } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('DayPicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<DayPicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
