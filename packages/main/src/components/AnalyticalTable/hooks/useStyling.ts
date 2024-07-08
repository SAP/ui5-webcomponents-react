import type { CSSProperties } from 'react';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { getSubRowsByString, resolveCellAlignment } from '../util/index.js';

const getHeaderGroupProps = (headerGroupProps, { instance }) => {
  const { classes } = instance.webComponentsReactProperties;
  return [
    headerGroupProps,
    {
      className: classes.tableHeaderRow
    }
  ];
};

const getHeaderProps = (columnProps, { instance, column }) => {
  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;
  const { classes } = instance.webComponentsReactProperties;
  const style: CSSProperties = {
    width: column.totalWidth
  };

  if (
    column.id === '__ui5wcr__internal_highlight_column' ||
    column.id === '__ui5wcr__internal_selection_column' ||
    column.id === '__ui5wcr__internal_navigation_column'
  ) {
    style.padding = 0;
  }
  if (hasPopover) {
    style.cursor = 'pointer';
  }
  return [
    columnProps,
    {
      className: classes.th,
      column,
      style: style,
      id: column.id
    }
  ];
};

const ROW_SELECTION_ATTRIBUTE = 'data-is-selected';

const getRowProps = (rowProps, { instance, row, userProps }) => {
  const { webComponentsReactProperties } = instance;
  const { classes, selectionBehavior, selectionMode, alternateRowColor, subRowsKey } = webComponentsReactProperties;
  let className = classes.tr;
  const rowCanBeSelected = [AnalyticalTableSelectionMode.Single, AnalyticalTableSelectionMode.Multiple].includes(
    selectionMode
  );
  if (
    row.isGrouped ||
    (instance.manualGroupBy &&
      row.cells.some((item) => item.column.isGrouped) &&
      getSubRowsByString(subRowsKey, row.original) != null)
  ) {
    className += ` ${classes.tableGroupHeader}`;
  }
  if (alternateRowColor && userProps['aria-rowindex'] % 2 !== 1) {
    className += ` ${classes.alternateRowColor}`;
  }

  const newRowProps = {
    className,
    role: 'row'
  };

  if (rowCanBeSelected) {
    if (AnalyticalTableSelectionBehavior.RowSelector !== selectionBehavior) {
      newRowProps.className += ` ${classes.trActive}`;
    }
    if (row.isSelected) {
      newRowProps[ROW_SELECTION_ATTRIBUTE] = '';
    }
  }

  return [rowProps, newRowProps];
};

const getCellProps = (cellProps, { cell: { column }, instance }) => {
  const { classes } = instance.webComponentsReactProperties;
  const style: CSSProperties = { width: `${column.totalWidth}px`, ...resolveCellAlignment(column) };

  let className = classes.tableCell;
  if (column.className) {
    className += ` ${column.className}`;
  }

  if (
    column.id === '__ui5wcr__internal_highlight_column' ||
    column.id === '__ui5wcr__internal_selection_column' ||
    column.id === '__ui5wcr__internal_navigation_column'
  ) {
    style.padding = 0;
  }

  return [
    cellProps,
    {
      className,
      style,
      tabIndex: -1
    }
  ];
};

export const useStyling = (hooks: ReactTableHooks) => {
  hooks.getHeaderGroupProps.push(getHeaderGroupProps);
  hooks.getHeaderProps.push(getHeaderProps);
  hooks.getRowProps.push(getRowProps);
  hooks.getCellProps.push(getCellProps);
};
useStyling.pluginName = 'useStyling';
