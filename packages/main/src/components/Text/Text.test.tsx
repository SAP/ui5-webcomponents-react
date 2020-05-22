import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

describe('Text', () => {
  test('Render Basic Text', () => {
    const wrapper = mount(<Text>FioriText</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('No Wrap', () => {
    const wrapper = mount(<Text wrapping={false}>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Render Whitespace', () => {
    const wrapper = mount(<Text renderWhitespace>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Renders correct Text', () => {
    const el = 'My Text';
    const wrapper = mount(<Text>{el}</Text>);
    expect(wrapper.text()).toEqual(el);
  });

  test('custom width', () => {
    const wrapper = mount(<Text style={{ width: '300px' }}>Test</Text>);
    expect(window.getComputedStyle(wrapper.getDOMNode()).width).toEqual('300px');
  });

  createPassThroughPropsTest(Text);
});
