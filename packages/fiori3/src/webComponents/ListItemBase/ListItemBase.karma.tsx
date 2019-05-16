import { ListItemBase } from '../../lib/ListItemBase';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe.skip('ListItemBase', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ListItemBase />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
