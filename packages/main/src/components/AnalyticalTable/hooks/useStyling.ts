import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { CSSProperties } from 'react';

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
  const { classes } = instance.webComponentsReactProperties;
  const isRTL = getRTL();
  const lastColumnId = instance.visibleColumns[instance.visibleColumns.length - 1].id;
  const isLastColumn = column.id === lastColumnId;
  const style: CSSProperties = {
    width: column.totalWidth
  };

  if (instance.state.isScrollable && isLastColumn) {
    style[isRTL ? 'paddingLeft' : 'paddingRight'] = ThemingParameters.sapScrollBar_Dimension;
  }

  if (column.id === '__ui5wcr__internal_highlight_column' || column.id === '__ui5wcr__internal_selection_column') {
    style.padding = 0;
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
    [TableSelectionMode.SINGLE_SELECT, TableSelectionMode.MULTI_SELECT].includes(selectionMode) && !isEmptyRow;

  if (row.isGrouped) {
    className += ` ${classes.tableGroupHeader}`;
  }

  if (alternateRowColor && row.index % 2 !== 0) {
    className += ` ${classes.alternateRowColor}`;
  }

  const newRowProps = {
    className,
    role: 'row',
    'aria-rowindex': row.index
  };

  if (rowCanBeSelected) {
    if (TableSelectionBehavior.ROW_SELECTOR !== selectionBehavior) {
      newRowProps.className += ` ${classes.trActive}`;
    }
    if (row.isSelected) {
      newRowProps[ROW_SELECTION_ATTRIBUTE] = '';
    }
  }

  return [rowProps, newRowProps];
};

const getCellProps = (cellProps, { cell: { column }, instance }) => {
  const columnIndex = instance.visibleColumns.findIndex(({ id }) => id === column.id);
  const isLastColumn = instance.visibleColumns.length === columnIndex + 1;
  const { classes } = instance.webComponentsReactProperties;
  const style: CSSProperties = {};

  switch (column.hAlign) {
    case TextAlign.Begin:
      style.justifyContent = 'flex-start';
      style.textAlign = 'start';
      break;
    case TextAlign.Center:
      style.justifyContent = 'center';
      style.textAlign = 'center';
      break;
    case TextAlign.End:
      style.justifyContent = 'flex-end';
      style.textAlign = 'end';
      break;
    case TextAlign.Left:
      style.justifyContent = 'left';
      style.textAlign = 'left';
      break;
    case TextAlign.Right:
      style.justifyContent = 'right';
      style.textAlign = 'right';
      break;
  }
  switch (column.vAlign) {
    case VerticalAlign.Bottom:
      style.alignItems = 'flex-end';
      break;
    case VerticalAlign.Middle:
      style.alignItems = 'center';
      break;
    case VerticalAlign.Top:
      style.alignItems = 'flex-start';
      break;
  }

  let className = classes.tableCell;
  if (column.className) {
    className += ` ${column.className}`;
  }

  if (column.id === '__ui5wcr__internal_highlight_column' || column.id === '__ui5wcr__internal_selection_column') {
    style.padding = 0;
  }

  if (isLastColumn && instance.state.isScrollable) {
    style.width = `calc(${column.totalWidth}px - ${ThemingParameters.sapScrollBar_Dimension})`;
  } else {
    style.width = `${column.totalWidth}px`;
  }

  return [
    cellProps,
    {
      className,
      style,
      tabIndex: -1,
      'aria-colindex': columnIndex + 1 // aria index is 1 based, not 0
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
