import { KeyboardEventHandler } from 'react';
import { TableSelectionBehavior, TableSelectionMode } from '../../../enums';
import { stopPropagation } from '../../../internal/stopPropagation';

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

  if (isFirstUserCol && rowIsExpandable) {
    updatedCellProps.onKeyDown = (e) => {
      if (e.key === 'Enter' || e.code === 'Space') {
        // don't bubble event to prevent click of selection row
        stopPropagation(e);
        e.preventDefault();
        row.toggleRowExpanded();
      }
    };
    if (row.isExpanded) {
      updatedCellProps['aria-expanded'] = 'true';
    } else {
      updatedCellProps['aria-expanded'] = 'false';
    }
  } else if (
    (selectionMode !== TableSelectionMode.None && selectionBehavior !== TableSelectionBehavior.RowSelector) ||
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
