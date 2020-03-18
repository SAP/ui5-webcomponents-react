import { mount } from 'enzyme';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import React from 'react';

describe('BusyIndicator', () => {
  test('Basic Test', () => {
    const wrapper = mount(<BusyIndicator active />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Inactive', () => {
    const wrapper = mount(<BusyIndicator />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Size Medium', () => {
    const wrapper = mount(<BusyIndicator active size={BusyIndicatorSize.Medium} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Size Small', () => {
    const wrapper = mount(<BusyIndicator active size={BusyIndicatorSize.Small} />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
