import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import { mount } from 'enzyme';
import React from 'react';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Tab />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
