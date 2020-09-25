import debounce from 'lodash/debounce';
import { RefObject, useEffect, useRef, useState } from 'react';

const defaultAxisHeight = 30;

export const useObserveXAxisHeights = (chartRef: RefObject<SVGElement>, axisCount) => {
  const [xAxisHeights, setXAxisHeights] = useState(Array(axisCount).fill(defaultAxisHeight));
  const mostRecentXAxisHeights = useRef<number[]>(xAxisHeights);

  useEffect(() => {
    const mutationObserver = new MutationObserver(
      debounce(() => {
        const defaultHeights = Array(axisCount).fill(defaultAxisHeight);
        chartRef.current?.querySelectorAll<SVGGraphicsElement>('.xAxis').forEach((xAxis, index) => {
          const currentAxisHeight = xAxis?.getBBox()?.height;
          if (currentAxisHeight > 30) {
            defaultHeights[index] = currentAxisHeight;
          }
        });

        const arraysHaveTheSameLength = mostRecentXAxisHeights.current.length === defaultHeights.length;
        const arrayContentIsIdentical = mostRecentXAxisHeights.current.every(
          (value, index) => defaultHeights[index] === value
        );
        if (!(arraysHaveTheSameLength && arrayContentIsIdentical)) {
          mostRecentXAxisHeights.current = defaultHeights;
          setXAxisHeights(defaultHeights);
        }
      }, 75)
    );

    if (chartRef.current) {
      mutationObserver.observe(chartRef.current, {
        characterData: false,
        characterDataOldValue: false,
        attributes: false,
        childList: true,
        subtree: true
      });
    }
    return () => {
      mutationObserver.disconnect();
    };
  }, [chartRef, setXAxisHeights, mostRecentXAxisHeights]);

  return xAxisHeights;
};
