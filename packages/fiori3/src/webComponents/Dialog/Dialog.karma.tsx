import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Dialog } from '../../lib/Dialog';

use(matchSnapshot);

describe('Dialog', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Dialog />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
