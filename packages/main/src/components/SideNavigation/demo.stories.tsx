import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';

export const defaultStory = () => (
  <SideNavigation
    openState={select('openState', SideNavigationOpenState, SideNavigationOpenState.Expandend)}
    selectedId={text('selectedId', 'sales-leads')}
    onItemSelect={action('onItemSelect')}
    noIcons={boolean('noIcons', false)}
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

defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components | SideNavigation',
  component: SideNavigation
};
