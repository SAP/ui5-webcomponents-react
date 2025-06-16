import type { ForwardedRef, RefObject } from 'react';
import { useImperativeHandle, useRef } from 'react';
import type { AnalyticalTableScrollMode } from '../../../enums/index.js';
import type { AnalyticalTableDomRef, ReactVirtualScrollToMethods, TableInstance } from '../types/index.js';

interface ScrollToMethods {
  scrollTo: (offset: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void;
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void;
  horizontalScrollTo: (
    offset: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode,
  ) => void;
  horizontalScrollToItem: (
    index: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode,
  ) => void;
}

export const useTableScrollHandles = (
  ref: ForwardedRef<AnalyticalTableDomRef>,
  dispatch: TableInstance['dispatch'],
): RefObject<ReactVirtualScrollToMethods> => {
  const scrollToRef = useRef<ReactVirtualScrollToMethods>({});

  useImperativeHandle<AnalyticalTableDomRef, AnalyticalTableDomRef & ScrollToMethods>(ref, () => {
    const atNode = (ref as RefObject<AnalyticalTableDomRef>)?.current;
    if (atNode) {
      const scrollMethods: ScrollToMethods = {
        scrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.scrollToOffset === 'function') {
            scrollToRef.current.scrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'offset', args: [offset, { align }] },
            });
          }
        },
        scrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.scrollToIndex === 'function') {
            scrollToRef.current.scrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'item', args: [index, { align }] },
            });
          }
        },
        horizontalScrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToOffset === 'function') {
            scrollToRef.current.horizontalScrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'offset', args: [offset, { align }] },
            });
          }
        },
        horizontalScrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToIndex === 'function') {
            scrollToRef.current.horizontalScrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'item', args: [index, { align }] },
            });
          }
        },
      };
      return Object.assign(atNode, scrollMethods);
    }
  }, [dispatch, ref]);

  return scrollToRef;
};
