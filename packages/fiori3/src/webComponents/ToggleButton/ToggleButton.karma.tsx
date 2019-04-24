import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { ToggleButton } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('ToggleButton', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ToggleButton />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
