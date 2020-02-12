import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { CSSProperties } from 'react';
import { PluginHook } from 'react-table';

export const useTableCellStyling: PluginHook<{}> = (hooks) => {
  hooks.getCellProps.push((cellProps, { cell: { column }, instance }) => {
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

    return {
      ...cellProps,
      className,
      style: {
        ...cellProps.style,
        ...style
      }
    };
  });
};
useTableCellStyling.pluginName = 'useTableCellStyling';
