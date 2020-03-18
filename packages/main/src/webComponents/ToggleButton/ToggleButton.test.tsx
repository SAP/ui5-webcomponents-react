import { mount } from 'enzyme';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

describe('ToggleButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ToggleButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
