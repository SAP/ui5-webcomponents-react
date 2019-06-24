import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Switch } from '../../lib/Switch';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Switch', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Switch />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
