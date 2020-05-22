import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { mount } from 'enzyme';
import React from 'react';

describe('BusyIndicator', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<BusyIndicator />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
