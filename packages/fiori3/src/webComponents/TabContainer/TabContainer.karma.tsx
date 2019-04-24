import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TabContainer } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TabContainer', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabContainer />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
