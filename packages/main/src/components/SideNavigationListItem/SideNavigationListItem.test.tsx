import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import React from 'react';

describe('SideNavigationListItem', () => {
  test('Basic', () => {
    const wrapper = mount(<SideNavigationListItem text="Overview" icon="home" id="home" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('custom class name and style', () => {
    const wrapper = mount(
      <SideNavigationListItem
        text="Overview"
        icon="home"
        id="home"
        className="myClass"
        style={{ backgroundColor: 'pink' }}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(SideNavigationListItem);
});
