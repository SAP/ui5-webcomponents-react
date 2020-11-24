import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { useCallback } from 'react';

const getToggleRowExpandedProps = (rowProps, { row, instance }) => {
  const { onRowExpandChange, isTreeTable, renderRowSubComponent } = instance.webComponentsReactProperties;
  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      e.persist();
      row.toggleRowExpanded();
      let column = null;
      if (!isTreeTable && !renderRowSubComponent) {
        column = row.cells.find((cell) => cell.column.id === row.groupByID).column;
      }

      onRowExpandChange(enrichEventWithDetails(e, { row, column }));
    },
    [row, isTreeTable, onRowExpandChange]
  );
  return [
    rowProps,
    {
      onClick
    }
  ];
};

export const useToggleRowExpand = (hooks) => {
  hooks.getToggleRowExpandedProps.push(getToggleRowExpandedProps);
};
useToggleRowExpand.pluginName = 'useToggleRowExpand';
