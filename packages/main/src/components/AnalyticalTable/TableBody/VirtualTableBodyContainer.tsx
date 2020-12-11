import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export const VirtualTableBodyContainer = (props) => {
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
    popInRowHeight
  } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (parentRef.current) {
      setIsMounted(true);
    }
  }, [parentRef.current]);

  const classNames = StyleClassHelper.of(classes.tbody).className;

  const lastScrollTop = useRef(0);
  const firedInfiniteLoadEvents = useRef(new Set());

  const onScroll = useCallback(
    (event) => {
      handleExternalScroll();
      const scrollOffset = event.target.scrollTop;
      const isScrollingDown = lastScrollTop.current < scrollOffset;
      if (isScrollingDown && infiniteScroll) {
        lastScrollTop.current = scrollOffset;
        const currentLastRow =
          Math.floor(scrollOffset / popInRowHeight) +
          (popInRowHeight === internalRowHeight ? visibleRows : Math.floor(tableBodyHeight / popInRowHeight));
        if (rows.length - currentLastRow < infiniteScrollThreshold) {
          if (!firedInfiniteLoadEvents.current.has(rows.length)) {
            onLoadMore({
              detail: {
                rowCount: rows.length
              }
            });
          }
          firedInfiniteLoadEvents.current.add(rows.length);
        }
      }
    },
    [
      infiniteScroll,
      infiniteScrollThreshold,
      onLoadMore,
      rows.length,
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
      className={classNames}
      ref={parentRef}
      onScroll={onScroll}
      style={{
        position: 'relative',
        overflowY: 'auto',
        height: `${tableBodyHeight}px`,
        width: `${totalColumnsWidth}px`
      }}
    >
      {isMounted && children}
    </div>
  );
};
