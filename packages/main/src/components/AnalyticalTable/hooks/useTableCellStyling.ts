import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { CSSProperties } from 'react';
import { PluginHook } from 'react-table';

export const useTableCellStyling = (classes, rowHeight) => {
  const hook: PluginHook<{}> = (instance) => {
    instance.getCellProps.push((cellProps, { cell: { column } }) => {
      const style: CSSProperties = {};

      if (rowHeight) {
        style.height = `${rowHeight}px`;
      }

      switch (column.hAlign) {
        case TextAlign.Begin:
          style.textAlign = 'start';
          break;
        case TextAlign.Center:
          style.textAlign = 'center';
          break;
        case TextAlign.End:
          style.textAlign = 'end';
          break;
        case TextAlign.Left:
          style.textAlign = 'left';
          break;
        case TextAlign.Right:
          style.textAlign = 'right';
          break;
      }
      switch (column.vAlign) {
        case VerticalAlign.Bottom:
          style.verticalAlign = 'bottom';
          break;
        case VerticalAlign.Middle:
          style.verticalAlign = 'middle';
          break;
        case VerticalAlign.Top:
          style.verticalAlign = 'top';
          break;
      }

      let className = classes.tableCell;
      if (column.className) {
        className += ` ${column.className}`;
      }

      return {
        ...cellProps,
        className,
        style: {
          ...cellProps.style,
          style
        }
      };
    });
  };
  hook.pluginName = 'useTableCellStyling';
  return hook;
};
