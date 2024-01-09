import dataLarge from '@sb/mockData/Friends500.json';
import dataManualSelect from '@sb/mockData/FriendsManualSelect25.json';
import dataTree from '@sb/mockData/FriendsTree.json';
import type { Meta, StoryObj } from '@storybook/react';
import '@ui5/webcomponents-icons/dist/delete.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/settings.js';
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  InputType,
  TextAlign
} from '../../enums/index.js';
import {
  Badge,
  Button,
  CheckBox,
  Input,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  Option,
  Select,
  ToggleButton
} from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import * as AnalyticalTableHooks from './pluginHooks/AnalyticalTableHooks';
import { AnalyticalTable } from './index.js';

const meta = {
  title: 'Data Display / AnalyticalTable',
  component: AnalyticalTable,
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  args: {
    data: dataLarge,
    columns: [
      {
        Header: 'Name',
        headerTooltip: 'Full Name', // A more extensive description!
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Age',
        accessor: 'age',
        hAlign: TextAlign.End,
        disableGroupBy: true,
        disableSortBy: false,
        disableFilters: false,
        className: 'superCustomClass'
      },
      {
        Header: 'Friend Name',
        accessor: 'friend.name'
      },
      {
        Header: () => <span>Friend Age</span>,
        headerLabel: 'Friend Age',
        accessor: 'friend.age',
        hAlign: TextAlign.End,
        filter: (rows, accessor, filterValue) => {
          if (filterValue === 'all') {
            return rows;
          }
          if (filterValue === 'true') {
            return rows.filter((row) => row.values[accessor] >= 21);
          }
          return rows.filter((row) => row.values[accessor] < 21);
        },
        Filter: ({ column, popoverRef }) => {
          const handleChange = (event) => {
            // set filter
            column.setFilter(event.detail.selectedOption.getAttribute('value'));
            // close popover
            popoverRef.current.close();
          };
          return (
            <Select onChange={handleChange} style={{ width: '100%' }}>
              <Option value="all">Show All</Option>
              <Option value="true">Can Drink</Option>
              <Option value="false">Can't Drink</Option>
            </Select>
          );
        }
      },
      {
        id: 'actions',
        Header: 'Actions',
        accessor: '.',
        width: 100,
        minWidth: 100,
        disableResizing: true,
        disableGroupBy: true,
        disableFilters: true,
        disableSortBy: true,
        Cell: (instance) => {
          const { cell, row, webComponentsReactProperties } = instance;
          // disable buttons if overlay is active to prevent focus
          const isOverlay = webComponentsReactProperties.showOverlay;
          // console.log('This is your row data', row.original);
          return (
            <FlexBox>
              <Button icon="edit" disabled={isOverlay} />
              <Button icon="delete" disabled={isOverlay} />
            </FlexBox>
          );
        }
      }
    ],
    header: 'Table Title',
    sortable: true,
    filterable: true,
    visibleRows: 15,
    minRows: 5,
    groupable: true,
    groupBy: [],
    selectedRowIds: { 3: true },
    withRowHighlight: true,
    infiniteScroll: true,
    infiniteScrollThreshold: 20,
    subRowsKey: 'subRows',
    isTreeTable: false,
    scaleWidthMode: AnalyticalTableScaleWidthMode.Default,
    selectionMode: AnalyticalTableSelectionMode.SingleSelect,
    selectionBehavior: AnalyticalTableSelectionBehavior.Row,
    overscanCountHorizontal: 5,
    visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed
  },
  argTypes: {
    data: { control: { disable: true } },
    columns: {
      control: { disable: true },
      description:
        'Defines the columns array where you can define the configuration for each column.<br />Please refer to the [AnalyticalTableColumnDefinition interface](#column-properties) for a full list of options.<br /><br /><b>Must be memoized!</b>'
    },
    reactTableOptions: { control: { disable: true } },
    tableHooks: { control: { disable: true } },
    NoDataComponent: { control: { disable: true } },
    LoadingComponent: { control: { disable: true } },
    extension: { control: { disable: true } },
    tableInstance: { control: { disable: true } },
    portalContainer: { control: { disable: true } }
  }
} satisfies Meta<typeof AnalyticalTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PluginDisableRowSelection: Story = {
  name: 'Plugin: useRowDisableSelection',
  args: {
    data: dataLarge.map((item) => ({ ...item, disableSelection: Math.random() < 0.5 })),
    selectionMode: AnalyticalTableSelectionMode.MultiSelect
  },
  render: (args) => {
    const disableRowFunc = (row) => row.original.age < 40;
    const [isFunc, setIsFunc] = useState(true);
    return (
      <>
        <ToggleButton
          onClick={() => {
            setIsFunc(true);
          }}
          pressed={isFunc}
        >
          with function parameter
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setIsFunc(false);
          }}
          pressed={!isFunc}
        >
          with string parameter
        </ToggleButton>
        {isFunc ? (
          <AnalyticalTable
            data={args.data}
            columns={args.columns}
            selectionMode={args.selectionMode}
            tableHooks={[AnalyticalTableHooks.useRowDisableSelection(disableRowFunc)]}
            visibleRows={10}
            header="All under 40 are not selectable"
          />
        ) : (
          <AnalyticalTable
            data={args.data}
            columns={args.columns}
            selectionMode={args.selectionMode}
            selectionBehavior={args.selectionBehavior}
            tableHooks={[AnalyticalTableHooks.useRowDisableSelection('disableSelection')]}
            visibleRows={10}
            header={`All with "disableSelection: true" are not selectable`}
          />
        )}
      </>
    );
  }
};

