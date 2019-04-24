import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { ShellBar } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('ShellBar', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBar />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
