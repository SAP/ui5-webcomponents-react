import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Icon } from '../../lib/Icon';

use(matchSnapshot);

describe('Icon', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Icon />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
