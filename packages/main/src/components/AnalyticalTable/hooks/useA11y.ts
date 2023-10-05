import type { KeyboardEventHandler } from 'react';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums/index.js';

interface UpdatedCellProptypes {
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  'aria-expanded'?: string | boolean;
  'aria-label'?: string;
  'aria-colindex'?: number;
  role?: string;
}

const setCellProps = (cellProps, { cell, instance }) => {
  const { column, row, value } = cell;
  const columnIndex = instance.visibleColumns.findIndex(({ id }) => id === column.id);
  const { alwaysShowSubComponent, renderRowSubComponent, translatableTexts, selectionMode, selectionBehavior } =
    instance.webComponentsReactProperties;
  const updatedCellProps: UpdatedCellProptypes = { 'aria-colindex': columnIndex + 1, role: 'gridcell' }; // aria index is 1 based, not 0

  const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;
  const rowIsExpandable = row.canExpand || (RowSubComponent && !alwaysShowSubComponent);

  const userCols = instance.visibleColumns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const isFirstUserCol = userCols[0]?.id === column.id || userCols[0]?.accessor === column.accessor;
  updatedCellProps['data-is-first-column'] = isFirstUserCol;
  updatedCellProps['aria-label'] = column.headerLabel || (typeof column.Header === 'string' ? column.Header : '');
  if (updatedCellProps['aria-label']) {
    updatedCellProps['aria-label'] += ' ';
  }

  if ((isFirstUserCol && rowIsExpandable) || (row.isGrouped && row.canExpand)) {
    updatedCellProps.onKeyDown = row.getToggleRowExpandedProps?.()?.onKeyDown;
    let ariaLabel = '';
    if (row.isGrouped) {
      ariaLabel += translatableTexts.groupedA11yText + ',';
    }
    if (row.isExpanded) {
      updatedCellProps['aria-expanded'] = 'true';
      ariaLabel += ` ${translatableTexts.collapseA11yText}`;
    } else {
      updatedCellProps['aria-expanded'] = 'false';
      ariaLabel += ` ${translatableTexts.expandA11yText}`;
    }
    updatedCellProps['aria-label'] += ariaLabel;
  } else if (
    (selectionMode !== AnalyticalTableSelectionMode.None &&
      selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector &&
      !row.isGrouped) ||
    column.id === '__ui5wcr__internal_selection_column'
  ) {
    if (row.isSelected) {
      updatedCellProps['aria-selected'] = 'true';
      updatedCellProps['aria-label'] += `${value ?? ''} ${translatableTexts.unselectA11yText}`;
    } else {
      updatedCellProps['aria-selected'] = 'false';
      updatedCellProps['aria-label'] += `${value ?? ''} ${translatableTexts.selectA11yText}`;
    }
  }
  return [cellProps, updatedCellProps];
};

const setHeaderProps = (headerProps, { column, instance }) => {
  const { translatableTexts } = instance.webComponentsReactProperties;

  if (!column) {
    return headerProps;
  }
  const isFiltered = column?.filterValue && column?.filterValue.length > 0;

  const updatedProps = {};
  updatedProps['aria-label'] = column.headerLabel ??= '';
  if (updatedProps['aria-label']) {
    updatedProps['aria-label'] += ' ';
  }

  if (column.isSorted) {
    updatedProps['aria-sort'] = column.isSortedDesc ? 'descending' : 'ascending';
  }
  if (isFiltered) {
    updatedProps['aria-label'] += translatableTexts.filteredA11yText;
  }
  if (column.isGrouped) {
    if (updatedProps['aria-label']) {
      updatedProps['aria-label'] += ` ${translatableTexts.groupedA11yText}`;
    } else {
      updatedProps['aria-label'] += translatableTexts.groupedA11yText;
    }
  }

  return [headerProps, { isFiltered, ...updatedProps }];
};

export const useA11y = (hooks) => {
  hooks.getCellProps.push(setCellProps);
  hooks.getHeaderProps.push(setHeaderProps);
};
useA11y.pluginName = 'useA11y';
