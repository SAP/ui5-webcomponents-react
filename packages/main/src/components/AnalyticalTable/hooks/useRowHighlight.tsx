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

/*
 * COMPONENTS
 */
const Header = () => <div style={{ width: '6px' }} />;

const Cell = ({ cell: { value } }) => {
  return <div style={StyleMap.get(value)} />;
};

/*
 * TABLE HOOKS
 */
const columnsDeps = (deps, { instance: { webComponentsReactProperties } }) => {
  return [...deps, webComponentsReactProperties.withRowHighlight, webComponentsReactProperties.highlightField];
};
const visibleColumnsDeps = (deps, { instance }) => [...deps, instance.webComponentsReactProperties.withRowHighlight];
const visibleColumns = (columns, { instance: { webComponentsReactProperties } }) => {
  if (!webComponentsReactProperties.withRowHighlight) {
    return columns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column');
  }

  const highlightColumn = columns.find(({ id }) => id === '__ui5wcr__internal_highlight_column');
  return [highlightColumn, ...columns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column')];
};

const columns = (columns, { instance }) => {
  const { withRowHighlight, highlightField } = instance.webComponentsReactProperties;

  if (!withRowHighlight) {
    return columns;
  }
  return [
    {
      id: '__ui5wcr__internal_highlight_column',
      accessor: highlightField,
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      canReorder: false,
      width: 6,
      minWidth: 6,
      maxWidth: 6,
      Header,
      Cell
    },
    ...columns
  ];
};

export const useRowHighlight = (hooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};

useRowHighlight.pluginName = 'useRowHighlight';
