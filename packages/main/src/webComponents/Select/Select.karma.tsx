import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Select } from '../../lib/Select';

use(matchSnapshot);

describe('Select', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Select />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
