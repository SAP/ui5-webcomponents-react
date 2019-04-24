import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Label } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Label', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Label />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
