import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';
import { CheckBox } from '../../../webComponents/CheckBox/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { getBy } from '../util/index.js';

type DisableRowSelectionType = string | ((row: Record<any, any>) => boolean);

const customCheckBoxStyling = {
  verticalAlign: 'middle'
};

const headerProps = (
  props,
  {
    instance: {
      webComponentsReactProperties: { selectionMode }
    }
  }
) => {
  if (
    props.key === 'header___ui5wcr__internal_selection_column' &&
    selectionMode === AnalyticalTableSelectionMode.Multiple
  ) {
    const style = { ...props.style, cursor: 'auto' };
    return [props, { onClick: undefined, onKeyDown: undefined, title: undefined, style }];
  }
  return props;
};

const columns = (columns) => {
  return columns.map((column) => {
    if (column.id === '__ui5wcr__internal_selection_column') {
      return {
        ...column,
        Cell: (instance) => {
          const { webComponentsReactProperties, row } = instance;
          if (row.disableSelect === true) {
            if (row.isGrouped && webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return null;
            }
            if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return <div onClick={undefined} data-name="internal_selection_column" />;
            }
            return (
              <CheckBox
                {...row.getToggleRowSelectedProps()}
                disabled
                style={customCheckBoxStyling}
                data-name="internal_selection_column"
                tabIndex={-1}
              />
            );
          }
          return column.Cell(instance);
        },
        Header: () => null
      };
    }
    return column;
  });
};

/**
 * A plugin hook for disabling row selection of specific rows.
 *
 * __Note:__ The "Select All" checkbox is not available with this hook.
 *
 * @param disableRowSelection - Can be either a `string` or a `function`. `string:` Defines the key in the dataset for disabling rows. If the value of the key is `true`, then the row will not be selectable. `function:` Programmatically disable rows for selection. The function receives the current row as parameter.
 *
 * @deprecated It is not recommended to disable table rows, mainly because of the following reasons:
 *
 * * Users are not informed why items cannot be selected.
 * * ARIA lacks built-in support for selective item selection, complicating accessibility.
 * * Consistency to other applications which do not offer disabled items.
 */
export const useRowDisableSelection = (disableRowSelection: DisableRowSelectionType) => {
  const disableRowAccessor =
    typeof disableRowSelection === 'function'
      ? disableRowSelection
      : (d) => getBy(d.original, disableRowSelection, undefined);

  const getRowProps = (rowProps, { row, instance }) => {
    const { webComponentsReactProperties } = instance;
    if (disableRowAccessor(row) === true) {
      row.disableSelect = true;
      const handleClick = (e) => {
        if (typeof webComponentsReactProperties.onRowClick === 'function') {
          webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
        }
      };
      const onKeyDown = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          if (e.code === 'Enter' && typeof webComponentsReactProperties.onRowClick === 'function') {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
          }
        }
      };
      const onKeyUp = (e) => {
        if (e.code === 'Space') {
          e.preventDefault();
          if (typeof webComponentsReactProperties.onRowClick === 'function') {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
          }
        }
      };
      return {
        ...rowProps,
        onClick: handleClick,
        onKeyDown,
        onKeyUp,
        className: webComponentsReactProperties.classes.tr
      };
    }
    return rowProps;
  };

  const columnDeps = (deps) => {
    return [...deps, disableRowSelection];
  };

  const cellProps = (cellProps, { cell: { row, column }, instance }) => {
    const { selectionMode, selectionBehavior } = instance.webComponentsReactProperties;
    if (
      disableRowAccessor(row) === true &&
      selectionMode !== AnalyticalTableSelectionMode.None &&
      (selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector ||
        column.id === '__ui5wcr__internal_selection_column')
    ) {
      const { 'aria-label': _0, ...updatedCellProps } = cellProps;
      if (column.id === '__ui5wcr__internal_selection_column') {
        const style = { ...cellProps.style, cursor: 'auto' };
        return { ...updatedCellProps, 'aria-disabled': true, style };
      }
      const { 'aria-selected': _1, ...updatedCellProsWithOutSelected } = updatedCellProps;
      return updatedCellProsWithOutSelected;
    }

    return cellProps;
  };

  const toggleRowSelectedProps = (rowProps, { row }) => {
    if (disableRowAccessor(row) === true) {
      const { title: _0, ...updatedRowProps } = rowProps;
      return updatedRowProps;
    }
    return rowProps;
  };

  const useDisableSelectionRow = (hooks: ReactTableHooks) => {
    hooks.getHeaderProps.push(headerProps);
    hooks.getRowProps.push(getRowProps);
    hooks.columns.push(columns);
    hooks.columnsDeps.push(columnDeps);
    hooks.getCellProps.push(cellProps);
    hooks.getToggleRowSelectedProps.push(toggleRowSelectedProps);
  };

  useDisableSelectionRow.pluginName = 'useRowDisableSelection';

  return useDisableSelectionRow;
};
