import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Token } from '../../lib/Token';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Token', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Token />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
