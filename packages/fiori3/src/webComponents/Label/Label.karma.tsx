import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Label } from '../../lib/Label';

use(matchSnapshot);

describe('Label', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Label />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
