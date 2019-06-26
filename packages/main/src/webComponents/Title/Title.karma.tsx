import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Title } from '../../lib/Title';

use(matchSnapshot);

describe('Title', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Title />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
