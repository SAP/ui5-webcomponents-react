import React from 'react';
import { AnalyticalTable } from '../..';

export const TreeTable = (args) => {
  return (
    <React.StrictMode>
      <AnalyticalTable
        {...args}
        title={args.title}
        data={args.dataTree}
        columns={args.columns}
        loading={args.loading}
        busyIndicatorEnabled={args.busyIndicatorEnabled}
        sortable={args.sortable}
        filterable={args.filterable}
        visibleRows={args.visibleRows}
        minRows={args.minRows}
        selectionMode={args.selectionMode}
        onRowSelected={args.onRowSelected}
        onSort={args.onSort}
        onRowExpandChange={args.onRowExpandChange}
        subRowsKey={args.subRowsKey}
        selectedRowIds={args.selectedRowIds}
        selectionBehavior={args.selectionBehavior}
        isTreeTable
      />
    </React.StrictMode>
  );
};
