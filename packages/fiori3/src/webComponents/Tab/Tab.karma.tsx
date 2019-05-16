import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Tab } from '../../lib/Tab';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('Tab', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tab />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
