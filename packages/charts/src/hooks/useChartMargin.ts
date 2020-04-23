import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { getTextWidth } from '../util/Utils';

export const useChartMargin = (dataset, formatter, labelKey, margin, isBar?, hasSecondaryDimension?, hasZoomingTool?) =>
  useMemo(() => {
    let marginLeft = 0;
    if (dataset && isBar && typeof margin?.left !== 'number') {
      marginLeft = Math.max(
        ...dataset
          .map((data) => formatter(getValueByDataKey(data, labelKey, '')).split(' '))
          .flat()
          .map(getTextWidth)
      );
    }
    return {
      right: margin?.right ?? 60,
      top: margin?.top ?? hasZoomingTool ? 40 : 10,
      bottom: margin?.bottom ?? (!isBar && hasSecondaryDimension) ? 100 : 30,
      left:
        margin?.left ?? isBar ? (hasSecondaryDimension ? marginLeft : marginLeft / 2) : hasSecondaryDimension ? 20 : 0
    };
  }, [dataset, labelKey, margin]);
