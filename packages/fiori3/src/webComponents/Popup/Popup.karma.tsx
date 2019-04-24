import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { Popup } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe.skip('Popup', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popup />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
