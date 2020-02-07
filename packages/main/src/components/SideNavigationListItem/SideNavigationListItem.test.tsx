import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import React from 'react';

describe('SideNavigationListItem', () => {
  test('Basic', () => {
    const wrapper = mountThemedComponent(<SideNavigationListItem text="Overview" icon="home" id="home" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('custom class name and style', () => {
    const wrapper = mountThemedComponent(
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
