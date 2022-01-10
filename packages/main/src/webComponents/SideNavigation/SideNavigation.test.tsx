import { render } from '@shared/tests';
import '@ui5/webcomponents-icons/dist/calendar.js';
import '@ui5/webcomponents-icons/dist/chain-link.js';
import '@ui5/webcomponents-icons/dist/group.js';
import '@ui5/webcomponents-icons/dist/history.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/locate-me.js';
import { createCustomPropsTest } from '@shared/tests/utils';
import { SideNavigation } from '@ui5/webcomponents-react/dist/SideNavigation';
import { SideNavigationItem } from '@ui5/webcomponents-react/dist/SideNavigationItem';
import { SideNavigationSubItem } from '@ui5/webcomponents-react/dist/SideNavigationSubItem';
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
  createCustomPropsTest(SideNavigation);
});
