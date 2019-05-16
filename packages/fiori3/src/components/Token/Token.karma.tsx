import { Token } from '../../lib/Token';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Token', () => {
  it('first', () => {
    const wrapper = mountThemedComponent(<Token>Test5</Token>);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
