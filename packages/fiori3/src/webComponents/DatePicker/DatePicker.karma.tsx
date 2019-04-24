import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { DatePicker } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('DatePicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<DatePicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