export const PluginIndeterminateRowSelection: Story = {
  name: 'Plugin: useIndeterminateRowSelection',
  render: (args) => {
    const [selectSubRows, setSelectSubRows] = useReducer((prev) => !prev, true);
    return (
      <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{`${
          selectSubRows ? "Don't " : ''
        }Select Sub-Rows`}</ToggleButton>
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          data={dataTree}
          columns={args.columns}
          isTreeTable
          tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]}
          reactTableOptions={{ selectSubRows: selectSubRows }}
        />
      </>
    );
  }
};

export const PluginManualRowSelect: Story = {
  name: 'Plugin: useManualRowSelect',
  args: {
    data: dataManualSelect
  },
  render: (args) => {
    const [collapsedCode, setCollapsedCode] = useReducer((coll) => !coll, true);
    const [data, toggleFirstRowSelected] = useReducer((prev) => {
      const [, ...updatedData] = prev;
      if (prev[0].isSelected) {
        return [{ ...prev[0], isSelected: false }, ...updatedData];
      } else {
        return [{ ...prev[0], isSelected: true }, ...updatedData];
      }
    }, args.data);
    return (
      <>
        <Button onClick={toggleFirstRowSelected}>
          Toggle <code>isSelected</code> of 1st row
        </Button>
        <br />
        <Label>Clicking this button will refresh the data array passed to the `data` prop.</Label>
        <br />
        <br />
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          data={data}
          columns={args.columns}
          tableHooks={[AnalyticalTableHooks.useManualRowSelect('isSelected')]}
        />
        <Button onClick={setCollapsedCode}>Show first entries in data array</Button>
        {!collapsedCode && (
          <FlexBox direction="Column">
            <span>{JSON.stringify(data[0], null, 2)}</span>
            <span>{JSON.stringify(data[1], null, 2)}</span>
            <span>{JSON.stringify(data[2], null, 2)}</span>
            <span>{JSON.stringify(data[3], null, 2)}</span>
            <span>{JSON.stringify(data[4], null, 2)}</span>
            <span>...</span>
          </FlexBox>
        )}
      </>
    );
  }
};

