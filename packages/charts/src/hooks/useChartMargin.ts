import { useMemo } from 'react';

export const useChartMargin = (margin, hasZoomingTool) =>
  useMemo(() => {
    return {
      right: margin?.right ?? 30,
      top: (margin?.top ?? hasZoomingTool) ? 40 : 20,
      bottom: margin?.bottom ?? 20,
      left: margin?.left ?? 10
    };
  }, [margin, hasZoomingTool]);
