import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { DatePicker } from '../../lib/DatePicker';

use(matchSnapshot);

describe('DatePicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<DatePicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
