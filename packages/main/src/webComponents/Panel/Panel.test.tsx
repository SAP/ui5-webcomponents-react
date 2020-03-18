import { mount } from 'enzyme';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import React from 'react';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Panel />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
