import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { getTextWidth } from '../util/Utils';

export const useChartMargin = (
  dataset,
  measures,
  formatter,
  labelKey,
  margin,
  isBar?,
  hasSecondaryDimension?,
  hasZoomingTool?
) =>
  useMemo(() => {
    let marginLeft = 0;
    if (dataset && typeof margin?.left !== 'number') {
      if (isBar) {
        marginLeft = Math.max(
          ...dataset
            .map((data) => formatter(getValueByDataKey(data, labelKey, '')).split(' '))
            .flat()
            .map(getTextWidth)
        );
      } else {
        marginLeft = getTextWidth(
          Math.max(
            ...dataset.map((item) => {
              return Math.max(...measures.map((measure) => item[measure.accessor]));
            })
          )
        );
      }
    }
    return {
      right: margin?.right ?? 60,
      top: margin?.top ?? hasZoomingTool ? 40 : 10,
      bottom: margin?.bottom ?? (!isBar && hasSecondaryDimension) ? 100 : 30,
      left:
        margin?.left ?? isBar
          ? hasSecondaryDimension
            ? marginLeft
            : marginLeft / 2
          : hasSecondaryDimension
          ? marginLeft / 2
          : marginLeft / 2
    };
  }, [dataset, labelKey, margin]);
