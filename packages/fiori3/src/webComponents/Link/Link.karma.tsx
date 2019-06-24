import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Link } from '../../lib/Link';

use(matchSnapshot);

describe('Link', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Link />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
