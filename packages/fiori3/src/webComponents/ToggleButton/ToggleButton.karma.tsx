import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { ToggleButton } from '../../lib/ToggleButton';

use(matchSnapshot);

describe('ToggleButton', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ToggleButton />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
