import { render } from '@shared/tests';
import '@ui5/webcomponents-icons/dist/calendar';
import '@ui5/webcomponents-icons/dist/chain-link';
import '@ui5/webcomponents-icons/dist/group';
import '@ui5/webcomponents-icons/dist/history';
import '@ui5/webcomponents-icons/dist/home';
import '@ui5/webcomponents-icons/dist/locate-me';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationItem } from '@ui5/webcomponents-react/lib/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';
import React from 'react';

describe('SideNavigation', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(
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
    expect(asFragment()).toMatchSnapshot();
  });
});
