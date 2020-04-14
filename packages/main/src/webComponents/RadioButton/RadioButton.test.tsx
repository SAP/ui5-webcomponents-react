import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import { mount } from 'enzyme';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<RadioButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
