import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { Popup } from '../../lib/Popup';

use(matchSnapshot);

describe.skip('Popup', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popup />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
