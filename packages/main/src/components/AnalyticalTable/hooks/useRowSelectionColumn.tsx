import { CssSizeVariablesNames, enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { CSSProperties } from 'react';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';
import { CheckBox } from '../../../webComponents/CheckBox/index.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

const customCheckBoxStyling = {
  verticalAlign: 'middle',
  pointerEvents: 'none',
  display: 'block'
} as CSSProperties;

/*
 * COMPONENTS
 */

const Header = (instance: TableInstance) => {
  const {
    getToggleAllRowsSelectedProps,
    webComponentsReactProperties: { selectionMode }
  } = instance;

  if (selectionMode === AnalyticalTableSelectionMode.Single) {
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
      aria-hidden="true"
    />
  );
};

const Cell = ({ row, webComponentsReactProperties: { selectionMode } }) => {
  if (selectionMode === AnalyticalTableSelectionMode.Single || row.isGrouped) {
    return null;
  }

  return (
    <CheckBox
      {...row.getToggleRowSelectedProps()}
      tabIndex={-1}
      aria-hidden="true"
      style={customCheckBoxStyling}
      data-name="internal_selection_column"
    />
  );
};

function getNextSelectedRowIds(rowsById) {
  return Object.keys(rowsById).reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});
}

const headerProps = (props, { instance }: { instance: TableInstance }) => {
  const {
    flatRows,
    webComponentsReactProperties: {
      onRowSelect,
      selectionMode,
      translatableTexts: { selectAllText, deselectAllText }
    },
    toggleAllRowsSelected,
    isAllRowsSelected,
    rowsById,
    dispatch,
    state: { filters, globalFilter }
  } = instance;
  const style = { ...props.style, cursor: 'pointer', display: 'flex', justifyContent: 'center' };
  if (
    props.key === 'header___ui5wcr__internal_selection_column' &&
    selectionMode === AnalyticalTableSelectionMode.Multiple
  ) {
    const onClick = (e) => {
      if (typeof props.onClick === 'function') {
        props.onClick(e);
      }
      toggleAllRowsSelected(!isAllRowsSelected);
      const isFiltered = filters?.length > 0 || !!globalFilter;
      if (typeof onRowSelect === 'function') {
        if (isFiltered) {
          dispatch({ type: 'SELECT_ROW_CB', payload: { event: e, row: undefined, selectAll: true, fired: true } });
        } else {
          onRowSelect(
            // cannot use instance.selectedFlatRows here as it only returns all rows on the first level
            enrichEventWithDetails(e, {
              allRowsSelected: !isAllRowsSelected,
              selectedFlatRows: !isAllRowsSelected ? flatRows : [],
              selectedRowIds: !isAllRowsSelected ? getNextSelectedRowIds(rowsById) : {}
            })
          );
        }
      }
    };

    const onKeyDown = (e) => {
      if (typeof props.onKeyDown === 'function') {
        props.onKeyDown(e);
      }
      if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (e.code === 'Enter') {
          onClick(e);
        }
      }
    };

    const onKeyUp = (e) => {
      if (typeof props.onKeyUp === 'function') {
        props.onKeyUp(e);
      }
      if (e.code === 'Space') {
        e.preventDefault();
        onClick(e);
      }
    };

    return [props, { onClick, onKeyDown, onKeyUp, style, title: isAllRowsSelected ? deselectAllText : selectAllText }];
  }
  return props;
};

const columnDeps = (deps, { instance: { webComponentsReactProperties } }: { instance: TableInstance }) => {
  return [...deps, webComponentsReactProperties.selectionMode, webComponentsReactProperties.selectionBehavior];
};

const visibleColumnsDeps = (deps, { instance }: { instance: TableInstance }) => [
  ...deps,
  instance.webComponentsReactProperties.selectionMode,
  instance.webComponentsReactProperties.selectionBehavior
];

const visibleColumns = (
  currentVisibleColumns,
  { instance: { webComponentsReactProperties } }: { instance: TableInstance }
) => {
  if (
    webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.None ||
    webComponentsReactProperties.selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly
  ) {
    return currentVisibleColumns;
  }

  const selectionColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
  return [selectionColumn, ...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
};
const columns = (currentColumns, { instance }: { instance: TableInstance }) => {
  const { webComponentsReactProperties } = instance;
  const { selectionMode, selectionBehavior, tableRef } = webComponentsReactProperties;

  if (
    selectionMode === AnalyticalTableSelectionMode.None ||
    selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly
  ) {
    return currentColumns;
  }
  const tableSelectionColumnWidth =
    tableRef.current &&
    parseInt(
      getComputedStyle(tableRef.current).getPropertyValue(
        CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth
      ),
      10
    );
  const selectionColumnWidth = !isNaN(tableSelectionColumnWidth) ? tableSelectionColumnWidth : 47;

  return [
    {
      id: '__ui5wcr__internal_selection_column',
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

const getCellProps = (props, { cell }: { cell: TableInstance['cell'] }) => {
  if (cell.column.id === '__ui5wcr__internal_selection_column') {
    const style = { ...props.style, cursor: 'pointer', justifyContent: 'center' };
    return [props, { style }];
  }
  return props;
};

const setToggleAllRowsSelectedProps = (
  props,
  { instance: { webComponentsReactProperties } }: { instance: TableInstance }
) => {
  const { classes } = webComponentsReactProperties;
  return [props, { className: classes.checkBox, title: undefined }];
};
const setToggleRowSelectedProps = (props, { instance: { webComponentsReactProperties } }) => {
  const { classes } = webComponentsReactProperties;
  return [props, { className: classes.checkBox, title: undefined }];
};

export const useRowSelectionColumn = (hooks: ReactTableHooks) => {
  hooks.getCellProps.push(getCellProps);
  hooks.getHeaderProps.push(headerProps);
  hooks.getToggleRowSelectedProps.push(setToggleRowSelectedProps);
  hooks.getToggleAllRowsSelectedProps.push(setToggleAllRowsSelectedProps);
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
