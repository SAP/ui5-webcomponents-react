import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

const baseStyles = {
  width: '100%',
  height: '100%'
};

const StyleMap = new Map();
StyleMap.set(ValueState.None, baseStyles);
StyleMap.set(ValueState.Success, { ...baseStyles, backgroundColor: ThemingParameters.sapSuccessColor });
StyleMap.set(ValueState.Warning, { ...baseStyles, backgroundColor: ThemingParameters.sapWarningColor });
StyleMap.set(ValueState.Error, { ...baseStyles, backgroundColor: ThemingParameters.sapErrorColor });
StyleMap.set(ValueState.Information, { ...baseStyles, backgroundColor: ThemingParameters.sapInformationColor });

export const useRowHighlight = (hooks) => {
  hooks.columns.push((columns, { instance }) => {
    const { withRowHighlight, highlightField } = instance.webComponentsReactProperties;

    if (!withRowHighlight) {
      return columns;
    }

    return [
      {
        id: '__ui5wcr__internal_highlight_column',
        accessor: highlightField,
        sortable: false,
        groupable: false,
        filterable: false,
        disableResizing: true,
        canReorder: false,
        width: 6,
        minWidth: 6,
        maxWidth: 6,
        // eslint-disable-next-line react/display-name
        Header: () => <div style={{ width: '6px' }} />,
        // eslint-disable-next-line react/display-name,react/prop-types
        Cell: ({ cell: { value } }) => {
          return <div style={StyleMap.get(value)} />;
        }
      },
      ...columns
    ];
  });

  hooks.columnsDeps.push((deps, { instance: { webComponentsReactProperties } }) => {
    return [...deps, webComponentsReactProperties.withRowHighlight, webComponentsReactProperties.highlightField];
  });

  hooks.visibleColumnsDeps.push((deps, { instance }) => [
    ...deps,
    instance.webComponentsReactProperties.withRowHighlight
  ]);

  hooks.visibleColumns.push((columns, { instance: { webComponentsReactProperties } }) => {
    if (!webComponentsReactProperties.withRowHighlight) {
      return columns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column');
    }

    const highlightColumn = columns.find(({ id }) => id === '__ui5wcr__internal_highlight_column');
    return [highlightColumn, ...columns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column')];
  });
};

useRowHighlight.pluginName = 'useRowHighlight';
