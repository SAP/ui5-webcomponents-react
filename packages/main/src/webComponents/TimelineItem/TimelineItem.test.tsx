import { mountThemedComponent } from '@shared/tests/utils';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import React from 'react';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TimelineItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
