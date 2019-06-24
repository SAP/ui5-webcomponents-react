import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Timeline } from '../../lib/Timeline';

use(matchSnapshot);

describe('Timeline', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Timeline />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
