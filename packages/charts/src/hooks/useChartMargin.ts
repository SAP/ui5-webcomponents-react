import { useMemo } from 'react';
import { getTextWidth } from '../util/Utils';

export const useChartMargin = (dataset, formatter, labelKey, margin, bar?) =>
  useMemo(() => {
    let marginLeft = 0;
    if (dataset && bar && typeof margin?.left !== 'number') {
      marginLeft = Math.max(
        ...dataset
          .map((data) => formatter(data[labelKey]).split(' '))
          .flat()
          .map(getTextWidth)
      );
    }
    return {
      right: margin?.right ?? 30,
      top: margin?.top ?? 40,
      bottom: margin?.bottom ?? 30,
      left: margin?.left ?? marginLeft / 2
    };
  }, [dataset, labelKey, margin]);
