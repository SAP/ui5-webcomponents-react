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
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

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

export const defaultTable = (props) => {
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
        loading={props.loading}
        busyIndicatorEnabled={props.busyIndicatorEnabled}
        alternateRowColor={props.alternateRowColor}
        sortable={props.sortable}
        filterable={props.filterable}
        visibleRows={props.visibleRows}
        minRows={props.minRows}
        groupable={props.groupable}
        selectionMode={props.selectionMode}
        scaleWidthMode={props.scaleWidthMode}
        onRowSelected={props.onRowSelected}
        onSort={props.onSort}
        onGroup={props.onGroup}
        onRowExpandChange={props.onRowExpandChange}
        groupBy={props.groupBy}
        rowHeight={props.rowHeight}
        selectedRowIds={props.selectedRowIds}
        onColumnsReordered={props.onColumnsReordered}
        withRowHighlight={props.withRowHighlight}
        highlightField={props.highlightField}
        infiniteScroll={props.infiniteScroll}
        infiniteScrollThreshold={props.infiniteScrollThreshold}
        onLoadMore={props.onLoadMore}
        selectionBehavior={props.selectionBehavior}
      />
    </div>
  );
};

defaultTable.storyName = 'Default';

export const treeTable = (props) => {
  return (
    <AnalyticalTable
      title="Table Title"
      data={dataTree}
      columns={columns}
      loading={props.loading}
      busyIndicatorEnabled={props.busyIndicatorEnabled}
      sortable={props.sortable}
      filterable={props.filterable}
      visibleRows={props.visibleRows}
      minRows={props.minRows}
      selectionMode={props.selectionMode}
      onRowSelected={props.onRowSelected}
      onSort={props.onSort}
      onRowExpandChange={props.onRowExpandChange}
      subRowsKey={props.subRowsKey}
      selectedRowIds={props.selectedRowIds}
      selectionBehavior={props.selectionBehavior}
      isTreeTable={props.isTreeTable}
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
  },
  argTypes: {
    ...createSelectArgTypes({
      scaleWidthMode: TableScaleWidthMode,
      selectionMode: TableSelectionMode,
      selectionBehavior: TableSelectionBehavior
    })
  },
  args: {
    busyIndicatorEnabled: true,
    sortable: true,
    filterable: true,
    visibleRows: 15,
    minRows: 5,
    groupable: true,
    groupBy: [],
    rowHeight: 44,
    selectedRowIds: { 3: true },
    withRowHighlight: true,
    highlightField: 'status',
    infiniteScroll: true,
    infiniteScrollThreshold: 20,
    subRowsKey: 'subRows',
    isTreeTable: true,
    scaleWidthMode: TableScaleWidthMode.Default,
    selectionMode: TableSelectionMode.SINGLE_SELECT,
    selectionBehavior: TableSelectionBehavior.ROW
  }
};
