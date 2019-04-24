import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Icon } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Icon', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Icon />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
