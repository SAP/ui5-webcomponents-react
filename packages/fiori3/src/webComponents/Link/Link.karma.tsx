import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Link } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Link', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Link />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
