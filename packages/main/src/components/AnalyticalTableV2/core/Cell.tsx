import type { Column, CoreCell, CoreHeader } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { clsx } from 'clsx';
import type { CSSProperties, HTMLAttributes } from 'react';
import { useId, useState } from 'react';
import { classNames } from '../AnalyticalTableV2.module.css.js';
import { ColumnPopover } from './ColumnPopover.js';

//todo type
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
  startIndex: number;
  isFirstFocusableCell?: boolean;
  isSortable?: boolean;
  isSelectionCell: boolean;
  isSelectableCell?: boolean;
}

//todo: create own component for header cells or handle this via props?
export function Cell<TData, TValue>(props: CellProps<TData, TValue>) {
  const {
    style = {},
    role,
    cell,
    renderable,
    startIndex,
    isFirstFocusableCell,
    isSortable,
    isSelectionCell,
    isSelectableCell,
    ...rest
  } = props;
  const cellContext = cell.getContext();
  const isInteractive = isSortable;
  const openerId = `${useId()}-opener`;

  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = () => {
    setPopoverOpen(true);
  };

  return (
    <>
      <div
        {...rest}
        id={openerId}
        role={role}
        style={{
          ...getCommonPinningStyles(cell.column),
          ...style
        }}
        className={clsx(classNames.cell, isInteractive && classNames.headerInteractive)}
        aria-colindex={startIndex + 1}
        data-cell={'true'}
        tabIndex={isFirstFocusableCell ? 0 : undefined}
        //todo: keydown (Enter) keyup(Space) required as well
        onClick={isInteractive ? openPopover : undefined}
        data-selection-cell={isSelectionCell ? 'true' : undefined}
        data-selectable-cell={isSelectableCell ? 'true' : undefined}
      >
        {flexRender(renderable, cellContext)}
      </div>
      {/*`id` as opener is simpler than Ref, because we can't add a ref directly as prop (React18)*/}
      {popoverOpen && (
        <ColumnPopover isSortable={isSortable} openerId={openerId} setOpen={setPopoverOpen} column={cell.column} />
      )}
    </>
  );
}

Cell.displayName = 'AnalyticalTableV2Cell';
