import { Icon } from '../../lib/Icon';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Icon', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Icon />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
