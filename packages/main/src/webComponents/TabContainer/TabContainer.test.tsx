import { mount } from 'enzyme';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import React from 'react';

describe('TabContainer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TabContainer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
