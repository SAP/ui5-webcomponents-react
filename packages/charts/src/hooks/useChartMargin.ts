import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { getTextWidth, truncateLongLabel } from '../util/Utils';

export const useChartMargin = (dataset: unknown[], elements, margin, isBar?, hasSecondaryDimension?, hasZoomingTool?) =>
  useMemo(() => {
    let marginLeft = 0;
    const primaryElement = elements[0];
    if (dataset instanceof Array && primaryElement) {
      marginLeft = Math.max(
        ...dataset
          .map((item) =>
            elements.map((elementConfig) =>
              truncateLongLabel(primaryElement.formatter(getValueByDataKey(item, elementConfig.accessor, '')))
            )
          )
          .flat()
          .map(getTextWidth)
      );
    }
    return {
      right: margin?.right ?? 60,
      top: margin?.top ?? hasZoomingTool ? 40 : 10,
      bottom: margin?.bottom ?? (!isBar && hasSecondaryDimension) ? 100 : 30,
      left: margin?.left ?? marginLeft / 2
    };
  }, [dataset, elements, margin, hasSecondaryDimension, hasZoomingTool]);
