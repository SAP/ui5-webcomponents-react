import type { Virtualizer } from '@tanstack/react-virtual';
import { clsx } from 'clsx';
import type { MutableRefObject, ReactNode } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import { AnalyticalTableSubComponentsBehavior } from '../../../enums/index.js';
import type {
  AnalyticalTablePropTypes,
  DivWithCustomScrollProp,
  ScrollToRefType,
  TriggerScrollState
} from '../types/index.js';
import { getSubRowsByString } from '../util/index.js';
import { EmptyRow } from './EmptyRow.js';
import { RowSubComponent as SubComponent } from './RowSubComponent.js';

interface VirtualTableBodyProps {
  classes: Record<string, string>;
  prepareRow: (row: unknown) => void;
  rows: Record<string, any>[];
  isTreeTable: boolean;
  internalRowHeight: number;
  alternateRowColor: boolean;
  visibleColumns: Record<string, unknown>[];
  renderRowSubComponent: (row?: Record<string, unknown>) => ReactNode;
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: AnalyticalTablePropTypes['markNavigatedRow'];
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: Record<string, unknown> }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  manualGroupBy?: boolean;
  subRowsKey: string;
  scrollContainerRef?: MutableRefObject<HTMLDivElement>;
  subComponentsBehavior: AnalyticalTablePropTypes['subComponentsBehavior'];
  triggerScroll?: TriggerScrollState;
  scrollToRef: MutableRefObject<ScrollToRefType>;
  rowVirtualizer: Virtualizer<DivWithCustomScrollProp, HTMLElement>;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    alternateRowColor,
    classes,
    prepareRow,
    rows,
    scrollToRef,
    isTreeTable,
    internalRowHeight,
    visibleColumns,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight,
    columnVirtualizer,
    manualGroupBy,
    subRowsKey,
    scrollContainerRef,
    subComponentsBehavior,
    triggerScroll,
    rowVirtualizer
  } = props;

  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;
  const lastNonEmptyRow = useRef(null);

  scrollToRef.current = {
    ...scrollToRef.current,
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  };

  useEffect(() => {
    if (triggerScroll && triggerScroll.direction === 'vertical') {
      if (triggerScroll.type === 'offset') {
        rowVirtualizer.scrollToOffset(...triggerScroll.args);
      } else {
        rowVirtualizer.scrollToIndex(...triggerScroll.args);
      }
    }
  }, [triggerScroll]);

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
      ref={scrollContainerRef}
      data-component-name="AnalyticalTableBodyScrollableContainer"
      style={{
        position: 'relative',
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: `${columnVirtualizer.getTotalSize()}px`
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, visibleRowIndex) => {
        const row = rows[virtualRow.index];
        const rowIndexWithHeader = virtualRow.index + 1;
        if (!row || row.groupByVal === 'undefined') {
          const alternate = alternateRowColor && virtualRow.index % 2 !== 0;
          if (!lastNonEmptyRow.current?.cells) {
            return (
              <EmptyRow
                key={`empty_row_${virtualRow.index}`}
                virtualRow={virtualRow}
                className={clsx(classes.tr, alternate && classes.alternateRowColor)}
              />
            );
          }
          const cells = lastNonEmptyRow.current.cells;
          return (
            <EmptyRow
              key={`empty_row_${virtualRow.index}`}
              virtualRow={virtualRow}
              className={clsx(classes.tr, alternate && classes.alternateRowColor)}
            >
              {columnVirtualizer.getVirtualItems().map((item) => {
                const cell = cells[item.index];
                const cellProps = cell.getCellProps();
                const {
                  'aria-colindex': _0,
                  'aria-selected': _1,
                  'aria-label': _2,
                  tabIndex: _3,
                  ...emptyRowCellProps
                } = cellProps;
                return (
                  <div
                    {...emptyRowCellProps}
                    key={`${visibleRowIndex}-${emptyRowCellProps.key}`}
                    data-empty-row-cell="true"
                    tabIndex={-1}
                    aria-hidden
                    style={{ ...emptyRowCellProps.style, cursor: 'unset', width: item.size }}
                  />
                );
              })}
            </EmptyRow>
          );
        } else {
          lastNonEmptyRow.current = row;
        }
        prepareRow(row);
        const rowProps = row.getRowProps({
          'aria-rowindex': virtualRow.index + 1,
          'data-virtual-row-index': virtualRow.index
        });
        const isNavigatedCell = markNavigatedRow(row);
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;

        if (
          (!RowSubComponent ||
            (subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable &&
              !row.isExpanded)) &&
          subComponentsHeight &&
          subComponentsHeight?.[virtualRow.index]?.subComponentHeight
        ) {
          dispatch({
            type: 'SUB_COMPONENTS_HEIGHT',
            payload: {
              ...subComponentsHeight,
              [virtualRow.index]: { subComponentHeight: 0, rowId: row.id }
            }
          });
        }
        let updatedHeight = rowHeight;
        if (
          renderRowSubComponent &&
          (rows[virtualRow.index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[virtualRow.index]?.rowId === rows[virtualRow.index]?.id
        ) {
          updatedHeight += subComponentsHeight?.[virtualRow.index]?.subComponentHeight ?? 0;
        }

        const measureRef =
          isTreeTable && renderRowSubComponent && (row.isExpanded || alwaysShowSubComponent)
            ? (node) => {
                rowVirtualizer.measureElement(node);
              }
            : rowVirtualizer.measureElement;

        return (
          // eslint-disable-next-line react/jsx-key
          <div
            {...rowProps}
            ref={measureRef}
            style={{
              ...(rowProps.style ?? {}),
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute',
              boxSizing: 'border-box',
              height: `${updatedHeight}px`
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
                rowIndex={visibleRowIndex + 1}
              >
                {RowSubComponent}
              </SubComponent>
            )}
            {columnVirtualizer.getVirtualItems().map((virtualColumn, visibleColumnIndex) => {
              const cell = row.cells[virtualColumn.index];
              const directionStyles = isRtl
                ? {
                    transform: `translateX(-${virtualColumn.start}px)`,
                    insertInlineStart: 0
                  }
                : { transform: `translateX(${virtualColumn.start}px)`, insertInlineStart: 0 };
              if (!cell) {
                return null;
              }
              const cellProps = cell.getCellProps();
              const allCellProps = {
                ...cellProps,
                ['data-visible-column-index']: visibleColumnIndex,
                ['data-column-index']: virtualColumn.index,
                ['data-visible-row-index']: visibleRowIndex + 1,
                ['data-row-index']: rowIndexWithHeader,
                style: {
                  ...cellProps.style,
                  position: 'absolute',
                  width: `${virtualColumn.size}px`,
                  top: 0,
                  height: `${rowHeight}px`,
                  ...directionStyles
                }
              };
              let contentToRender;
              if (
                cell.column.id === '__ui5wcr__internal_highlight_column' ||
                cell.column.id === '__ui5wcr__internal_selection_column' ||
                cell.column.id === '__ui5wcr__internal_navigation_column'
              ) {
                contentToRender = 'Cell';
              } else if (isTreeTable || (!alwaysShowSubComponent && RowSubComponent)) {
                contentToRender = 'Expandable';
              } else if (
                cell.isGrouped ||
                (manualGroupBy &&
                  cell.column.isGrouped &&
                  getSubRowsByString(subRowsKey, row.original) != null &&
                  cell.value !== undefined)
              ) {
                contentToRender = 'Grouped';
              } else if (cell.isAggregated) {
                contentToRender = 'Aggregated';
              } else if (cell.isPlaceholder) {
                contentToRender = 'RepeatedValue';
              } else {
                contentToRender = 'Cell';
              }

              return (
                // eslint-disable-next-line react/jsx-key
                <div {...allCellProps} data-selection-cell={cell.column.id === '__ui5wcr__internal_selection_column'}>
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
