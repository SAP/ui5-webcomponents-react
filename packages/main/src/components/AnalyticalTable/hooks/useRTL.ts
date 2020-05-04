import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const visibleColumns = (currentVisibleColumns) => {
  if (getRTL()) {
    return currentVisibleColumns.reverse();
  }
  return currentVisibleColumns;
};
const getHeaderProps = (props, { column, instance }) => {
  if (!instance.state.isScrollable) {
    return props;
  }
  const isRTL = getRTL();
  const lastColumnId = instance.visibleColumns[isRTL ? 0 : instance.visibleColumns.length - 1].id;
  const isLastColumn = column.id === lastColumnId;
  return [
    props,
    {
      style: {
        paddingLeft: isRTL && isLastColumn ? ThemingParameters.sapScrollBar_Dimension : 0,
        paddingRight: !isRTL && isLastColumn ? ThemingParameters.sapScrollBar_Dimension : 0
      }
    }
  ];
};

const getCellProps = (props, { cell, instance }) => {
  if (!instance.state.isScrollable) {
    return props;
  }
  const isRTL = getRTL();
  const lastColumnId = instance.visibleColumns[isRTL ? 0 : instance.visibleColumns.length - 1].id;
  const isLastColumn = cell.column.id === lastColumnId;
  return [
    props,
    {
      style: {
        left:
          isRTL && !isLastColumn
            ? `calc(${cell.column.totalLeft}px - ${ThemingParameters.sapScrollBar_Dimension})`
            : `${cell.column.totalLeft}px`,
        width: isLastColumn
          ? `calc(${cell.column.totalWidth}px - ${ThemingParameters.sapScrollBar_Dimension})`
          : `${cell.column.totalWidth}px`
      }
    }
  ];
};

export const useRTL = (hooks) => {
  hooks.visibleColumns.push(visibleColumns);
  hooks.getHeaderProps.push(getHeaderProps);
  hooks.getCellProps.push(getCellProps);
};
useRTL.plugiName = 'useRTL';
