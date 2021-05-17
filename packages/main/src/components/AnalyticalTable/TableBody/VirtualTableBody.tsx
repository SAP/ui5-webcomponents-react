import '@ui5/webcomponents-icons/dist/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import React, { MutableRefObject, ReactNode, useCallback, useMemo, useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { RowSubComponent as SubComponent } from './RowSubComponent';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: any[];
  minRows: number;
  reactWindowRef: MutableRefObject<any>;
  isTreeTable: boolean;
  internalRowHeight: number;
  visibleRows: number;
  alternateRowColor: boolean;
  overscanCount: number;
  visibleColumns: any[];
  tableRef: MutableRefObject<any>;
  visibleColumnsWidth: any[];
  parentRef: MutableRefObject<any>;
  overscanCountHorizontal: number;
  renderRowSubComponent: (row?: any) => ReactNode;
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: (row?: Record<any, any>) => boolean;
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: any }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    classes,
    prepareRow,
    rows,
    minRows,
    reactWindowRef,
    isTreeTable,
    internalRowHeight,
    visibleRows,
    overscanCount,
    visibleColumns,
    tableRef,
    visibleColumnsWidth,
    parentRef,
    overscanCountHorizontal,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight
  } = props;

  const itemCount = Math.max(minRows, rows.length);
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const consolidatedParentRef = useConsolidatedRef(parentRef);
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;

  const rowVirtualizer = useVirtual({
    size: itemCount,
    parentRef: consolidatedParentRef,
    estimateSize: React.useCallback(
      (index) => {
        if (
          renderRowSubComponent &&
          (rows[index].isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[index]?.rowId === rows[index].id
        ) {
          return rowHeight + (subComponentsHeight?.[index]?.subComponentHeight ?? 0);
        }
        return rowHeight;
      },
      [rowHeight, rows, renderRowSubComponent, alwaysShowSubComponent, subComponentsHeight]
    ),
    overscan
  });
  const columnVirtualizer = useVirtual({
    size: visibleColumns.length,
    parentRef: tableRef,
    estimateSize: useCallback(
      (index) => {
        return visibleColumnsWidth[index];
      },
      [visibleColumnsWidth]
    ),
    horizontal: true,
    overscan: overscanCountHorizontal
  });

  reactWindowRef.current = {
    ...reactWindowRef.current,
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  };

  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const onTableFocus = useCallback(
    (e) => {
      const firstCell: HTMLDivElement = e.target.querySelector(
        'div[role="row"]:first-child div[role="cell"]:first-child'
      );
      if (firstCell) {
        firstCell.tabIndex = 0;
        firstCell.focus();
        currentlyFocusedCell.current = firstCell;
      } else {
        if (e.target.tabIndex !== undefined) {
          currentlyFocusedCell.current = e.target;
          e.target.tabIndex = 0;
        }
      }
    },
    [currentlyFocusedCell]
  );

  const onKeyboardNavigation = useCallback(
    (e) => {
      if (currentlyFocusedCell.current) {
        switch (e.key) {
          case 'ArrowRight': {
            const newElement = currentlyFocusedCell.current.nextElementSibling as HTMLDivElement;
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowLeft': {
            const newElement = currentlyFocusedCell.current.previousElementSibling as HTMLDivElement;
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowDown': {
            const parent = currentlyFocusedCell.current.parentElement as HTMLDivElement;
            const firstChildOfParent = parent.children[0] as HTMLDivElement;
            const hasSubcomponent = firstChildOfParent?.dataset?.subcomponent;
            const nextRow = parent.nextElementSibling;
            if (hasSubcomponent && !currentlyFocusedCell.current?.dataset?.subcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              firstChildOfParent.tabIndex = 0;
              firstChildOfParent.focus();
              currentlyFocusedCell.current = firstChildOfParent;
            } else if (nextRow) {
              currentlyFocusedCell.current.tabIndex = -1;
              const currentColumnIndex = currentlyFocusedCell.current.getAttribute('aria-colindex') || '1';
              const newElement: HTMLDivElement = nextRow.querySelector(`div[aria-colindex="${currentColumnIndex}"]`);
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowUp': {
            const previousRow = currentlyFocusedCell.current.parentElement.previousElementSibling as HTMLDivElement;
            const firstChildPrevRow = previousRow?.children[0] as HTMLDivElement;
            const hasSubcomponent = firstChildPrevRow?.dataset?.subcomponent;

            if (currentlyFocusedCell.current?.dataset?.subcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              const newElement: HTMLDivElement =
                currentlyFocusedCell.current.parentElement.querySelector(`div[aria-colindex="1"]`);
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            } else if (hasSubcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              firstChildPrevRow.tabIndex = 0;
              firstChildPrevRow.focus();
              currentlyFocusedCell.current = firstChildPrevRow;
            } else if (previousRow) {
              currentlyFocusedCell.current.tabIndex = -1;
              const currentColumnIndex = currentlyFocusedCell.current.getAttribute('aria-colindex') || '1';
              const newElement: HTMLDivElement = previousRow.querySelector(
                `div[aria-colindex="${currentColumnIndex}"]`
              );
              if (newElement) {
                newElement.tabIndex = 0;
                newElement.focus();
                currentlyFocusedCell.current = newElement;
              }
            }
            break;
          }
        }
      }
    },
    [currentlyFocusedCell]
  );

  const popInColumn = useMemo(
    () =>
      visibleColumns.filter(
        (item) =>
          item.id !== '__ui5wcr__internal_highlight_column' &&
          item.id !== '__ui5wcr__internal_selection_column' &&
          item.id !== '__ui5wcr__internal_navigation_column'
      )[0],
    [visibleColumns]
  );

  return (
    <div
      tabIndex={0}
      onFocus={onTableFocus}
      onKeyDown={onKeyboardNavigation}
      style={{
        position: 'relative',
        height: `${rowVirtualizer.totalSize}px`,
        width: `${columnVirtualizer.totalSize}px`
      }}
    >
      {rowVirtualizer.virtualItems.map((virtualRow) => {
        const row = rows[virtualRow.index];
        if (!row) {
          return (
            <div
              key={`empty_row_${virtualRow.index}`}
              className={classes.tr}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`
              }}
            />
          );
        }
        prepareRow(row);
        const rowProps = row.getRowProps();
        const isNavigatedCell = markNavigatedRow(row);
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;

        if (!RowSubComponent && subComponentsHeight && subComponentsHeight?.[virtualRow.index]?.subComponentHeight) {
          dispatch({
            type: 'SUB_COMPONENTS_HEIGHT',
            payload: {
              ...subComponentsHeight,
              [virtualRow.index]: { subComponentHeight: 0, rowId: row.id }
            }
          });
        }
        return (
          <div
            {...rowProps}
            style={{
              height: `${rowHeight}px`,
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute'
            }}
          >
            {RowSubComponent && (row.isExpanded || alwaysShowSubComponent) && (
              <SubComponent
                subComponentsHeight={subComponentsHeight}
                virtualRow={virtualRow}
                dispatch={dispatch}
                row={row}
                rowHeight={rowHeight}
                rows={rows}
                alwaysShowSubComponent={alwaysShowSubComponent}
              >
                {RowSubComponent}
              </SubComponent>
            )}
            {columnVirtualizer.virtualItems.map((virtualColumn, index) => {
              const cell = row.cells[virtualColumn.index];
              const directionStyles = isRtl
                ? {
                    transform: `translateX(-${virtualColumn.start}px)`,
                    right: 0
                  }
                : { transform: `translateX(${virtualColumn.start}px)`, left: 0 };

              if (!cell) {
                return null;
              }
              const cellProps = cell.getCellProps();
              if (row.original?.emptyRow) {
                return <div {...cellProps} />;
              }
              let contentToRender;
              if (
                cell.column.id === '__ui5wcr__internal_highlight_column' ||
                cell.column.id === '__ui5wcr__internal_selection_column' ||
                cell.column.id === '__ui5wcr__internal_navigation_column'
              ) {
                contentToRender = 'Cell';
              } else if (isTreeTable || (!alwaysShowSubComponent && RowSubComponent)) {
                contentToRender = 'Expandable';
              } else if (cell.isGrouped) {
                contentToRender = 'Grouped';
              } else if (cell.isAggregated) {
                contentToRender = 'Aggregated';
              } else if (cell.isPlaceholder) {
                contentToRender = 'RepeatedValue';
              } else {
                contentToRender = 'Cell';
              }
              return (
                <div
                  {...cellProps}
                  style={{
                    ...cellProps.style,
                    position: 'absolute',
                    width: `${virtualColumn.size}px`,
                    top: 0,
                    ...directionStyles
                  }}
                >
                  {popInRowHeight !== internalRowHeight && popInColumn.id === cell.column.id
                    ? cell.render('PopIn', { contentToRender, internalRowHeight })
                    : cell.render(contentToRender, isNavigatedCell === true ? { isNavigatedCell } : {})}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
