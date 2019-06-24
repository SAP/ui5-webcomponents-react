import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Tokenizer } from '../../lib/Tokenizer';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Tokenizer', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tokenizer />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
