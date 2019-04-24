import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { CheckBox } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('CheckBox', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CheckBox />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
