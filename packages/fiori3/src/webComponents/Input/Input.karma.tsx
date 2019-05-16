import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Input } from '../../lib/Input';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Input', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Input />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
