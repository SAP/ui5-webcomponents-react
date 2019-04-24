import React from 'react';
import { Token } from './index';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Token', () => {
  it('first', () => {
    const wrapper = mountThemedComponent(<Token>Test5</Token>);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
