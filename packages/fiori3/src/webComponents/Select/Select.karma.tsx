import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Select } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Select', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Select />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
