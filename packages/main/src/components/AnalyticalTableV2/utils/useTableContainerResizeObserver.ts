import type { RefObject } from 'react';
import { useState, useEffect } from 'react';

export const useTableContainerResizeObserver = (tableContainerRef: RefObject<HTMLDivElement>) => {
  const [tableWidth, setTableWidth] = useState(0);
  const [horizontalScrollbarHeight, setHorizontalScrollbarHeight] = useState(0);

  useEffect(() => {
    const tableContainer = tableContainerRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.borderBoxSize) {
          const { borderBoxSize, contentBoxSize } = entry;
          const borderBoxHeight = borderBoxSize[0].blockSize;
          const contentBoxHeight = contentBoxSize[0].blockSize;
          if (borderBoxHeight > contentBoxHeight) {
            setHorizontalScrollbarHeight(borderBoxHeight - contentBoxHeight);
          } else {
            setHorizontalScrollbarHeight(0);
          }

          const borderBoxWidth = borderBoxSize[0].inlineSize;
          setTableWidth(borderBoxWidth);
        }
      }
    });

    if (tableContainer) {
      resizeObserver.observe(tableContainer, { box: 'border-box' });
    }

    return () => {
      if (tableContainer) {
        resizeObserver.unobserve(tableContainer);
      }
    };
  }, [tableContainerRef]);

  return { tableWidth, horizontalScrollbarHeight };
};
