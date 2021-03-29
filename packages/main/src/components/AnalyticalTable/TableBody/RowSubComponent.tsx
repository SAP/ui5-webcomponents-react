import React, { useEffect, useRef } from 'react';
import { VirtualItem } from 'react-virtual';

interface RowSubComponent {
  subComponentsHeight: Record<string, { rowId: string; subComponentHeight?: number }>;
  virtualRow: VirtualItem;
  dispatch: (e: { type: string; payload?: any }) => void;
  row: any;
  rowHeight: number;
  children: any;
  rows: any[];
  alwaysShowSubComponent: boolean;
}

export const RowSubComponent = (props: RowSubComponent) => {
  const { subComponentsHeight, virtualRow, dispatch, row, rowHeight, children, rows, alwaysShowSubComponent } = props;
  const subComponentRef = useRef(null);

  useEffect(() => {
    const subComponentHeightObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.borderBoxSize) {
          // Firefox implements `borderBoxSize` as a single content rect, rather than an array
          const borderBoxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize;
          if (
            subComponentsHeight?.[virtualRow.index]?.subComponentHeight !== borderBoxSize.blockSize &&
            borderBoxSize.blockSize !== 0
          ) {
            // use most common sub-component height of first 10 sub-components as default height
            if (alwaysShowSubComponent && subComponentsHeight && Object.keys(subComponentsHeight).length === 10) {
              const objGroupedByHeight = Object.values(subComponentsHeight).reduce((acc, cur) => {
                const count = acc?.[cur.subComponentHeight];
                if (typeof count === 'number') {
                  return { ...acc, [cur.subComponentHeight]: count + 1 };
                }
                return { ...acc, [cur.subComponentHeight]: 1 };
              }, {});

              const mostUsedHeight = Object.keys(objGroupedByHeight).reduce((a, b) =>
                objGroupedByHeight[a] > objGroupedByHeight[b] ? a : b
              );
              //take subComponentHeight of first row and use it as initial height for all other rows
              const estimatedHeights = rows.reduce((acc, cur, index) => {
                acc[index] = { subComponentHeight: parseInt(mostUsedHeight), rowId: cur.id };
                return acc;
              }, {});
              dispatch({
                type: 'SUB_COMPONENTS_HEIGHT',
                payload: { ...estimatedHeights, ...subComponentsHeight }
              });
            } else {
              dispatch({
                type: 'SUB_COMPONENTS_HEIGHT',
                payload: {
                  ...subComponentsHeight,
                  [virtualRow.index]: { subComponentHeight: borderBoxSize.blockSize, rowId: row.id }
                }
              });
            }
          }
        }
      });
    });
    if (subComponentRef.current?.firstChild) {
      subComponentHeightObserver.observe(subComponentRef.current?.firstChild);
    }
    return () => {
      subComponentHeightObserver.disconnect();
    };
  }, [
    subComponentRef.current?.firstChild,
    subComponentsHeight,
    row.id,
    subComponentsHeight?.[virtualRow.index]?.subComponentHeight,
    virtualRow.index
  ]);

  return (
    <div
      ref={subComponentRef}
      style={{
        transform: `translateY(${rowHeight}px)`,
        position: 'absolute',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
