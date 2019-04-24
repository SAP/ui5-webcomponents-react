import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Panel } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Panel', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Panel />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
