import { TabBase } from '../../lib/TabBase';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe.skip('TabBase', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabBase />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
