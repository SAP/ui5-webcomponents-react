import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchItem } from '../SearchItem/index.js';
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
    action: { control: { disable: true } }
  },
  tags: ['package:@ui5/webcomponents-fiori']
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
  { name: 'Tablet', scope: 'products' }
];

export const WithScopeAndItems: Story = {
  parameters: {
    docs: { description: { story: 'A `Search` component with enabled scope, items and filtering by scope.' } }
  },
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopes: (
      <>
        <SearchScope selected text="All" />
        <SearchScope text="Apps" />
        <SearchScope text="Products" />
      </>
    )
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
          })
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
  }
};
