import { useMemo } from 'react';
import { getTextWidth } from '../util/Utils';

export const useChartMargin = (dataset, formatter, labelKey, margin, bar?, secondaryDimension?, zoomingTool?) =>
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
      right: margin?.right ?? 60,
      top: margin?.top ?? zoomingTool ? 40 : 10,
      bottom: margin?.bottom ?? (!bar && secondaryDimension) ? 100 : 30,
      left: margin?.left ?? bar ? (secondaryDimension ? marginLeft : marginLeft / 2) : secondaryDimension ? 20 : 0
    };
  }, [dataset, labelKey, margin]);
