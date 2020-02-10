import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React, { useCallback } from 'react';
import { PluginHook } from 'react-table';

const divStyle = { width: '100%', height: '100%' };
const customCheckBoxStyling = {
  '--_ui5_checkbox_compact_width_height': 'var(--_ui5_checkbox_compact_inner_size)',
  '--_ui5_checkbox_width_height': 'var(--_ui5_checkbox_inner_width_height)',
  verticalAlign: 'middle'
};
const noop = () => {
  // do nothing
};

export const useRowSelectionColumn: PluginHook<{}> = (hooks) => {
  hooks.columns.push((columns, { instance }) => {
    const { selectionMode } = instance.webComponentsReactProperties;

    if (selectionMode === TableSelectionMode.NONE) {
      return columns;
    }

    const toggleAllRowsSelected = (e) => {
      instance.toggleAllRowsSelected(e.getParameter('checked'));
    };

    return [
      // Let's make a column for selection
      {
        id: 'selection',
        sortable: false,
        groupable: false,
        filterable: false,
        disableResizing: true,
        width: 36,
        minWidth: 36,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => {
          if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
            return null;
          }
          return (
            <CheckBox
              {...getToggleAllRowsSelectedProps()}
              style={customCheckBoxStyling}
              onChange={toggleAllRowsSelected}
            />
          );
        },
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => {
          if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
            return <div style={divStyle} onClick={row.toggleRowSelected} />;
          }
          return <CheckBox {...row.getToggleRowSelectedProps()} onChange={noop} style={customCheckBoxStyling} />;
        }
      },
      ...columns
    ];
  });
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
