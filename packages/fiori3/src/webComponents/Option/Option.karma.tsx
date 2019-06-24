import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Option } from '../../lib/Option';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Option', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Option />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
