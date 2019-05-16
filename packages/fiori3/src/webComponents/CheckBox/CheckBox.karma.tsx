import { CheckBox } from '../../lib/CheckBox';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('CheckBox', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CheckBox />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
