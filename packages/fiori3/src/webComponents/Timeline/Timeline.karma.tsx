import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Timeline } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Timeline', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Timeline />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
