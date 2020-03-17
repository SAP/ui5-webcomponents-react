import { mount } from 'enzyme';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<Title />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
