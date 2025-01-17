import dataLarge from '@sb/mockData/Friends500.json';
import type { Meta, StoryObj } from '@storybook/react';
import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@ui5/webcomponents-react';
import { AnalyticalTableV2 } from './index.js';

//todo: any
const columns: ColumnDef<any>[] = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age' },
  { header: 'Friend Name', accessorKey: 'friend.name' },
  { header: 'Friend Age', accessorKey: 'friend.age' },
  {
    header: 'Column Pinned',
    id: 'c_pinned',
    cell: ({ row }) => {
      return 'Pinned';
    }
  },
  {
    header: 'Pin Row',
    id: 'r_pinned',
    size: 300,
    cell: ({ row }) => {
      return (
        <>
          <Button
            onClick={() => {
              row.pin('top');
            }}
          >
            Pin Top
          </Button>
          <Button
            onClick={() => {
              row.pin('bottom');
            }}
          >
            Pin Bottom
          </Button>
          <Button
            onClick={() => {
              row.pin(false);
            }}
          >
            Reset Pin
          </Button>
        </>
      );
    }
  }
];

const meta = {
  title: 'Data Display / AnalyticalTableV2',
  component: AnalyticalTableV2,
  args: {
    data: dataLarge.map((item, index) => ({ ...item, friend: { ...item.friend, age: index } })),
    columns,
    visibleRows: 5
  },
  argTypes: { data: { control: { disable: true } }, columns: { control: { disable: true } } }
} satisfies Meta<typeof AnalyticalTableV2>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return (
      <>
        <div style={{ height: '300px' }}></div>
        <AnalyticalTableV2 {...args} />
      </>
    );
  }
};
