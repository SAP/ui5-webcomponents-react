import type { Meta, StoryObj } from '@storybook/react';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import chainLinkIcon from '@ui5/webcomponents-icons/dist/chain-link.js';
import groupIcon from '@ui5/webcomponents-icons/dist/group.js';
import historyIcon from '@ui5/webcomponents-icons/dist/history.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';
import { SideNavigationItem } from '../SideNavigationItem/index.js';
import { SideNavigationSubItem } from '../SideNavigationSubItem/index.js';
import { SideNavigation } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / SideNavigation',
  component: SideNavigation,
  argTypes: {
    children: { control: { disable: true } },
    fixedItems: { control: { disable: true } },
    header: { control: { disable: true } }
  },
  args: {
    fixedItems: (
      <>
        <SideNavigationItem
          text="External Link"
          icon={chainLinkIcon}
          href="https://www.sap.com/index.html"
          target="_blank"
        />
        <SideNavigationItem text="History" icon={historyIcon} />
      </>
    )
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <SideNavigation {...args}>
        <SideNavigationItem text="Home" icon={homeIcon} />
        <SideNavigationItem text="People" expanded icon={groupIcon}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
        <SideNavigationItem text="Events" icon={calendarIcon}>
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
    );
  }
};
