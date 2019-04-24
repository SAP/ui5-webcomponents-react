import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Calendar } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Calendar', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Calendar />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
