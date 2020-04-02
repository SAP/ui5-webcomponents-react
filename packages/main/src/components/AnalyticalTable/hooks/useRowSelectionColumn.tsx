import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React from 'react';
import { PluginHook } from 'react-table';
import { toggleSelected } from '../util';

const divStyle = { width: '100%', height: '100%', cursor: 'pointer' };
const customCheckBoxStyling = {
  '--_ui5_checkbox_compact_width_height': 'var(--_ui5_checkbox_compact_inner_size)',
  '--_ui5_checkbox_width_height': 'var(--_ui5_checkbox_inner_width_height)',
  cursor: 'pointer',
  verticalAlign: 'middle'
};
const noop = () => {
  // do nothing
};

export const useRowSelectionColumn: PluginHook<{}> = (hooks) => {
  hooks.columns.push((columns, { instance }) => {
    const { webComponentsReactProperties } = instance;
    const { selectionMode, onRowSelected, selectionBehavior } = webComponentsReactProperties;

    if (selectionMode === TableSelectionMode.NONE || selectionBehavior === TableSelectionBehavior.ROW_ONLY) {
      return columns;
    }

    const toggleAllRowsSelected = (e) => {
      const allRowsSelected = e.target.checked;
      instance.toggleAllRowsSelected(allRowsSelected);
      if (typeof onRowSelected === 'function') {
        onRowSelected(
          //cannot use instance.selectedFlatRows here as it only returns all rows on the first level
          enrichEventWithDetails(e, { allRowsSelected, selectedFlatRows: allRowsSelected ? instance.flatRows : [] })
        );
      }
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
        canReorder: false,
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
        Cell: (instance) => {
          const { row, webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows } = instance;
          const handleCellClick = (e) => {
            if (TableSelectionBehavior.ROW_SELECTOR === selectionBehavior) {
              toggleSelected(e, row, webComponentsReactProperties, dispatch, toggleRowSelected, selectedFlatRows);
            } else {
              noop();
            }
          };
          if (row.isGrouped && selectionMode === TableSelectionMode.SINGLE_SELECT) {
            return null;
          }
          if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
            return <div style={divStyle} onClick={handleCellClick} />;
          }
          return (
            <CheckBox {...row.getToggleRowSelectedProps()} onChange={handleCellClick} style={customCheckBoxStyling} />
          );
        }
      },
      ...columns
    ];
  });

  hooks.columnsDeps.push((deps, { instance: { state, webComponentsReactProperties } }) => {
    return [...deps, webComponentsReactProperties.selectionMode, webComponentsReactProperties.selectionBehavior];
  });

  hooks.visibleColumnsDeps.push((deps, { instance }) => [
    ...deps,
    instance.webComponentsReactProperties.selectionMode,
    instance.webComponentsReactProperties.selectionBehavior
  ]);

  hooks.visibleColumns.push((columns, { instance: { webComponentsReactProperties } }) => {
    if (
      webComponentsReactProperties.selectionMode === TableSelectionMode.NONE ||
      webComponentsReactProperties.selectionBehavior === TableSelectionBehavior.ROW_ONLY
    ) {
      return columns;
    }

    const selectionColumn = columns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
    return [selectionColumn, ...columns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
  });
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