export const PluginOnColumnResize: Story = {
  name: 'Plugin: useOnColumnResize',
  render: (args) => {
    const [useColResizeEvent, setUseColResizeEvent] = useState({});
    const [liveUpdate, setLiveUpdate] = useState(false);
    const [wait, setWait] = useState(100);
    const handleLiveUpdateChange = (e) => {
      setLiveUpdate(e.target.checked);
    };
    const handleWaitChange = (e) => {
      setWait(parseInt(e.target.value));
    };
    const handleColWidthUpdate = (e) => {
      setUseColResizeEvent(e);
    };
    return (
      <>
        <AnalyticalTable
          extension={
            <>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>liveUpdate: </Label>
                <CheckBox onChange={handleLiveUpdateChange} checked={liveUpdate} />
              </FlexBox>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>wait: </Label>
                <Input onInput={handleWaitChange} type={InputType.Number} value={`${wait}`} />
              </FlexBox>
              <br />
            </>
          }
          data={args.data}
          columns={args.columns}
          tableHooks={[AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, { liveUpdate, wait })]}
        />
        {!!Object.keys(useColResizeEvent).length && (
          <FlexBox direction={FlexBoxDirection.Column}>
            <br />
            <Text>Last fired callback of changed column:</Text>
            <br />
            <FlexBox>
              <Label>Column:</Label>
              <Text>{useColResizeEvent.header.id}</Text>
            </FlexBox>
            <FlexBox>
              <Label>Width:</Label>
              <Text>{useColResizeEvent.columnWidth}</Text>
            </FlexBox>
          </FlexBox>
        )}
      </>
    );
  }
};

const orderedMultiSortColumns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const orderedMultiSortData = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];

export const PluginOrderedMultiSort = {
  name: 'Plugin: useOrderedMultiSort',
  args: { orderedIds: ['name', 'name2', 'age', 'age2'] },
  argTypes: {
    orderedIds: {
      control: 'array',
      description:
        'Defines the sort priority when sorting by multiple columns, starting with the first column ID.\n' +
        '\n' +
        '**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.'
    }
  },
  render(args) {
    return (
      <AnalyticalTable
        columns={orderedMultiSortColumns}
        data={orderedMultiSortData}
        sortable
        tableHooks={[AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)]}
      />
    );
  }
};

export const TreeTable: Story = {
  args: {
    data: dataTree,
    isTreeTable: true
  }
};

export const InfiniteScrolling: Story = {
  render: (args) => {
    const [data, setData] = useState(args.data.slice(0, 50));
    const [loading, setLoading] = useState(false);
    const offset = useRef(50);
    const onLoadMore = () => {
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setData((prev) => [...prev, ...args.data.slice(offset.current, offset.current + 50)]);
          setLoading(false);
          offset.current += 50;
        }, 2000);
      }
    }, [loading, args.data, offset.current]);
    return (
      <AnalyticalTable
        data={data}
        columns={args.columns}
        infiniteScroll={true}
        infiniteScrollThreshold={10}
        header="Scroll to load more data"
        onLoadMore={onLoadMore}
        loading={loading}
      />
    );
  }
};

export const Subcomponents: Story = {
  render: (args) => {
    const renderRowSubComponent = (row) => {
      if (row.id === '0') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightblue', height: '300px' }}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Badge>height: 300px</Badge>
            <Text>This subcomponent will only be displayed below the first row.</Text>
            <hr />
            <Text>
              The button below is rendered with `data-subcomponent-active-element` attribute to ensure consistent focus
              behavior
            </Text>
            <Button data-subcomponent-active-element>Click</Button>
          </FlexBox>
        );
      }
      if (row.id === '1') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightyellow', height: '100px' }}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Badge>height: 100px</Badge>
            <Text>This subcomponent will only be displayed below the second row.</Text>
          </FlexBox>
        );
      }
      if (row.id === '2') {
        return null;
      }
      return (
        <FlexBox
          style={{ backgroundColor: 'lightgrey', height: '50px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Badge>height: 50px</Badge>
          <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
        </FlexBox>
      );
    };
    return <AnalyticalTable {...args} renderRowSubComponent={renderRowSubComponent} />;
  }
};

export const DynamicRowCount = {
  args: { visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Auto, containerHeight: 250 } as unknown,
  argTypes: {
    containerHeight: {
      options: [250, 500, 750, 1000],
      control: {
        type: 'radio'
      },
      description:
        'Select an option to change the height of the surrounding container of the table (in `px`). <br /> __Note__: This is not an actual prop of the table.'
    }
  },
  render: (args) => {
    const [data, setData] = useState(args.data);
    const handleClick = () => {
      setData((prev) => {
        if (prev.length > 4) {
          return args.data.slice(0, 4);
        } else {
          return args.data;
        }
      });
    };
    return (
      <>
        <Button onClick={handleClick}>Toggle Number of Rows</Button>
        <br />
        <Text>Number of visible rows: {args.data.length}</Text>
        <hr />
        <div style={{ height: `${args.containerHeight}px` }}>
          <AnalyticalTable
            data={data}
            columns={args.columns}
            visibleRowCountMode={args.visibleRowCountMode}
            header={`Current height: ${args.containerHeight}px - Change the height in the table above`}
          />
        </div>
      </>
    );
  }
};

