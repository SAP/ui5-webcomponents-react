import type { Meta, StoryObj } from '@storybook/react-vite';
import globeIcon from '@ui5/webcomponents-icons/dist/globe.js';
import historyIcon from '@ui5/webcomponents-icons/dist/history.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { useState } from 'react';
import { SearchItem } from '../SearchItem/index.js';
import { SearchItemGroup } from '../SearchItemGroup/index.js';
import { SearchItemShowMore } from '../SearchItemShowMore/index.js';
import { SearchScope } from '../SearchScope/index.js';
import { Search } from './index.js';
import type { SearchPropTypes } from './index.js';

const meta = {
  title: 'Inputs / Search',
  component: Search,
  argTypes: {
    children: { control: { disable: true } },
    illustration: { control: { disable: true } },
    scopes: { control: { disable: true } },
    messageArea: { control: { disable: true } },
    action: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-fiori', 'experimental'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const scopeData = [
  { name: 'Laptop', scope: 'products' },
  { name: 'Leave Requests', scope: 'apps' },
  { name: 'Log work', scope: 'apps' },
  { name: 'Manage Products', scope: 'apps' },
  { name: 'Mobile Phones', scope: 'products' },
  { name: 'Tablet', scope: 'products' },
];

export const WithScopeAndItems: Story = {
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopes: (
      <>
        <SearchScope selected text="All" />
        <SearchScope text="Apps" />
        <SearchScope text="Products" />
      </>
    ),
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);

    const handleScopeChange: SearchPropTypes['onScopeChange'] = (e) => {
      args.onScopeChange(e);
      const { scope } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(
          scopeData.filter((item) => {
            return item.scope === scope.text.toLowerCase();
          }),
        );
      }
    };

    return (
      <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map((item) => {
          return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
        })}
      </Search>
    );
  },
};

const allItems = [
  { text: 'Search Item 1', icon: historyIcon },
  { text: 'Search Item 2', icon: searchIcon },
  { text: 'Search Item 3', icon: historyIcon },
  { text: 'Search Item 4', icon: historyIcon },
  { text: 'Search Item 5', icon: searchIcon },
  { text: 'Search Item 6', icon: globeIcon },
];
const visibleItems = allItems.slice(0, 3);
const hiddenItems = allItems.slice(3);

export const ShowMoreItem: Story = {
  args: {
    showClearIcon: true,
    placeholder: 'Placeholder',
  },
  render(args) {
    const [showHiddenItems, setShowHiddenItems] = useState(false);

    return (
      <Search {...args}>
        <SearchItemGroup headerText="Group Header 1">
          {visibleItems.map((item) => {
            return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
          })}
          {!showHiddenItems && (
            <SearchItemShowMore
              itemsToShowCount={hiddenItems.length}
              onClick={() => {
                setShowHiddenItems(true);
              }}
            />
          )}
          {showHiddenItems &&
            hiddenItems.map((item) => {
              return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
            })}
        </SearchItemGroup>
        <SearchItemGroup headerText="Group Header 2">
          <SearchItem text="Search Item 1" icon={historyIcon} />
          <SearchItem text="Search Item 2" icon={historyIcon} />
          <SearchItem text="Search Item 3" icon={globeIcon} />
        </SearchItemGroup>
      </Search>
    );
  },
};
