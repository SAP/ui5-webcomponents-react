import dataLarge from '@sb/mockData/Friends500.json';
import type { Meta, StoryObj } from '@storybook/react';
import TableGrowingMode from '@ui5/webcomponents/dist/types/TableGrowingMode.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import saveIcon from '@ui5/webcomponents-icons/dist/save.js';
import { useEffect, useState } from 'react';
import { Label } from '../Label/index.js';
import { SegmentedButton } from '../SegmentedButton/index.js';
import { SegmentedButtonItem } from '../SegmentedButtonItem/index.js';
import { TableCell } from '../TableCell/index.js';
import type { TableGrowingPropTypes } from '../TableGrowing/index.js';
import { TableGrowing } from '../TableGrowing/index.js';
import { TableHeaderCell } from '../TableHeaderCell/index.js';
import { TableHeaderRow } from '../TableHeaderRow/index.js';
import { TableRow } from '../TableRow/index.js';
import { TableRowAction } from '../TableRowAction/index.js';
import { TableRowActionNavigation } from '../TableRowActionNavigation/index.js';
import { TableSelectionMulti } from '../TableSelectionMulti/index.js';
import { TableSelectionSingle } from '../TableSelectionSingle/index.js';
import type { TableVirtualizerPropTypes } from '../TableVirtualizer/index.js';
import { TableVirtualizer } from '../TableVirtualizer/index.js';
import type { TablePropTypes } from './index.js';
import { Table } from './index.js';

const popInColumns = (
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
);

const columns = (
  <TableHeaderRow sticky>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Age</TableHeaderCell>
    <TableHeaderCell>Friend Name</TableHeaderCell>
    <TableHeaderCell>Friend Age</TableHeaderCell>
  </TableHeaderRow>
);

const meta = {
  title: 'Data Display / Table',
  component: Table,
  argTypes: {
    headerRow: { control: { disable: true } },
    features: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    headerRow: popInColumns,
  },
  tags: ['package:@ui5/webcomponents'],
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
  },
};

export const GrowingTable: Story = {
  render: (args) => {
    const [mode, setMode] = useState<TableGrowingPropTypes['mode']>(TableGrowingMode.Button);
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
      <>
        <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
          Growing <code>mode</code>
        </Label>
        <SegmentedButton
          style={{ marginBlockEnd: '0.5rem' }}
          onSelectionChange={(e) => {
            setMode(e.detail.selectedItems[0].textContent as TableGrowingPropTypes['mode']);
          }}
        >
          <SegmentedButtonItem selected={mode === TableGrowingMode.Scroll}>Scroll</SegmentedButtonItem>
          <SegmentedButtonItem selected={mode === TableGrowingMode.Button}>Button</SegmentedButtonItem>
        </SegmentedButton>
        <div style={{ height: '250px', overflow: 'auto' }}>
          <Table {...args} features={<TableGrowing onLoadMore={onLoadMore} mode={mode} />}>
            {rows}
          </Table>
        </div>
      </>
    );
  },
};

export const WithSelection: Story = {
  render(args) {
    const [mode, setMode] = useState<'Single' | 'Multi' | 'None'>('Single');
    return (
      <>
        <SegmentedButton
          onSelectionChange={(e) => {
            setMode(e.detail.selectedItems[0].textContent as 'Single' | 'Multi' | 'None');
          }}
        >
          <SegmentedButtonItem selected={'None' === mode}>None</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Single' === mode}>Single</SegmentedButtonItem>
          <SegmentedButtonItem selected={'Multi' === mode}>Multi</SegmentedButtonItem>
        </SegmentedButton>
        <Table
          {...args}
          features={
            <>
              {'Single' === mode && <TableSelectionSingle />}
              {'Multi' === mode && <TableSelectionMulti />}
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
      </>
    );
  },
};

const dataLargeWithPosition = dataLarge.map((item, index) => ({ ...item, position: index }));

export const VirtualizedTableRows: Story = {
  args: { className: 'tableHeightContentDensity', headerRow: columns },
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
  },
};

export const withRowActions: Story = {
  args: { headerRow: columns, rowActionCount: 3 },
  render(args) {
    return (
      <Table {...args}>
        {dataLarge.slice(0, 10).map((row, index) => (
          <TableRow
            key={`${row.name}-${row.age}`}
            actions={
              <>
                <TableRowAction icon={editIcon}>Edit</TableRowAction>
                <TableRowAction icon={saveIcon}>Save</TableRowAction>
                <TableRowActionNavigation interactive={!!(index % 2)} />
              </>
            }
          >
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
  },
};

export const dragAndDropRows: Story = {
  args: { headerRow: columns },
  render(args) {
    const [rows, setRows] = useState(dataLargeWithPosition.slice(0, 10));

    const handleMove: TablePropTypes['onMove'] = (e) => {
      const { source, destination } = e.detail;
      // enabling this causes the Storybook to freeze due to the number of logs
      // args.onMove(e);

      setRows((prevRows) => {
        const sourceIndex = prevRows.findIndex((row) => `${row.position}` === source.element.dataset.id);
        const destinationIndex = prevRows.findIndex((row) => `${row.position}` === destination.element.dataset.id);

        if (sourceIndex === -1 || destinationIndex === -1) {
          return prevRows;
        }

        const updatedRows = [...prevRows];
        const [movedRow] = updatedRows.splice(sourceIndex, 1);

        if (destination.placement === 'Before') {
          updatedRows.splice(destinationIndex, 0, movedRow);
        } else if (destination.placement === 'After') {
          updatedRows.splice(destinationIndex + 1, 0, movedRow);
        }

        return updatedRows;
      });
    };

    const handleMoveOver: TablePropTypes['onMoveOver'] = (e) => {
      const { source, destination } = e.detail;
      // args.onMoveOver(e);

      if (
        source.element.hasAttribute('ui5-table-row') &&
        destination.element.hasAttribute('ui5-table-row') &&
        destination.placement !== 'On'
      ) {
        e.preventDefault();
      }
    };

    return (
      <Table {...args} onMove={handleMove} onMoveOver={handleMoveOver}>
        {rows.map((row) => (
          <TableRow key={row.position} movable data-id={row.position}>
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
  },
};
