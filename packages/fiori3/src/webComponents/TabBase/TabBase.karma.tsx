import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TabBase } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe.skip('TabBase', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabBase />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
