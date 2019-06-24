import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { ShellBar } from '../../lib/ShellBar';

use(matchSnapshot);

describe('ShellBar', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBar />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
