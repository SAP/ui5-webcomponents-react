import { CssSizeVariablesNames, enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import React from 'react';
import { TableSelectionBehavior } from '../../../enums/TableSelectionBehavior';
import { TableSelectionMode } from '../../../enums/TableSelectionMode';
import { CheckBox } from '../../../webComponents/CheckBox';

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

const Cell = ({ row, webComponentsReactProperties: { selectionBehavior, selectionMode } }) => {
  const handleCellClick = (e) => {
    if (TableSelectionBehavior.RowSelector === selectionBehavior) {
      row.getRowProps().onClick(e, true);
    }
  };

  if (row.isGrouped && selectionMode === TableSelectionMode.SingleSelect) {
    return null;
  }
  if (selectionMode === TableSelectionMode.SingleSelect) {
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
  if (props.key === 'header___ui5wcr__internal_selection_column' && selectionMode === TableSelectionMode.MultiSelect) {
    const onClick = (e) => {
      toggleAllRowsSelected();
      if (typeof onRowSelected === 'function') {
        onRowSelected(
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

export const useRowSelectionColumn = (hooks) => {
  hooks.getHeaderProps.push(headerProps);
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
