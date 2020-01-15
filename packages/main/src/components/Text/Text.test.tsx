import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

describe('Text', () => {
  test('Render Basic Text', () => {
    const wrapper = mountThemedComponent(<Text>FioriText</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('No Wrap', () => {
    const wrapper = mountThemedComponent(<Text wrapping={false}>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Render Whitespace', () => {
    const wrapper = mountThemedComponent(<Text renderWhitespace>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Renders correct Text', () => {
    const el = 'My Text';
    const wrapper = mountThemedComponent(<Text>{el}</Text>);
    expect(wrapper.text()).toEqual(el);
  });

  test('custom width', () => {
    const wrapper = mountThemedComponent(<Text width="300px">Test</Text>);
    expect(window.getComputedStyle(wrapper.getDOMNode()).width).toEqual('300px');
  });

  createPassThroughPropsTest(Text);
});
