import { useVirtualizer } from '@tanstack/react-virtual';
import type { RefObject } from 'react';
import { useRef, useEffect } from 'react';
import { useComputedCssVariable } from './utils/useComputedCssVariable.js';

//todo check if overscan and scroll container are alright.
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
  const appliedRowHeight = rowHeight ?? computedRowHeight ?? 32;

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
        // remeasure if rowHeight changes
        rowVirtualizer.measure();
      } else {
        prevAppliedRowHeight.current = appliedRowHeight;
      }
    }
  }, [appliedRowHeight, rowVirtualizer]);

  return rowVirtualizer;
}
