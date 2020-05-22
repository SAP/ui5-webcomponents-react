import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { mount } from 'enzyme';
import React from 'react';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Timeline />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
