import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { GroupHeaderListItem } from '../../lib/GroupHeaderListItem';

use(matchSnapshot);

describe('GroupHeaderListItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<GroupHeaderListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
