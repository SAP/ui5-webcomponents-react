import { CssSizeVariablesNames } from '@ui5/webcomponents-react-base/dist/CssSizeVariables';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/dist/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/dist/TableSelectionMode';
import React, { useCallback } from 'react';

const divStyle = { width: '100%', height: '100%', cursor: 'pointer' };
const customCheckBoxStyling = {
  cursor: 'pointer',
  verticalAlign: 'middle'
};

/*
 * COMPONENTS
 */

const Header = (instance) => {
  const {
    getToggleAllRowsSelectedProps,
    webComponentsReactProperties: { selectionMode }
  } = instance;

  if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return null;
  }
  const checkBoxProps = getToggleAllRowsSelectedProps();
  return <CheckBox {...checkBoxProps} style={customCheckBoxStyling} tabIndex={-1} onChange={undefined} />;
};

const Cell = ({ row, webComponentsReactProperties: { selectionBehavior, selectionMode } }) => {
  const handleCellClick = (e) => {
    if (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior) {
      row.getRowProps().onClick(e, true);
    }
  };

  if (row.isGrouped && selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return null;
  }
  if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
    return <div style={divStyle} onClick={handleCellClick} data-name="internal_selection_column" />;
  }

  return (
    <CheckBox
      {...row.getToggleRowSelectedProps()}
      tabIndex={-1}
      onChange={handleCellClick}
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
      webComponentsReactProperties: { onRowSelected, selectionMode },
      toggleAllRowsSelected,
      isAllRowsSelected
    }
  }
) => {
  if (props.key === 'header___ui5wcr__internal_selection_column' && selectionMode === TableSelectionMode.MULTI_SELECT) {
    const onClick = (e) => {
      toggleAllRowsSelected();
      if (typeof onRowSelected === 'function') {
        onRowSelected(
          // cannot use instance.selectedFlatRows here as it only returns all rows on the first level
          enrichEventWithDetails(e, {
            allRowsSelected: isAllRowsSelected,
            selectedFlatRows: isAllRowsSelected ? flatRows : []
          })
        );
      }
    };

    const onKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        onClick(e);
      }
    };
    return [props, { onClick, onKeyDown }];
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
  const tableSelectionColumnWidth =
    tableRef.current &&
    parseInt(
      getComputedStyle(tableRef.current).getPropertyValue(
        `--${CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth}`
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
  hooks.getHeaderProps.push(headerProps);
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
