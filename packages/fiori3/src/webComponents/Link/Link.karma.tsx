import { Link } from '@lib/Link';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Link', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Link />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
