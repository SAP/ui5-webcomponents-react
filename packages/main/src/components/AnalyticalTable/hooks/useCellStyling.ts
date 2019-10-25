import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { CSSProperties } from 'react';

export const useCellStyling = ({ rowHeight }, classes) => ({ column }) => {
  const style: CSSProperties = {};

  if (rowHeight) {
    style.height = `${rowHeight}px`;
  }
  switch (column.hAlign) {
    case TextAlign.Begin:
      style.justifyContent = 'flex-start';
      break;
    case TextAlign.Center:
      style.justifyContent = 'center';
      break;
    case TextAlign.End:
      style.justifyContent = 'flex-end';
      break;
    case TextAlign.Left:
      style.justifyContent = 'left';
      break;
    case TextAlign.Right:
      style.justifyContent = 'right';
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

  return {
    className: classes.tableCell,
    style
  };
};
