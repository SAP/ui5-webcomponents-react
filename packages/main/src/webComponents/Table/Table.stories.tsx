import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TableGrowingMode } from '../../enums/index.js';
import { Label } from '../Label/index.js';
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
  args: {}
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
              <Label>Product</Label>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <Label>Supplier</Label>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <Label>Dimensions</Label>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <Label>Weight</Label>
            </TableColumn>
            <TableColumn>
              <Label>Price</Label>
            </TableColumn>
          </>
        }
      >
        <TableRow disabled>
          <TableCell>
            <Label>Notebook Basic</Label>
          </TableCell>
          <TableCell>
            <Label>Very Best Screens</Label>
          </TableCell>
          <TableCell>
            <Label>30 x 18 x 3cm</Label>
          </TableCell>
          <TableCell>
            <Label>4.2KG</Label>
          </TableCell>
          <TableCell>
            <Label>956EUR</Label>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Label>Notebook Basic 17HT-1001</Label>
          </TableCell>
          <TableCell>
            <Label>Very Best Screens</Label>
          </TableCell>
          <TableCell>
            <Label>29 x 17 x 3.1cm</Label>
          </TableCell>
          <TableCell>
            <Label>4.5KG</Label>
          </TableCell>
          <TableCell>
            <Label>1249EUR</Label>
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
            <Label>{index + indexOffset}</Label>
          </TableCell>
          <TableCell>
            <Label>Placeholder</Label>
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
                <Label>Column 1</Label>
              </TableColumn>
              <TableColumn>
                <Label>Column 2</Label>
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
