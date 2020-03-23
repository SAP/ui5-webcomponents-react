import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';

describe('SideNavigation', () => {
  test('Expanded', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Expandend}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="home" id="home" tooltip="Nav To Home Tooltip" />
        <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Expanded without Icons', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Expandend}
        selectedId={'sales-leads'}
        noIcons
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="home" id="home" />
        <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Condensed', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Condensed}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="home" id="home" />
        <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
  test('Collapsed', () => {
    const wrapper = mount(
      <SideNavigation
        openState={SideNavigationOpenState.Collapsed}
        selectedId={'sales-leads'}
        footerItems={[
          <SideNavigationListItem id="1" text="Legal Information" icon="compare" />,
          <SideNavigationListItem id="2" text="Useful Links" icon="chain-link" />
        ]}
      >
        <SideNavigationListItem text="Overview" icon="home" id="home" />
        <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
        <SideNavigationListItem text="Customers" icon="employee" id="customers" />
        <SideNavigationListItem text="Sales" icon="lead" id="sales">
          <SideNavigationListItem text="My Opportunities" icon="home" id="sales-opportunities" />
          <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
          <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
        </SideNavigationListItem>
        <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
      </SideNavigation>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(SideNavigation);
});
