import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { ListItem } from '../../lib/ListItem';

use(matchSnapshot);

describe('ListItem', () => {
  it.skip('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
