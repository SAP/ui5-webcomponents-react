import React from 'react';
import { TimelineItem } from '../../lib/TimelineItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TimelineItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