export const ResponsiveColumns: Story = {
  args: {
    visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed,
    // @ts-expect-error: custom prop for the controls table
    containerWidth: 'auto',
    data: dataLarge,
    columns: [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 601,
        PopInHeader: 'Custom Header Text (age)',
        Header: 'Age',
        accessor: 'age'
      },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 401,
        Header: 'Friend Name',
        PopInHeader: (instance) => {
          return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
        },
        accessor: 'friend.name'
      },
      { disableSortBy: true, responsiveMinWidth: 401, Header: 'Friend Age', accessor: 'friend.age' },
      {
        disableSortBy: true,
        responsivePopIn: true,
        responsiveMinWidth: 801,
        id: 'actions',
        Header: 'Actions',
        width: 100,
        disableResizing: true,
        Cell: (instance) => {
          return (
            <FlexBox>
              <Button icon="edit" />
              <Button icon="delete" />
            </FlexBox>
          );
        }
      }
    ]
  },
  argTypes: {
    // @ts-expect-error: custom prop for the controls table
    containerWidth: {
      options: [400, 600, 800, 'auto'],
      control: {
        type: 'radio'
      },
      description:
        'Select an option to change the width of the surrounding container of the table (in `px`). <br /> __Note__: This is not an actual prop of the table.'
    }
  },
  render: (args) => {
    return (
      <div
        style={{
          width: args.containerWidth && typeof args.containerWidth === 'number' ? `${args.containerWidth}px` : 'auto'
        }}
      >
        <AnalyticalTable
          data={args.data}
          columns={args.columns}
          visibleRows={5}
          adjustTableHeightOnPopIn={args.adjustTableHeightOnPopIn}
          header={`Current width: ${args.containerWidth}`}
        />
      </div>
    );
  }
};

export const NavigationIndicator: Story = {
  args: { withNavigationHighlight: true, selectionMode: AnalyticalTableSelectionMode.MultiSelect, data: dataLarge },
  render: (args) => {
    const [selectedRow, setSelectedRow] = useState();
    const onRowSelect = (e) => {
      setSelectedRow(e.detail.row);
    };
    const markNavigatedRow = useCallback(
      (row) => {
        return selectedRow?.id === row.id;
      },
      [selectedRow]
    );
    return (
      <AnalyticalTable
        data={args.data}
        columns={args.columns}
        withNavigationHighlight
        selectionMode={args.selectionMode}
        markNavigatedRow={markNavigatedRow}
        onRowSelect={onRowSelect}
      />
    );
  }
};

export const CustomFilter: Story = {
  args: {
    data: dataLarge
  },
  render: (args) => {
    const filterFn = useCallback((rows, accessor, filterValue) => {
      if (filterValue.length > 0) {
        return rows.filter((row) => {
          const rowVal = row.values[accessor];
          return !!filterValue.some((item) => rowVal.includes(item));
        });
      }
      return rows;
    }, []);
    const columns = useMemo(
      () => [
        {
          Header: 'Custom Column Filter',
          accessor: 'name',
          filter: filterFn,
          Filter: ({ column }) => {
            const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
            return (
              <MultiComboBox
                placeholder="Filter Names"
                onSelectionChange={(e) => {
                  column.setFilter(e.detail.items.map((item) => item.getAttribute('text')));
                }}
              >
                {firstNames.map((item) => {
                  const isSelected = column?.filterValue?.some((filterVal) => filterVal.includes(item));
                  return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
                })}
              </MultiComboBox>
            );
          }
        },
        {
          Header: 'Age',
          accessor: 'age'
        }
      ],
      []
    );
    return <AnalyticalTable columns={columns} data={args.data} filterable />;
  }
};
