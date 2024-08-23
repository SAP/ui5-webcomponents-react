import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { IndicationColor } from '../../../enums/index.js';
import type { ReactTableHooks, TableInstance } from '../types/index.js';

const baseStyles = {
  width: '100%',
  height: '100%'
};

const HighlightColors = {
  ...ValueState,
  ...IndicationColor,
  None: undefined
};

/*
 * COMPONENTS
 */
const Header = () => <div style={{ width: '6px' }} />;

const Cell = (instance: TableInstance) => {
  const { cell, webComponentsReactProperties } = instance;
  const styleClass = HighlightColors[cell?.value]
    ? webComponentsReactProperties.classes[HighlightColors[cell.value].toLowerCase()]
    : undefined;
  return <div style={baseStyles} className={styleClass} data-component-name="AnalyticalTableHighlightCell" />;
};

/*
 * TABLE HOOKS
 */
const columnsDeps = (deps, { instance: { webComponentsReactProperties } }: { instance: TableInstance }) => {
  return [...deps, webComponentsReactProperties.withRowHighlight, webComponentsReactProperties.highlightField];
};
const visibleColumnsDeps = (deps, { instance }: { instance: TableInstance }) => [
  ...deps,
  instance.webComponentsReactProperties.withRowHighlight
];
const visibleColumns = (
  currentVisibleColumns,
  { instance: { webComponentsReactProperties } }: { instance: TableInstance }
) => {
  if (!webComponentsReactProperties.withRowHighlight) {
    return currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column');
  }

  const highlightColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_highlight_column');
  return [highlightColumn, ...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_highlight_column')];
};

const columns = (currentColumns, { instance }: { instance: TableInstance }) => {
  const { withRowHighlight, highlightField } = instance.webComponentsReactProperties;

  if (!withRowHighlight) {
    return currentColumns;
  }
  return [
    {
      id: '__ui5wcr__internal_highlight_column',
      accessor: highlightField,
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      disableDragAndDrop: true,
      width: 6,
      minWidth: 6,
      maxWidth: 6,
      Header,
      Cell
    },
    ...currentColumns
  ];
};

export const useRowHighlight = (hooks: ReactTableHooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};

useRowHighlight.pluginName = 'useRowHighlight';
