import { mountThemedComponent } from '@shared/tests/utils';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';
import { ContentDensity } from '../..';

describe('SideNavigationListItem', () => {
  test('Basic', () => {
    const wrapper = mountThemedComponent(<SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('custom class name and style', () => {
    const wrapper = mountThemedComponent(
      <SideNavigationListItem
        text="Overview"
        icon="sap-icon://home"
        id="home"
        className="myClass"
        style={{ backgroundColor: 'pink' }}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('compact size', () => {
    const wrapper = mountThemedComponent(<SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" />, {
      contentDensity: ContentDensity.Compact
    });
    expect(wrapper.render()).toMatchSnapshot();
  });
});
