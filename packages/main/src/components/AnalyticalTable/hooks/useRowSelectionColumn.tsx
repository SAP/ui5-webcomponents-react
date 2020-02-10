import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React from 'react';
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
    const { selectionMode, noSelectionColumn } = instance.webComponentsReactProperties;

    if (selectionMode === TableSelectionMode.NONE || noSelectionColumn) {
      return columns;
    }

    const toggleAllRowsSelected = (e) => {
      instance.toggleAllRowsSelected(e.getParameter('checked'));
    };

    return [
      // Let's make a column for selection
      {
        id: '__ui5wcr__internal_selection_column',
        accessor: '__ui5wcr__internal_selection_column',
        sortable: false,
        groupable: false,
        filterable: false,
        disableResizing: true,
        width: 36,
        minWidth: 36,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        // eslint-disable-next-line react/prop-types,react/display-name
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
        // eslint-disable-next-line react/prop-types,react/display-name
        Cell: ({ row }) => {
          if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
            // eslint-disable-next-line react/prop-types
            return <div style={divStyle} onClick={row.toggleRowSelected} />;
          }
          // eslint-disable-next-line react/prop-types
          return <CheckBox {...row.getToggleRowSelectedProps()} onChange={noop} style={customCheckBoxStyling} />;
        }
      },
      ...columns
    ];
  });
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
