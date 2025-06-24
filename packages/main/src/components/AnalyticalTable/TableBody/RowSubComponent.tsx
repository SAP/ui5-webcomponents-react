import type { VirtualItem } from '@tanstack/react-virtual';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import type { ClassNames, RowType } from '../types/index.js';

interface RowSubComponentProps {
  subComponentsHeight: Record<string, { rowId: string; subComponentHeight?: number }> | undefined;
  virtualRow: VirtualItem;
  dispatch: (e: { type: string; payload?: Record<string, unknown> }) => void;
  row: RowType;
  rowHeight: number;
  children: ReactNode | ReactNode[];
  rows: RowType[];
  alwaysShowSubComponent: boolean;
  rowIndex: number;
  classNames: ClassNames;
  renderSubComp: boolean;
}

export function RowSubComponent(props: RowSubComponentProps) {
  const {
    subComponentsHeight = {},
    virtualRow,
    dispatch,
    row,
    rowHeight,
    children,
    rows,
    alwaysShowSubComponent,
    rowIndex,
    classNames,
    renderSubComp,
  } = props;
  const subComponentRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const subComponentElement = subComponentRef.current;
    if (!subComponentElement || !renderSubComp) {
      return;
    }

    const measureAndDispatch = (height: number) => {
      const prev: { rowId?: string; subComponentHeight?: number } = subComponentsHeight?.[virtualRow.index] ?? {};
      if (height === 0 || (prev.subComponentHeight === height && prev.rowId === row.id)) {
        return;
      }

      // use most common subComponentHeight height of first 10 subcomponents as default height
      if (alwaysShowSubComponent && Object.keys(subComponentsHeight).length === 10) {
        // create frequency map -> most common height has the highest number
        const frequencyMap: Record<number, number> = {};
        Object.values(subComponentsHeight).forEach(({ subComponentHeight }) => {
          if (subComponentHeight) {
            frequencyMap[subComponentHeight] = (frequencyMap[subComponentHeight] || 0) + 1;
          }
        });
        const mostUsedHeight = Number(Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])[0]?.[0] || 0);
        const estimatedHeight: typeof subComponentsHeight = {};
        rows.forEach((row, index) => {
          estimatedHeight[index] = { subComponentHeight: mostUsedHeight, rowId: row.id };
        });
        dispatch({ type: 'SUB_COMPONENTS_HEIGHT', payload: { ...estimatedHeight, ...subComponentsHeight } });
      } else {
        dispatch({
          type: 'SUB_COMPONENTS_HEIGHT',
          payload: {
            ...subComponentsHeight,
            [virtualRow.index]: { subComponentHeight: height, rowId: row.id },
          },
        });
      }
    };

    measureAndDispatch(subComponentElement.getBoundingClientRect().height);

    const observer = new ResizeObserver(([entry]) => {
      measureAndDispatch(entry.borderBoxSize[0].blockSize);
    });
    observer.observe(subComponentElement);

    return () => {
      observer.disconnect();
    };
  }, [renderSubComp, subComponentsHeight, virtualRow.index, row.id, alwaysShowSubComponent, rows]);

  // reset subComponentHeight
  useIsomorphicLayoutEffect(() => {
    if (!renderSubComp && subComponentsHeight?.[virtualRow.index]?.subComponentHeight) {
      dispatch({
        type: 'SUB_COMPONENTS_HEIGHT',
        payload: {
          ...subComponentsHeight,
          [virtualRow.index]: { subComponentHeight: 0, rowId: row.id },
        },
      });
    }
  }, [renderSubComp, subComponentsHeight, virtualRow.index, row.id, dispatch]);

  if (!renderSubComp) {
    return null;
  }

  return (
    <div
      ref={subComponentRef}
      data-subcomponent
      data-subcomponent-row-index={rowIndex}
      tabIndex={-1}
      style={{
        boxSizing: 'border-box',
        transform: `translateY(${rowHeight}px)`,
      }}
      className={classNames.subcomponent}
    >
      {children}
    </div>
  );
}

RowSubComponent.displayName = 'RowSubComponent';
