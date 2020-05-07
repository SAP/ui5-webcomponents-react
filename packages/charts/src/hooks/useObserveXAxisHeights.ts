import { RefObject } from 'react';

export const useObserveXAxisHeights = (chartRef: RefObject<SVGElement>, axisCount) => {
  const defaultHeights = Array(axisCount).fill(30);
  if (chartRef.current) {
    chartRef.current?.querySelectorAll<SVGElement>('.xAxis').forEach((xAxis, index) => {
      defaultHeights[index] = xAxis?.getBBox()?.height;
    });
  }

  return defaultHeights;
};
