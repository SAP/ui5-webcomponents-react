import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { mount } from 'enzyme';
import React from 'react';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<MessageStrip />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
