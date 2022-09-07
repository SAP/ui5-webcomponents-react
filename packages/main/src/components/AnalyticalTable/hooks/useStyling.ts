import { CSSProperties } from 'react';
import { TableSelectionBehavior } from '../../../enums/TableSelectionBehavior';
import { TableSelectionMode } from '../../../enums/TableSelectionMode';
import { resolveCellAlignment } from '../util';

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

const getRowProps = (rowProps, { instance, row }) => {
  const { webComponentsReactProperties } = instance;
  const { classes, selectionBehavior, selectionMode, alternateRowColor } = webComponentsReactProperties;
  const isEmptyRow = row.original?.emptyRow;
  let className = classes.tr;
  const rowCanBeSelected =
    [TableSelectionMode.SingleSelect, TableSelectionMode.MultiSelect].includes(selectionMode) && !isEmptyRow;

  if (row.isGrouped) {
    className += ` ${classes.tableGroupHeader}`;
  }

  if (alternateRowColor && row.index % 2 !== 0) {
    className += ` ${classes.alternateRowColor}`;
  }

  const newRowProps = {
    className,
    role: 'row'
  };

  if (rowCanBeSelected) {
    if (TableSelectionBehavior.RowSelector !== selectionBehavior) {
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

export const useStyling = (hooks) => {
  hooks.getHeaderGroupProps.push(getHeaderGroupProps);
  hooks.getHeaderProps.push(getHeaderProps);
  hooks.getRowProps.push(getRowProps);
  hooks.getCellProps.push(getCellProps);
};
useStyling.pluginName = 'useStyling';
