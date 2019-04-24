import React from 'react';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { TextArea } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

use(matchSnapshot);

describe('TextArea', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TextArea />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
