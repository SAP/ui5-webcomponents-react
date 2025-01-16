import { useVirtualizer } from '@tanstack/react-virtual';
import type { RefObject } from 'react';
import { useRef, useEffect } from 'react';
import { useComputedCssVariable } from './utils/useComputedCssVariable.js';

export function useRowVirtualizer<T extends HTMLElement>(
  rowHeight: number | undefined,
  containerRef: RefObject<T>,
  virtualizerOptions: {
    count: number;
    overscan?: number;
    // paddingStart?: number;
    // paddingEnd?: number;
  }
) {
  const { count, overscan = 5 } = virtualizerOptions;
  const computedRowHeight = useComputedCssVariable(containerRef, '--_ui5WcrAnalyticalTableControlledRowHeight');
  //todo parse int
  const appliedRowHeight = rowHeight ?? computedRowHeight;

  const rowVirtualizer = useVirtualizer({
    count,
    getScrollElement: () => containerRef.current,
    estimateSize: () => appliedRowHeight,
    overscan
    // paddingStart: options.paddingStart,
    // paddingEnd: options.paddingEnd
  });

  const prevAppliedRowHeight = useRef<number | null>(null);

  useEffect(() => {
    if (prevAppliedRowHeight.current !== appliedRowHeight) {
      if (prevAppliedRowHeight.current !== null) {
        console.log('measure');
        rowVirtualizer.measure();
      } else {
        prevAppliedRowHeight.current = appliedRowHeight;
      }
    }
  }, [appliedRowHeight, rowVirtualizer]);

  return rowVirtualizer;
}
