import type { RefCallback, RefObject } from 'react';
import { useCallback, useRef } from 'react';
import type { AnalyticalTableScrollMode } from '../../../enums/AnalyticalTableScrollMode.js';
import type { AnalyticalTableDomRef, ScrollToRefType, TableInstance } from '../types/index.js';

export function useScrollToRef(
  componentRef: (node: AnalyticalTableDomRef) => void,
  dispatch: TableInstance['dispatch'],
): [RefCallback<AnalyticalTableDomRef>, RefObject<ScrollToRefType | null>] {
  const scrollToRef = useRef<ScrollToRefType | null>(null);

  const cbRef: RefCallback<AnalyticalTableDomRef> = useCallback(
    (node) => {
      if (!node) return;

      const extendedNode = Object.assign(node, {
        scrollTo: (offset: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => {
          if (typeof scrollToRef.current?.scrollToOffset === 'function') {
            scrollToRef.current.scrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'offset', args: [offset, { align }] },
            });
          }
        },
        scrollToItem: (index: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => {
          if (typeof scrollToRef.current?.scrollToIndex === 'function') {
            scrollToRef.current.scrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'item', args: [index, { align }] },
            });
          }
        },
        horizontalScrollTo: (
          offset: number,
          align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode,
        ) => {
          if (typeof scrollToRef.current?.horizontalScrollToOffset === 'function') {
            scrollToRef.current.horizontalScrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'offset', args: [offset, { align }] },
            });
          }
        },
        horizontalScrollToItem: (
          index: number,
          align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode,
        ) => {
          if (typeof scrollToRef.current?.horizontalScrollToIndex === 'function') {
            scrollToRef.current.horizontalScrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'item', args: [index, { align }] },
            });
          }
        },
      });

      componentRef(extendedNode);
    },
    [componentRef, dispatch],
  );

  return [cbRef, scrollToRef];
}
