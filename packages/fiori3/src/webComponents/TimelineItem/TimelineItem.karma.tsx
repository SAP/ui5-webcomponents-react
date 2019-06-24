import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { TimelineItem } from '../../lib/TimelineItem';

use(matchSnapshot);

describe('TimelineItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TimelineItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
