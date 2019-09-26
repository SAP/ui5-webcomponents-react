import { mountThemedComponent } from '@shared/tests/utils';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';

describe('SideNavigation', () => {
  test('Expanded', () => {
    const wrapper = mountThemedComponent(
      <SideNavigation
        openState={SideNavigationOpenState.Expandend}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem text="Legal Information" icon="sap-icon://compare" />,
          <SideNavigationListItem text="Useful Links" icon="sap-icon://chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" tooltip="Nav To Home Tooltip" />
        <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="sap-icon://home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="sap-icon://home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="sap-icon://home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="sap-icon://add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Expanded without Icons', () => {
    const wrapper = mountThemedComponent(
      <SideNavigation
        openState={SideNavigationOpenState.Expandend}
        selectedId={'sales-leads'}
        noIcons
        footerItems={[
          <SideNavigationListItem text="Legal Information" icon="sap-icon://compare" />,
          <SideNavigationListItem text="Useful Links" icon="sap-icon://chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" />
        <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="sap-icon://home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="sap-icon://home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="sap-icon://home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="sap-icon://add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Condensed', () => {
    const wrapper = mountThemedComponent(
      <SideNavigation
        openState={SideNavigationOpenState.Condensed}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem text="Legal Information" icon="sap-icon://compare" />,
          <SideNavigationListItem text="Useful Links" icon="sap-icon://chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" />
        <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="sap-icon://home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="sap-icon://home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="sap-icon://home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="sap-icon://add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
  test('Collapsed', () => {
    const wrapper = mountThemedComponent(
      <SideNavigation
        openState={SideNavigationOpenState.Collapsed}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem text="Legal Information" icon="sap-icon://compare" />,
          <SideNavigationListItem text="Useful Links" icon="sap-icon://chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" />
        <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="sap-icon://home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="sap-icon://home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="sap-icon://home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="sap-icon://add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
