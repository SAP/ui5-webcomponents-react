import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';
import '@ui5/webcomponents/dist/icons/compare';
import '@ui5/webcomponents/dist/icons/chain-link';
import '@ui5/webcomponents/dist/icons/home';
import '@ui5/webcomponents/dist/icons/calendar';
import '@ui5/webcomponents/dist/icons/employee';
import '@ui5/webcomponents/dist/icons/lead';
import '@ui5/webcomponents/dist/icons/add-product';
import notes from './SideNavigation.md';

export const defaultStory = () => (
  <SideNavigation
    openState={select('openState', SideNavigationOpenState, SideNavigationOpenState.Expanded)}
    selectedId={text('selectedId', 'sales-leads')}
    onItemSelect={action('onItemSelect')}
    noIcons={boolean('noIcons', false)}
    style={{ height: '900px' }}
    footerItems={[
      <SideNavigationListItem id="footer1" text="Legal Information" icon="sap-icon://compare" />,
      <SideNavigationListItem id="footer2" text="Useful Links" icon="sap-icon://chain-link" />
    ]}
  >
    <SideNavigationListItem text="Overview" icon="sap-icon://home" id="home" tooltip="Nav To Home" />
    <SideNavigationListItem text="Calendar" icon="sap-icon://calendar" id="calendar" />
    <SideNavigationListItem text="Customers" icon="sap-icon://employee" id="customers" />
    <SideNavigationListItem text="Sales" icon="sap-icon://lead" id="sales" tooltip="Sales">
      <SideNavigationListItem
        text="My Opportunities"
        icon="sap-icon://home"
        id="sales-opportunities"
        tooltip="sales-opportunities"
      />
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
  component: SideNavigation,
  parameters: { notes }
};
