import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { YearPicker } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('YearPicker', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<YearPicker />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
