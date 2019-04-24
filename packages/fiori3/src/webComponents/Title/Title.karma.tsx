import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Title } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Title', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Title />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
