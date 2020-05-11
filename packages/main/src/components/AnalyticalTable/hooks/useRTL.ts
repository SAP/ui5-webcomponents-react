import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const getHeaderProps = (props, { column, instance }) => {
  if (!instance.state.isScrollable) {
    return props;
  }
  const isRTL = getRTL();
  const lastColumnId = instance.visibleColumns[instance.visibleColumns.length - 1].id;
  const isLastColumn = column.id === lastColumnId;
  if (isLastColumn) {
    return [
      props,
      {
        style: {
          paddingLeft: isRTL ? ThemingParameters.sapScrollBar_Dimension : 0,
          paddingRight: !isRTL ? ThemingParameters.sapScrollBar_Dimension : 0
        }
      }
    ];
  }
  return props;
};

const getCellProps = (props, { cell, instance }) => {
  if (!instance.state.isScrollable) {
    return props;
  }
  const lastColumnId = instance.visibleColumns[instance.visibleColumns.length - 1].id;
  const isLastColumn = cell.column.id === lastColumnId;
  return [
    props,
    {
      style: {
        width: isLastColumn
          ? `calc(${cell.column.totalWidth}px - ${ThemingParameters.sapScrollBar_Dimension})`
          : `${cell.column.totalWidth}px`
      }
    }
  ];
};

export const useRTL = (hooks) => {
  hooks.getHeaderProps.push(getHeaderProps);
  hooks.getCellProps.push(getCellProps);
};
useRTL.plugiName = 'useRTL';
