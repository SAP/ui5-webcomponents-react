import { ShellBar } from '@lib/ShellBar';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('ShellBar', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ShellBar />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
