import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Button } from '../../lib/Button';

use(matchSnapshot);

describe('Button', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Button />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
