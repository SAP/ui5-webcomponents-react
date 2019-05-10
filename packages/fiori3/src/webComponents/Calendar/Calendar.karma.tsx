import { Calendar } from '@lib/Calendar';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Calendar', () => {
  it('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Calendar />);
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
