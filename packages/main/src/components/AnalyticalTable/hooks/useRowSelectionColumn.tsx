import { CssSizeVariablesNames, enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import React from 'react';
import { TableSelectionBehavior } from '../../../enums/TableSelectionBehavior';
import { TableSelectionMode } from '../../../enums/TableSelectionMode';
import { CheckBox } from '../../../webComponents/CheckBox';

const customCheckBoxStyling = {
  verticalAlign: 'middle',
  pointerEvents: 'none'
};

/*
 * COMPONENTS
 */

const Header = (instance) => {
  const {
    getToggleAllRowsSelectedProps,
    webComponentsReactProperties: { selectionMode }
  } = instance;

  if (selectionMode === TableSelectionMode.SingleSelect) {
    return null;
  }
  const checkBoxProps = getToggleAllRowsSelectedProps();
  return (
    <CheckBox
      {...checkBoxProps}
      style={customCheckBoxStyling}
      tabIndex={-1}
      onChange={undefined}
      checked={checkBoxProps.indeterminate ? true : checkBoxProps.checked}
    />
  );
};

const Cell = ({ row, webComponentsReactProperties: { selectionMode } }) => {
  if (selectionMode === TableSelectionMode.SingleSelect || row.isGrouped) {
    return null;
  }

  return (
    <CheckBox
      {...row.getToggleRowSelectedProps()}
      tabIndex={-1}
      style={customCheckBoxStyling}
      data-name="internal_selection_column"
    />
  );
};

/*
 * TABLE HOOKS
 */

const headerProps = (
  props,
  {
    instance: {
      flatRows,
      webComponentsReactProperties: { onRowSelect, selectionMode },
      toggleAllRowsSelected,
      isAllRowsSelected
    }
  }
) => {
  const style = { ...props.style, cursor: 'pointer' };
  if (props.key === 'header___ui5wcr__internal_selection_column' && selectionMode === TableSelectionMode.MultiSelect) {
    const onClick = (e) => {
      toggleAllRowsSelected();
      if (typeof onRowSelect === 'function') {
        onRowSelect(
          // cannot use instance.selectedFlatRows here as it only returns all rows on the first level
          enrichEventWithDetails(e, {
            allRowsSelected: !isAllRowsSelected,
            selectedFlatRows: !isAllRowsSelected ? flatRows : []
          })
        );
      }
    };

    const onKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        onClick(e);
      }
    };

    return [props, { onClick, onKeyDown, style }];
  }
  return props;
};

const columnDeps = (deps, { instance: { webComponentsReactProperties } }) => {
  return [...deps, webComponentsReactProperties.selectionMode, webComponentsReactProperties.selectionBehavior];
};

const visibleColumnsDeps = (deps, { instance }) => [
  ...deps,
  instance.webComponentsReactProperties.selectionMode,
  instance.webComponentsReactProperties.selectionBehavior
];

const visibleColumns = (currentVisibleColumns, { instance: { webComponentsReactProperties } }) => {
  if (
    webComponentsReactProperties.selectionMode === TableSelectionMode.None ||
    webComponentsReactProperties.selectionBehavior === TableSelectionBehavior.RowOnly
  ) {
    return currentVisibleColumns;
  }

  const selectionColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
  return [selectionColumn, ...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
};
const columns = (currentColumns, { instance }) => {
  const { webComponentsReactProperties } = instance;
  const { selectionMode, selectionBehavior, tableRef } = webComponentsReactProperties;

  if (selectionMode === TableSelectionMode.None || selectionBehavior === TableSelectionBehavior.RowOnly) {
    return currentColumns;
  }
  const tableSelectionColumnWidth =
    tableRef.current &&
    parseInt(
      getComputedStyle(tableRef.current).getPropertyValue(
        CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth
      ),
      10
    );
  const selectionColumnWidth = !isNaN(tableSelectionColumnWidth) ? tableSelectionColumnWidth : 47;

  return [
    {
      id: '__ui5wcr__internal_selection_column',
      accessor: '__ui5wcr__internal_selection_column',
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      disableDragAndDrop: true,
      width: selectionColumnWidth,
      minWidth: selectionColumnWidth,
      maxWidth: selectionColumnWidth,
      Header,
      Cell
    },
    ...currentColumns
  ];
};

const getCellProps = (props, { cell }) => {
  if (cell.column.id === '__ui5wcr__internal_selection_column') {
    const style = { ...props.style, cursor: 'pointer' };
    return [props, { style }];
  }
  return props;
};

export const useRowSelectionColumn = (hooks) => {
  hooks.getCellProps.push(getCellProps);
  hooks.getHeaderProps.push(headerProps);
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
