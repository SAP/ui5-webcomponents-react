import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/add-product';
import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/chain-link';
import '@ui5/webcomponents-icons/dist/icons/compare';
import '@ui5/webcomponents-icons/dist/icons/employee';
import '@ui5/webcomponents-icons/dist/icons/home';
import '@ui5/webcomponents-icons/dist/icons/lead';
import { SideNavigation } from '@ui5/webcomponents-react/lib/SideNavigation';
import { SideNavigationListItem } from '@ui5/webcomponents-react/lib/SideNavigationListItem';
import { SideNavigationOpenState } from '@ui5/webcomponents-react/lib/SideNavigationOpenState';
import React from 'react';

export const defaultStory = () => (
  <SideNavigation
    openState={select('openState', SideNavigationOpenState, SideNavigationOpenState.Expanded)}
    selectedId={text('selectedId', 'sales-leads')}
    onItemSelect={action('onItemSelect')}
    noIcons={boolean('noIcons', false)}
    style={{ height: '900px' }}
    footerItems={[
      <SideNavigationListItem id="footer1" text="Legal Information" icon="compare" />,
      <SideNavigationListItem id="footer2" text="Useful Links" icon="chain-link" />
    ]}
  >
    <SideNavigationListItem text="Overview" icon="home" id="home" tooltip="Nav To Home" />
    <SideNavigationListItem text="Calendar" icon="calendar" id="calendar" />
    <SideNavigationListItem text="Customers" icon="employee" id="customers" />
    <SideNavigationListItem text="Sales" icon="lead" id="sales" tooltip="Sales">
      <SideNavigationListItem
        text="My Opportunities"
        icon="home"
        id="sales-opportunities"
        tooltip="sales-opportunities"
      />
      <SideNavigationListItem text="My Leads" icon="home" id="sales-leads" />
      <SideNavigationListItem text="My CPQS" icon="home" id="sales-cpqs" />
    </SideNavigationListItem>
    <SideNavigationListItem text="Deliveries" icon="add-product" id="delivieries" />
  </SideNavigation>
);

defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / SideNavigation',
  component: SideNavigation,
  parameters: {
    subcomponents: { SideNavigationListItem }
  }
};
