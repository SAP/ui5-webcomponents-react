import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
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
    const { selectionMode, noSelectionColumn, onRowSelected } = instance.webComponentsReactProperties;

    if (selectionMode === TableSelectionMode.NONE || noSelectionColumn) {
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
        Cell: ({ row }) => {
          if (row.isGrouped && selectionMode === TableSelectionMode.SINGLE_SELECT) {
            return null;
          }
          if (selectionMode === TableSelectionMode.SINGLE_SELECT) {
            // if (instance.webComponentsReactProperties.isTreeTable) {
            //   const selectRow = () => {
            //     instance.dispatch({ type: 'SET_SELECTED_ROWS', selectedIds: { [row.id]: !row.isSelected } });
            //   };
            //   return <div style={divStyle} onClick={selectRow} />;
            // }
            // eslint-disable-next-line react/prop-types
            return <div style={divStyle} /*onClick={row.toggleRowSelected} */ />;
          }
          // if (instance.webComponentsReactProperties.isTreeTable) {
          //   const selectRow = () => {
          //     instance.dispatch({
          //       type: 'SET_SELECTED_ROWS',
          //       selectedIds: Object.assign({}, ...instance.selectedFlatRows.map((item) => ({ [item.id]: true })), {
          //         [row.id]: !row.isSelected
          //       })
          //     });
          //   };
          //   return (
          //     <CheckBox /*{...row.getToggleRowSelectedProps()}*/ onChange={selectRow} style={customCheckBoxStyling} />
          //   );
          // }
          // eslint-disable-next-line react/prop-types
          return <CheckBox {...row.getToggleRowSelectedProps()} onChange={noop} style={customCheckBoxStyling} />;
        }
      },
      ...columns
    ];
  });

  hooks.columnsDeps.push((deps, { instance: { state, webComponentsReactProperties } }) => {
    return [...deps, webComponentsReactProperties.selectionMode, webComponentsReactProperties.noSelectionColumn];
  });

  hooks.visibleColumnsDeps.push((deps, { instance }) => [
    ...deps,
    instance.webComponentsReactProperties.noSelectionColumn,
    instance.webComponentsReactProperties.selectionMode
  ]);

  hooks.visibleColumns.push((columns, { instance: { webComponentsReactProperties } }) => {
    if (
      webComponentsReactProperties.noSelectionColumn ||
      webComponentsReactProperties.selectionMode === TableSelectionMode.NONE
    ) {
      return columns;
    }

    const selectionColumn = columns.find(({ id }) => id === '__ui5wcr__internal_selection_column');
    return [selectionColumn, ...columns.filter(({ id }) => id !== '__ui5wcr__internal_selection_column')];
  });
};
useRowSelectionColumn.pluginName = 'useRowSelectionColumn';
