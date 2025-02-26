import type { Column, CoreCell, CoreHeader } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { CSSProperties, HTMLAttributes } from 'react';
import { classNames } from '../AnalyticalTableV2.module.css.js';

const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    insetInlineStart: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    insetInlineEnd: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0
  };
};

interface CellProps<TData, TValue> {
  style?: CSSProperties;
  role: HTMLAttributes<HTMLDivElement>['role'];
  /**
   * cell object (e.g. `header`, `cell`)
   */
  cell: CoreCell<TData, TValue> | CoreHeader<TData, TValue>;
  //todo type
  renderable: any;
}

export function Cell<TData, TValue>(props: CellProps<TData, TValue>) {
  const { style = {}, role, cell, renderable } = props;
  const cellContext = cell.getContext();

  return (
    <div
      role={role}
      style={{
        ...getCommonPinningStyles(cell.column),
        ...style
      }}
      className={classNames.cell}
    >
      {flexRender(renderable, cellContext)}
    </div>
  );
}

Cell.displayName = 'AnalyticalTableV2Cell';
