import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React from 'react';
import { getBy } from '../util';

type DisableRowSelectionType = string | ((row: Record<any, any>) => boolean);

/**
 * A plugin hook for disabling row selection of specific rows.
 * __Note:__ The "Select All" checkbox is not available with this hook.
 *
 * @param disableRowSelection - Can be either a `string` or a `function`. `string:` Defines the key in the dataset for disabling rows. If the value of the key is `true`, then the row will not be selectable. `function:` Programmatically disable rows for selection. The function receives the current row as parameter.
 */
export const useRowDisableSelection = (disableRowSelection: DisableRowSelectionType) => {
  const getRowProps = (rowProps, { row, instance }) => {
    const { webComponentsReactProperties } = instance;
    if (typeof disableRowSelection === 'function' && disableRowSelection?.(row) === true) {
      row.disableSelect = true;
      return { ...rowProps, onClick: undefined, className: webComponentsReactProperties.classes.tr };
    }
    if (typeof disableRowSelection === 'string' && getBy(row.original, disableRowSelection, undefined) === true) {
      row.disableSelect = true;
      return { ...rowProps, onClick: undefined, className: webComponentsReactProperties.classes.tr };
    }
    return rowProps;
  };

  const customCheckBoxStyling = {
    verticalAlign: 'middle'
  };
  const columns = (columns) => {
    return columns.map((column) => {
      if (column.id === '__ui5wcr__internal_selection_column') {
        return {
          ...column,
          Cell: (instance) => {
            const { webComponentsReactProperties, row } = instance;
            if (row.disableSelect === true) {
              if (row.isGrouped && webComponentsReactProperties.selectionMode === TableSelectionMode.SINGLE_SELECT) {
                return null;
              }
              if (webComponentsReactProperties.selectionMode === TableSelectionMode.SINGLE_SELECT) {
                return <div onClick={undefined} data-name="internal_selection_column" />;
              }
              return (
                <CheckBox
                  {...row.getToggleRowSelectedProps()}
                  disabled
                  style={customCheckBoxStyling}
                  data-name="internal_selection_column"
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

  const useDisableSelectionRow = (hooks) => {
    hooks.getRowProps.push(getRowProps);
    hooks.columns.push(columns);
  };

  return useDisableSelectionRow;
};

useRowDisableSelection.pluginName = 'useRowDisableSelection';
