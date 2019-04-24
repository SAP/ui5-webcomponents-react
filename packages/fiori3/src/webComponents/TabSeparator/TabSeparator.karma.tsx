import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TabSeparator } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TabSeparator', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TabSeparator />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
