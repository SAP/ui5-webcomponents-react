import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { AnalyticalTablePropTypes } from '../types/index.js';

interface VirtualTableBodyContainerProps {
  tableBodyHeight: number;
  totalColumnsWidth: number;
  children: any;
  parentRef: MutableRefObject<HTMLDivElement>;
  classes: Record<string, string>;
  infiniteScroll?: AnalyticalTablePropTypes['infiniteScroll'];
  infiniteScrollThreshold?: AnalyticalTablePropTypes['infiniteScrollThreshold'];
  onLoadMore: AnalyticalTablePropTypes['onLoadMore'];
  rows: Record<string, any>[];
  internalRowHeight: number;
  handleExternalScroll: AnalyticalTablePropTypes['onTableScroll'];
  visibleRows: number;
  popInRowHeight: number;
  rowCollapsedFlag?: boolean;
  dispatch: (e: { type: string; payload?: any }) => void;
}

export const VirtualTableBodyContainer = (props: VirtualTableBodyContainerProps) => {
  const {
    tableBodyHeight,
    totalColumnsWidth,
    children,
    parentRef,
    classes,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore,
    rows,
    internalRowHeight,
    handleExternalScroll,
    visibleRows,
    popInRowHeight,
    rowCollapsedFlag,
    dispatch
  } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (parentRef.current) {
      setIsMounted(true);
    }
  }, [parentRef.current]);

  const dataLength = rows.length;

  const lastScrollTop = useRef(0);
  const firedInfiniteLoadEvents = useRef(new Set());
  const prevDataLength = useRef(dataLength);

  useEffect(() => {
    if (prevDataLength.current > dataLength) {
      if (rowCollapsedFlag) {
        dispatch({
          type: 'ROW_COLLAPSED_FLAG',
          payload: false
        });
      } else {
        firedInfiniteLoadEvents.current.clear();
        parentRef.current.scrollTop = 0;
        lastScrollTop.current = 0;
      }
    }
    prevDataLength.current = dataLength;
  }, [dataLength, rowCollapsedFlag]);

  const onScroll = useCallback(
    (event) => {
      handleExternalScroll(enrichEventWithDetails(event, { rows, rowElements: event.target.children[0].children }));
      const scrollOffset = event.target.scrollTop;
      const isScrollingDown = lastScrollTop.current < scrollOffset;
      if (isScrollingDown && infiniteScroll) {
        lastScrollTop.current = scrollOffset;
        const currentLastRow =
          Math.floor(scrollOffset / popInRowHeight) +
          (popInRowHeight === internalRowHeight ? visibleRows : Math.floor(tableBodyHeight / popInRowHeight));
        if (rows.length - currentLastRow < infiniteScrollThreshold) {
          if (!firedInfiniteLoadEvents.current.has(rows.length)) {
            onLoadMore(event);
          }
          firedInfiniteLoadEvents.current.add(rows.length);
        }
      }
    },
    [
      infiniteScroll,
      infiniteScrollThreshold,
      onLoadMore,
      rows,
      internalRowHeight,
      firedInfiniteLoadEvents,
      lastScrollTop,
      handleExternalScroll,
      popInRowHeight,
      tableBodyHeight
    ]
  );

  return (
    <div
      className={classes.tbody}
      ref={parentRef}
      onScroll={onScroll}
      style={{
        position: 'relative',
        overflowY: 'auto',
        height: `${tableBodyHeight}px`,
        width: `${totalColumnsWidth}px`
      }}
      data-component-name="AnalyticalTableBody"
    >
      {isMounted && children}
    </div>
  );
};
