import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Input } from '../../lib/Input';

use(matchSnapshot);

describe('Input', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Input />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
