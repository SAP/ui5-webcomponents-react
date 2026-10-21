import type { Meta, StoryObj } from '@storybook/react-vite';
import accountIcon from '@ui5/webcomponents-icons/dist/account.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/bar-chart.js';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import chainLinkIcon from '@ui5/webcomponents-icons/dist/chain-link.js';
import crmSalesIcon from '@ui5/webcomponents-icons/dist/crm-sales.js';
import customerViewIcon from '@ui5/webcomponents-icons/dist/customer-view.js';
import groupIcon from '@ui5/webcomponents-icons/dist/group.js';
import historyIcon from '@ui5/webcomponents-icons/dist/history.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';
import messageInformationIcon from '@ui5/webcomponents-icons/dist/message-information.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import { useRef, useState } from 'react';
import { SideNavigationGroup } from '../SideNavigationGroup/index.js';
import { SideNavigationItem } from '../SideNavigationItem/index.js';
import { SideNavigationSearchField } from '../SideNavigationSearchField/index.js';
import { SideNavigationSubItem } from '../SideNavigationSubItem/index.js';
import { SideNavigation } from './index.js';
import type { SideNavigationDomRef } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / SideNavigation',
  component: SideNavigation,
  argTypes: {
    children: { control: { disable: true } },
    filterSection: { control: { disable: true } },
    fixedItems: { control: { disable: true } },
    header: { control: { disable: true } },
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
    ),
  },
  tags: ['package:@ui5/webcomponents-fiori'],
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
  },
};

export const Grouped: Story = {
  render: (args) => {
    return (
      <SideNavigation {...args}>
        <SideNavigationGroup text="Group 1" expanded>
          <SideNavigationItem text="Home" icon={homeIcon} />
          <SideNavigationItem text="People" expanded icon={groupIcon}>
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup text="Group 2">
          <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
          <SideNavigationItem text="Events" icon={calendarIcon}>
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>
    );
  },
};

interface NavNode {
  title: string;
  icon?: string;
  type?: 'group';
  expanded?: boolean;
  items?: NavNode[];
}

const searchData: NavNode[] = [
  { title: 'Home', icon: homeIcon },
  {
    type: 'group',
    title: 'Business Operations',
    expanded: true,
    items: [
      {
        title: 'Customer Management',
        icon: accountIcon,
        expanded: true,
        items: [{ title: 'Contacts' }, { title: 'Companies' }, { title: 'Partners' }],
      },
      {
        title: 'Sales',
        icon: crmSalesIcon,
        expanded: true,
        items: [{ title: 'Leads' }, { title: 'Opportunities' }, { title: 'Quotes' }, { title: 'Orders' }],
      },
      {
        title: 'Products',
        icon: customerViewIcon,
        items: [{ title: 'Product Catalog' }, { title: 'Pricing' }, { title: 'Inventory Management' }],
      },
    ],
  },
  {
    type: 'group',
    title: 'System & Administration',
    expanded: true,
    items: [
      { title: 'Analytics', icon: barChartIcon },
      {
        title: 'Administration',
        icon: settingsIcon,
        items: [{ title: 'User Management' }, { title: 'System Configuration' }, { title: 'Audit Log' }],
      },
      { title: 'Notifications', icon: messageInformationIcon },
    ],
  },
];

// Keeps the branches whose title matches, preserving the matching ancestors.
function filterItems(items: NavNode[], value: string): NavNode[] {
  const query = value.toLowerCase();
  return items.reduce<NavNode[]>((result, item) => {
    if (item.title.toLowerCase().includes(query)) {
      result.push(item);
    } else if (item.items) {
      const matchingChildren = filterItems(item.items, value);
      if (matchingChildren.length > 0) {
        result.push({ ...item, items: matchingChildren });
      }
    }
    return result;
  }, []);
}

function countItems(items: NavNode[], value: string): number {
  const query = value.toLowerCase();
  return items.reduce((count, item) => {
    const selfMatch = item.title.toLowerCase().includes(query) ? 1 : 0;
    return count + selfMatch + countItems(item.items ?? [], value);
  }, 0);
}

function renderSubItem(node: NavNode) {
  return <SideNavigationSubItem key={node.title} text={node.title} />;
}

function renderItem(node: NavNode) {
  return (
    <SideNavigationItem key={node.title} text={node.title} icon={node.icon} expanded={node.expanded}>
      {node.items?.map(renderSubItem)}
    </SideNavigationItem>
  );
}

function renderNode(node: NavNode) {
  if (node.type === 'group') {
    return (
      <SideNavigationGroup key={node.title} text={node.title} expanded={node.expanded}>
        {node.items?.map(renderItem)}
      </SideNavigationGroup>
    );
  }
  return renderItem(node);
}

export const WithSearchField: Story = {
  name: 'with Search',
  render: () => {
    const [query, setQuery] = useState('');
    const sideNavRef = useRef<SideNavigationDomRef>(null);

    // Derive the visible items from the query during render - no effects, no duplicated state.
    const visibleItems = query ? filterItems(searchData, query) : searchData;

    return (
      <SideNavigation
        ref={sideNavRef}
        accessibleName="Main Navigation"
        highlightedText={query}
        filterSection={
          <SideNavigationSearchField
            placeholder="Search"
            value={query}
            onInput={(e) => {
              setQuery(e.target.value);
            }}
            onSearch={(e) => {
              const { value } = e.target;
              if (!value) {
                return;
              }
              sideNavRef.current?.announceSearchMatchCount(countItems(searchData, value));
            }}
          />
        }
      >
        {visibleItems.map(renderNode)}
      </SideNavigation>
    );
  },
};
