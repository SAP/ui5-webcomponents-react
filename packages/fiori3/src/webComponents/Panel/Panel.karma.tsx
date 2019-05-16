import { Panel } from '@lib/Panel';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Panel', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Panel />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
