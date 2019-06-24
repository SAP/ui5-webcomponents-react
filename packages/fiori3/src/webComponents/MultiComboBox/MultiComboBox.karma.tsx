import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { MultiComboBox } from '../../lib/MultiComboBox';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('MultiComboBox', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MultiComboBox />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
