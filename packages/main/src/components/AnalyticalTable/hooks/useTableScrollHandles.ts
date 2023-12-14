import type { ScrollToOptions } from '@tanstack/react-virtual';
import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';
import type { AnalyticalTableScrollMode } from '../../../enums/index.js';
import type { AnalyticalTableDomRef } from '../types/index.js';

interface ScrollToMethods {
  scrollTo: (offset: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void;
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode) => void;
  horizontalScrollTo: (
    offset: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode
  ) => void;
  horizontalScrollToItem: (
    index: number,
    align?: AnalyticalTableScrollMode | keyof typeof AnalyticalTableScrollMode
  ) => void;
}

interface ReactVirtualScrollToMethods {
  scrollToOffset?: (offset: number, options?: ScrollToOptions) => void;
  scrollToIndex?: (index: number, options?: ScrollToOptions) => void;
  horizontalScrollToOffset?: (offset: number, options?: ScrollToOptions) => void;
  horizontalScrollToIndex?: (index: number, options?: ScrollToOptions) => void;
}

export const useTableScrollHandles = (ref, dispatch) => {
  let analyticalTableRef = useRef(null);
  if (ref) {
    analyticalTableRef = ref;
  }
  const scrollToRef = useRef<ReactVirtualScrollToMethods>({});

  useEffect(() => {
    if (analyticalTableRef.current) {
      Object.assign<MutableRefObject<AnalyticalTableDomRef>, ScrollToMethods>(analyticalTableRef.current, {
        scrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.scrollToOffset === 'function') {
            scrollToRef.current.scrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'offset', args: [offset, { align }] }
            });
          }
        },
        scrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.scrollToIndex === 'function') {
            scrollToRef.current.scrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'vertical', type: 'item', args: [index, { align }] }
            });
          }
        },
        horizontalScrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToOffset === 'function') {
            scrollToRef.current.horizontalScrollToOffset(offset, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'offset', args: [offset, { align }] }
            });
          }
        },
        horizontalScrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToIndex === 'function') {
            scrollToRef.current.horizontalScrollToIndex(index, { align });
          } else {
            dispatch({
              type: 'TRIGGER_PROG_SCROLL',
              payload: { direction: 'horizontal', type: 'item', args: [index, { align }] }
            });
          }
        }
      });
    }
  }, []);

  return [analyticalTableRef, scrollToRef];
};
