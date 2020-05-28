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
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => (
  <SideNavigation
    openState={props.openState}
    selectedId={props.selectedId}
    onItemSelect={props.onItemSelect}
    noIcons={props.noIcons}
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

defaultStory.storyName = 'Default';

export default {
  title: 'Components / SideNavigation',
  component: SideNavigation,
  parameters: {
    subcomponents: { SideNavigationListItem }
  },
  argTypes: {
    ...createSelectArgTypes({ openState: SideNavigationOpenState })
  },
  args: {
    openState: SideNavigationOpenState.Expanded,
    selectedId: 'sales-leads'
  }
};
