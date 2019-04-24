import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { RadioButton } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('RadioButton', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<RadioButton />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
