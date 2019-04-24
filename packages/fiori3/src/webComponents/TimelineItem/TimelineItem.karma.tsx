import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TimelineItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TimelineItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TimelineItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
