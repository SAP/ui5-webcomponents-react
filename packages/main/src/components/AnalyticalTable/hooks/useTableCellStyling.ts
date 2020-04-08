import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { CSSProperties } from 'react';

const getCellProps = (cellProps, { cell: { column }, instance }) => {
  const lastColumnId = instance.visibleColumns[instance.visibleColumns.length - 1]?.id;
  const columnIndex = instance.visibleColumns.findIndex(({ id }) => id === column.id);
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

  if (column.id === lastColumnId) {
    style.paddingRight = `calc(${ThemingParameters.sapScrollBar_Dimension} + 0.5rem)`;
    style.boxSizing = 'border-box';
    style.width = `calc(${cellProps.style.width} - ${ThemingParameters.sapScrollBar_Dimension})`;
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

export const useTableCellStyling = (hooks) => {
  hooks.getCellProps.push(getCellProps);
};
useTableCellStyling.pluginName = 'useTableCellStyling';
