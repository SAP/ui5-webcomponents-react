import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/chain-link';
import '@ui5/webcomponents-icons/dist/icons/group';
import '@ui5/webcomponents-icons/dist/icons/history';
import '@ui5/webcomponents-icons/dist/icons/home';
import '@ui5/webcomponents-icons/dist/icons/locate-me';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';
import { mount } from 'enzyme';
import React from 'react';

describe('SideNavigation', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(
      <SideNavigation
        fixedItems={
          <>
            <SideNavigationItem text="Useful Links" icon="chain-link" />
            <SideNavigationItem text="History" icon="history" />
          </>
        }
      >
        <SideNavigationItem text="Home" icon="home" />
        <SideNavigationItem text="People" expanded icon="group">
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon="locate-me" selected />
        <SideNavigationItem text="Events" icon="calendar">
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
