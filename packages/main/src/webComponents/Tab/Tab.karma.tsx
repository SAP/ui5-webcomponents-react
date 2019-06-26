import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Tab } from '../../lib/Tab';

use(matchSnapshot);

describe('Tab', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tab />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
