import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';

const getToggleRowExpandedProps = (rowProps, { row, instance }) => {
  const { onRowExpandChange, isTreeTable, renderRowSubComponent } = instance.webComponentsReactProperties;
  const onClick = (e, noPropagation = true) => {
    if (noPropagation) {
      e.stopPropagation();
    }

    row.toggleRowExpanded();
    let column = null;
    if (!isTreeTable && !renderRowSubComponent) {
      column = row.cells.find((cell) => cell.column.id === row.groupByID).column;
    }

    onRowExpandChange(enrichEventWithDetails(e, { row, column }));
  };
  const onKeyDown = (e) => {
    if (e.code === 'F4') {
      e.preventDefault();
      onClick(e, false);
    } else if ((!e.shiftKey && e.code === 'Space') || e.key === 'Enter') {
      // the `onClick` event of the `Icon` component already fires the event on ENTER/SPACE press
      if (e.target.hasAttribute('ui5-icon')) {
        return;
      }
      e.preventDefault();
      onClick(e, false);
    }
  };
  const { title: _0, ...toggleRowPropsWithoutTitle } = rowProps;
  return [
    toggleRowPropsWithoutTitle,
    {
      onClick,
      onKeyDown
    }
  ];
};

export const useToggleRowExpand = (hooks) => {
  hooks.getToggleRowExpandedProps.push(getToggleRowExpandedProps);
};
useToggleRowExpand.pluginName = 'useToggleRowExpand';
