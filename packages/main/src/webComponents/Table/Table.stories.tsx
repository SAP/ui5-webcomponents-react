import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TableGrowingMode } from '../../enums/index.js';
import { TableCell } from '../TableCell/index.js';
import { TableColumn } from '../TableColumn/index.js';
import { TableRow } from '../TableRow/index.js';
import { Table } from './index.js';

const meta = {
  title: 'Data Display / Table',
  component: Table,
  argTypes: {
    columns: { control: { disable: true } },
    children: { control: { disable: true } }
  },
  args: {},
  tags: ['package:@ui5/webcomponents-compat']
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table
        {...args}
        columns={
          <>
            <TableColumn style={{ width: '12rem' }}>
              <span>Product</span>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <span>Supplier</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <span>Dimensions</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <span>Weight</span>
            </TableColumn>
            <TableColumn>
              <span>Price</span>
            </TableColumn>
          </>
        }
      >
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>
    );
  }
};

export const GrowingTable: Story = {
  render: () => {
    const createRows = (indexOffset) => {
      return new Array(25).fill('').map((_, index) => (
        <TableRow key={`${index + indexOffset}-row`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
        </TableRow>
      ));
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows((prev) => [...prev, ...createRows(prev.length + 1)]);
    };
    return (
      <div style={{ height: '250px', overflow: 'auto' }}>
        <Table
          onLoadMore={onLoadMore}
          growing={TableGrowingMode.Scroll}
          columns={
            <>
              <TableColumn>
                <span>Column 1</span>
              </TableColumn>
              <TableColumn>
                <span>Column 2</span>
              </TableColumn>
            </>
          }
        >
          {rows}
        </Table>
      </div>
    );
  }
};
