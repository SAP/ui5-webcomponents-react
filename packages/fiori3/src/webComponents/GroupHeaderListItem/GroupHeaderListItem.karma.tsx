import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { GroupHeaderListItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('GroupHeaderListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<GroupHeaderListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
