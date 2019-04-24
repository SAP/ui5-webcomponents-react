import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { ListItemBase } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe.skip('ListItemBase', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ListItemBase />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
