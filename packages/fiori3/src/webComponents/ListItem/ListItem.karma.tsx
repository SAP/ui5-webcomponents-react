import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { ListItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('ListItem', () => {
  it.skip('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ListItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
