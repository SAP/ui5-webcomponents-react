import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Card } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Card', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Card />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
