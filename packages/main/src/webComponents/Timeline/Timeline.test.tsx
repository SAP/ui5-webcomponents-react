import React from 'react';
import { Timeline } from '../../lib/Timeline';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Timeline />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
