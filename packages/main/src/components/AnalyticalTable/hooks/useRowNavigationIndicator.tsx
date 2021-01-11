import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

const baseStyles = {
  width: '100%',
  height: '100%'
};

/*
 * COMPONENTS
 */
const Header = () => <div style={{ width: '6px' }} />;

const Cell = ({ isNavigatedCell }) => {
  if (isNavigatedCell) {
    return <div style={{ ...baseStyles, backgroundColor: ThemingParameters.sapList_SelectionBorderColor }} />;
  }
  return <div style={baseStyles} />;
};

/*
 * TABLE HOOKS
 */
const columnsDeps = (deps, { instance: { webComponentsReactProperties } }) => {
  return [...deps, webComponentsReactProperties.withNavigationHighlight];
};
const visibleColumnsDeps = (deps, { instance }) => [
  ...deps,
  instance.webComponentsReactProperties.withNavigationHighlight
];
const visibleColumns = (currentVisibleColumns, { instance: { webComponentsReactProperties } }) => {
  if (!webComponentsReactProperties.withNavigationHighlight) {
    return currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_navigation_column');
  }

  const highlightColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_navigation_column');
  return [...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_navigation_column'), highlightColumn];
};

const columns = (currentColumns, { instance }) => {
  const { withNavigationHighlight } = instance.webComponentsReactProperties;

  if (!withNavigationHighlight) {
    return currentColumns;
  }
  return [
    ...currentColumns,
    {
      id: '__ui5wcr__internal_navigation_column',
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
    }
  ];
};

export const useRowNavigationIndicators = (hooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
