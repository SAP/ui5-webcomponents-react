import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import { mount } from 'enzyme';
import React from 'react';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<TextArea />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
