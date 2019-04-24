import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { ShellBarItem } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('ShellBarItem', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBarItem />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
