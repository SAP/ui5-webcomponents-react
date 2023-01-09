import { KeyboardEventHandler } from 'react';
import { AnalyticalTableSelectionBehavior, AnalyticalTableSelectionMode } from '../../../enums';

interface UpdatedCellProptypes {
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  'aria-expanded'?: string | boolean;
  'aria-label'?: string;
  'aria-colindex'?: number;
}

const getCellProps = (cellProps, { cell: { column, row, value }, instance }) => {
  const columnIndex = instance.visibleColumns.findIndex(({ id }) => id === column.id);
  const { alwaysShowSubComponent, renderRowSubComponent, translatableTexts, selectionMode, selectionBehavior } =
    instance.webComponentsReactProperties;
  const updatedCellProps: UpdatedCellProptypes = { 'aria-colindex': columnIndex + 1 }; // aria index is 1 based, not 0

  if (row.original?.emptyRow) {
    return [cellProps, updatedCellProps];
  }

  const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;
  const rowIsExpandable = row.canExpand || (RowSubComponent && !alwaysShowSubComponent);

  const userCols = instance.visibleColumns.filter(
    ({ id }) =>
      id !== '__ui5wcr__internal_selection_column' &&
      id !== '__ui5wcr__internal_highlight_column' &&
      id !== '__ui5wcr__internal_navigation_column'
  );

  const isFirstUserCol = userCols[0].id === column.id || userCols[0].accessor === column.accessor;
  updatedCellProps['data-is-first-column'] = isFirstUserCol;

  if ((isFirstUserCol && rowIsExpandable) || (row.isGrouped && row.canExpand)) {
    updatedCellProps.onKeyDown = row.getToggleRowExpandedProps?.()?.onKeyDown;
    if (row.isExpanded) {
      updatedCellProps['aria-expanded'] = 'true';
      updatedCellProps['aria-label'] = translatableTexts.collapseA11yText;
    } else {
      updatedCellProps['aria-expanded'] = 'false';
      updatedCellProps['aria-label'] = translatableTexts.expandA11yText;
    }
  } else if (
    (selectionMode !== AnalyticalTableSelectionMode.None &&
      selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector &&
      !row.isGrouped) ||
    column.id === '__ui5wcr__internal_selection_column'
  ) {
    if (row.isSelected) {
      updatedCellProps['aria-selected'] = 'true';
      updatedCellProps['aria-label'] = `${value ?? ''} ${translatableTexts.unselectA11yText}`;
    } else {
      updatedCellProps['aria-selected'] = 'false';
      updatedCellProps['aria-label'] = `${value ?? ''} ${translatableTexts.selectA11yText}`;
    }
  }

  return [cellProps, updatedCellProps];
};

export const useA11y = (hooks) => {
  hooks.getCellProps.push(getCellProps);
};
useA11y.pluginName = 'useA11y';
