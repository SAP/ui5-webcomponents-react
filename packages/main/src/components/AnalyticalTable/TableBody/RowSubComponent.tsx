import type { VirtualItem } from '@tanstack/react-virtual';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';

const styles = {
  subcomponent: {
    position: 'absolute',
    width: '100%',
    '&:focus': {
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`,
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`
    }
  }
};
const useStyles = createUseStyles(styles, { name: 'RowSubComponent' });

interface RowSubComponent {
  subComponentsHeight: Record<string, { rowId: string; subComponentHeight?: number }>;
  virtualRow: VirtualItem;
  dispatch: (e: { type: string; payload?: Record<string, unknown> }) => void;
  row: Record<string, unknown>;
  rowHeight: number;
  children: ReactNode | ReactNode[];
  rows: Record<string, unknown>[];
  alwaysShowSubComponent: boolean;
  rowIndex: number;
}

export const RowSubComponent = (props: RowSubComponent) => {
  const {
    subComponentsHeight,
    virtualRow,
    dispatch,
    row,
    rowHeight,
    children,
    rows,
    alwaysShowSubComponent,
    rowIndex
  } = props;
  const subComponentRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    const subComponentHeightObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target.getBoundingClientRect();
        if (target) {
          // Firefox implements `borderBoxSize` as a single content rect, rather than an array
          const borderBoxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize;
          // Safari doesn't implement `borderBoxSize`
          const subCompHeight = borderBoxSize?.blockSize ?? target.height;
          if (subComponentsHeight?.[virtualRow.index]?.subComponentHeight !== subCompHeight && subCompHeight !== 0) {
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
                  [virtualRow.index]: { subComponentHeight: subCompHeight, rowId: row.id }
                }
              });
            }
          }
          // recalc if row id of row index has changed
          if (
            subComponentsHeight?.[virtualRow.index]?.rowId != null &&
            subComponentsHeight?.[virtualRow.index]?.rowId !== row.id
          ) {
            dispatch({
              type: 'SUB_COMPONENTS_HEIGHT',
              payload: {
                ...subComponentsHeight,
                [virtualRow.index]: { subComponentHeight: subCompHeight, rowId: row.id }
              }
            });
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
      data-subcomponent
      data-subcomponent-row-index={rowIndex}
      tabIndex={-1}
      style={{
        boxSizing: 'border-box',
        transform: `translateY(${rowHeight}px)`
      }}
      className={classes.subcomponent}
    >
      {children}
    </div>
  );
};
