import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import { mount } from 'enzyme';
import React from 'react';

describe('TimelineItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TimelineItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
