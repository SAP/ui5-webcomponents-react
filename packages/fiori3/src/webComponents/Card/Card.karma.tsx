import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Card } from '../../lib/Card';

use(matchSnapshot);

describe('Card', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Card />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
