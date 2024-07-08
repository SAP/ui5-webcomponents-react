import dataLarge from '@sb/mockData/Friends500.json';
import dataTree from '@sb/mockData/FriendsTree.json';
import type { Meta, StoryObj } from '@storybook/react';
import '@ui5/webcomponents-icons/dist/delete.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/settings.js';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  TextAlign
} from '../../enums/index.js';
import { Button, MultiComboBox, MultiComboBoxItem, Option, Select, Tag, Text } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox';
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
        accessor: 'name', // String-based value accessors!
        autoResizable: true // Double clicking the resize bar auto resizes the column!
      },
      {
        Header: 'Age',
        accessor: 'age',
        autoResizable: true,
        hAlign: TextAlign.End,
        disableGroupBy: true,
        disableSortBy: false,
        disableFilters: false,
        className: 'superCustomClass'
      },
      {
        Header: 'Friend Name',
        accessor: 'friend.name',
        autoResizable: true
      },
      {
        Header: () => <span>Friend Age</span>,
        headerLabel: 'Friend Age',
        accessor: 'friend.age',
        autoResizable: true,
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
        },
        cellLabel: ({ cell }) => {
          return `${cell.cellLabel} press TAB to focus active elements inside this cell`;
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
    visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed,
    loadingDelay: 1000
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
    extension: { control: { disable: true } },
    tableInstance: { control: { disable: true } },
    portalContainer: { control: { disable: true } }
  }
} satisfies Meta<typeof AnalyticalTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
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
            <Tag>height: 300px</Tag>
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
            <Tag>height: 100px</Tag>
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
          <Tag>height: 50px</Tag>
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
        <Text>Number of visible rows: {data.length}</Text>
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
