import dataLarge from '@sb/mockData/Friends500.json';
import type { Meta, StoryObj } from '@storybook/react';
import TableGrowingMode from '@ui5/webcomponents/dist/types/TableGrowingMode.js';
import TableSelectionMode from '@ui5/webcomponents/dist/types/TableSelectionMode.js';
import type { TableVirtualizerPropTypes } from '@ui5/webcomponents-react';
import { SegmentedButton, SegmentedButtonItem } from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';
import { TableCell } from '../TableCell/index.js';
import { TableGrowing } from '../TableGrowing/index.js';
import { TableHeaderCell } from '../TableHeaderCell/index.js';
import { TableHeaderRow } from '../TableHeaderRow/index.js';
import { TableRow } from '../TableRow/index.js';
import { TableSelection } from '../TableSelection/index.js';
import { TableVirtualizer } from '../TableVirtualizer/index.js';
import { Table } from './index.js';

const meta = {
  title: 'Data Display / Table',
  component: Table,
  argTypes: {
    headerRow: { control: { disable: true } },
    features: { control: { disable: true } },
    children: { control: { disable: true } }
  },
  args: {
    headerRow: (
      <TableHeaderRow sticky>
        <TableHeaderCell width={'200px'} minWidth={'200px'}>
          <span>Product</span>
        </TableHeaderCell>
        <TableHeaderCell minWidth={'200px'}>
          <span>Supplier</span>
        </TableHeaderCell>
        <TableHeaderCell minWidth={'200px'}>
          <span>Dimensions</span>
        </TableHeaderCell>
        <TableHeaderCell minWidth={'100px'} maxWidth="200px">
          <span>Weight</span>
        </TableHeaderCell>
        <TableHeaderCell minWidth="200px">
          <span>Price</span>
        </TableHeaderCell>
      </TableHeaderRow>
    )
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table {...args}>
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
  render: (args) => {
    const createRows = (indexOffset) => {
      return new Array(25).fill('').map((_, index) => (
        <TableRow key={`${index + indexOffset}-row`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 2</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 3</span>
          </TableCell>
          <TableCell>
            <span>Placeholder 4</span>
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
        <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} type={TableGrowingMode.Scroll} />}>
          {rows}
        </Table>
      </div>
    );
  }
};

export const WithSelection: Story = {
  render(args) {
    const [mode, setMode] = useState<TableSelectionMode>(TableSelectionMode.Multiple);
    return (
      <>
        <SegmentedButton
          onSelectionChange={(e) => {
            setMode(e.detail.selectedItems[0].textContent);
          }}
        >
          {Object.values(TableSelectionMode).map((selectionMode) => (
            <SegmentedButtonItem key={selectionMode} selected={selectionMode === mode}>
              {selectionMode}
            </SegmentedButtonItem>
          ))}
        </SegmentedButton>
        <Table {...args} features={<TableSelection mode={mode} />}>
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
      </>
    );
  }
};

const dataLargeWithPosition = dataLarge.map((item, index) => ({ ...item, position: index }));

export const VirtualizedTableRows: Story = {
  args: { className: 'tableHeightContentDensity' },
  render(args) {
    const [data, setData] = useState(dataLargeWithPosition.slice(0, 9));
    const [isCozy, setIsCozy] = useState(true);

    const handleRangeChange: TableVirtualizerPropTypes['onRangeChange'] = (e) => {
      const { first, last } = e.detail;

      // overscanCount = 2
      const overscanCountStart = Math.max(first - 2, 0);
      const overscanCountEnd = Math.min(last + 2, dataLargeWithPosition.length);
      setData(dataLargeWithPosition.slice(overscanCountStart, overscanCountEnd));
    };

    // adjust row height according to content-density mode (only for demo purposes)
    useEffect(() => {
      const body = document.body;
      if (!body) return;

      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setIsCozy(!body.classList.contains('ui5-content-density-compact'));
          }
        });
      });
      observer.observe(body, { attributes: true, attributeFilter: ['class'] });
      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <Table
        {...args}
        headerRow={
          <TableHeaderRow sticky>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Friend Name</TableHeaderCell>
            <TableHeaderCell>Friend Age</TableHeaderCell>
          </TableHeaderRow>
        }
        features={<TableVirtualizer rowCount={500} rowHeight={isCozy ? 44 : 32} onRangeChange={handleRangeChange} />}
      >
        {data.map((row) => (
          <TableRow key={row.position} position={row.position}>
            <TableCell>
              <span>{row.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.age}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.name}</span>
            </TableCell>
            <TableCell>
              <span>{row.friend.age}</span>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    );
  }
};
