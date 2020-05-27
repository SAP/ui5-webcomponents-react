import { action } from '@storybook/addon-actions';
import { array, boolean, number, object, select, text } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/delete';
import '@ui5/webcomponents-icons/dist/icons/edit';
import '@ui5/webcomponents-icons/dist/icons/settings';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { TableScaleWidthMode } from '@ui5/webcomponents-react/lib/TableScaleWidthMode';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import React from 'react';
import generateData from './demo/generateData';
import mdx from './AnalyticalTable.mdx';

const columns = [
  {
    Header: 'Name',
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
    Filter: ({ column }) => {
      return (
        <select
          onChange={(event) => column.setFilter(event.target.value)}
          style={{ width: '100%' }}
          value={column.filterValue ? column.filterValue : 'all'}
        >
          <option value="all">Show All</option>
          <option value="true">Can Drink</option>
          <option value="false">Can't Drink</option>
        </select>
      );
    }
  },
  {
    id: 'actions',
    Header: 'Actions',
    accessor: '.',
    width: 100,
    canResize: false,
    Cell: ({ cell, row }) => {
      // console.log('This is your row data', row.original);
      return (
        <FlexBox>
          <Button icon="edit" />
          <Button icon="delete" />
        </FlexBox>
      );
    }
  }
];

const data = generateData(10_000);
const dataTree = generateData(20, true);

export const defaultTable = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AnalyticalTable
        title="Table Title"
        extension={
          <FlexBox justifyContent={FlexBoxJustifyContent.End} alignItems={FlexBoxAlignItems.Center}>
            <Text>Table Extension:</Text> <Button icon="settings" />
          </FlexBox>
        }
        data={data}
        columns={columns}
        loading={boolean('loading', false)}
        busyIndicatorEnabled={boolean('busyIndicatorEnabled', true)}
        alternateRowColor={boolean('alternateRowColor', false)}
        sortable={boolean('sortable', true)}
        filterable={boolean('filterable', true)}
        visibleRows={number('visibleRows', 15)}
        minRows={number('minRows', 5)}
        groupable={boolean('groupable', true)}
        selectionMode={select<TableSelectionMode>(
          'selectionMode',
          TableSelectionMode,
          TableSelectionMode.SINGLE_SELECT
        )}
        scaleWidthMode={select<TableScaleWidthMode>('scaleWidthMode', TableScaleWidthMode, TableScaleWidthMode.Default)}
        onRowSelected={action('onRowSelected')}
        onSort={action('onSort')}
        onGroup={action('onGroup')}
        onRowExpandChange={action('onRowExpandChange')}
        groupBy={array('groupBy', [])}
        rowHeight={number('rowHeight', 44)}
        selectedRowIds={object('selectedRowIds', { 3: true })}
        onColumnsReordered={action('onColumnsReordered')}
        withRowHighlight={boolean('withRowHighlight', true)}
        highlightField={text('highlightField', 'status')}
        infiniteScroll={boolean('infiniteScroll', true)}
        infiniteScrollThreshold={number('infiniteScrollThreshold', 20)}
        onLoadMore={action('onLoadMore')}
        selectionBehavior={select<TableSelectionBehavior>(
          'selectionBehavior',
          TableSelectionBehavior,
          TableSelectionBehavior.ROW
        )}
      />
    </div>
  );
};

defaultTable.storyName = 'Default';

export const treeTable = () => {
  return (
    <AnalyticalTable
      title="Table Title"
      data={dataTree}
      columns={columns}
      loading={boolean('loading', false)}
      busyIndicatorEnabled={boolean('busyIndicatorEnabled', true)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      visibleRows={number('visibleRows', 15)}
      minRows={number('minRows', 5)}
      selectionMode={select<TableSelectionMode>('selectionMode', TableSelectionMode, TableSelectionMode.MULTI_SELECT)}
      onRowSelected={action('onRowSelected')}
      onSort={action('onSort')}
      onRowExpandChange={action('onRowExpandChange')}
      subRowsKey={text('subRowsKey', 'subRows')}
      selectedRowIds={object('selectedRowIds', { 3: true })}
      selectionBehavior={select<TableSelectionBehavior>(
        'selectionBehavior',
        TableSelectionBehavior,
        TableSelectionBehavior.ROW
      )}
      isTreeTable={boolean('isTreeTable', true)}
    />
  );
};
treeTable.storyName = 'Tree Table';

export default {
  title: 'Components / Analytical Table',
  component: AnalyticalTable,
  parameters: {
    docs: {
      page: mdx
    }
  }
};
