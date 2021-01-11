import { CssSizeVariablesNames } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { useCallback } from 'react';

const divStyle = { width: '100%', height: '100%', cursor: 'pointer' };
const customCheckBoxStyling = {
  cursor: 'pointer',
  verticalAlign: 'middle'
};

/*
 * COMPONENTS
 */

const Header = ({
  getToggleAllRowsSelectedProps,
  flatRows,
  webComponentsReactProperties: { onRowSelected, selectionMode },
  toggleAllRowsSelected
}) => {
  const onChange = useCallback(
    (e) => {
      const allRowsSelected = e.target.checked;
      toggleAllRowsSelected(allRowsSelected);
      if (typeof onRowSelected === 'function') {
        onRowSelected(
          // cannot use instance.selectedFlatRows here as it only returns all rows on the first level
          enrichEventWithDetails(e, { allRowsSelected, selectedFlatRows: allRowsSelected ? flatRows : [] })
        );
      }
    },
    [toggleAllRowsSelected, flatRows]
  );

  if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return null;
  }
  return <CheckBox {...getToggleAllRowsSelectedProps()} style={customCheckBoxStyling} onChange={onChange} />;
};

const Cell = ({ row, webComponentsReactProperties: { selectionBehavior, selectionMode } }) => {
  const handleCellClick = useCallback(
    (e) => {
      if (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior) {
        row.getRowProps().onClick(e, true);
      }
    },
    [selectionMode, row]
  );
  if (row.isGrouped && selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return null;
  }
  if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return <div style={divStyle} onClick={handleCellClick} data-name="internal_selection_column" />;
  }
  return (
    <CheckBox
      {...row.getToggleRowSelectedProps()}
      onChange={handleCellClick}
      style={customCheckBoxStyling}
      data-name="internal_selection_column"
    />
  );
};

/*
 * TABLE HOOKS
 */

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
    webComponentsReactProperties.selectionMode === TableSelectionMode.NONE ||
    webComponentsReactProperties.selectionBehavior === TableSelectionBehavior.ROW_ONLY
  ) {
    return currentVisibleColumns;
  }

  const selectionColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
  return [selectionColumn, ...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
};
const columns = (currentColumns, { instance }) => {
  const { webComponentsReactProperties } = instance;
  const { selectionMode, selectionBehavior, tableRef } = webComponentsReactProperties;

  if (selectionMode === TableSelectionMode.NONE || selectionBehavior === TableSelectionBehavior.ROW_ONLY) {
    return currentColumns;
  }

  const selectionColumnWidth = tableRef.current
    ? parseInt(
        getComputedStyle(tableRef.current).getPropertyValue(
          `--${CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth}`
        ),
        10
      )
    : 47;
  return [
    {
      id: '__ui5wcr__internal_selection_column',
      accessor: '__ui5wcr__internal_selection_column',
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      canReorder: false,
      width: selectionColumnWidth,
      minWidth: selectionColumnWidth,
      maxWidth: selectionColumnWidth,
      Header,
      Cell
    },
    ...currentColumns
  ];
};

export const useRowSelectionColumn = (hooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
