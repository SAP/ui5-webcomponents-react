import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import { defaultMaxYAxisWidth } from '../internal/defaults.js';
import { getTextWidth } from '../internal/Utils.js';

export const useLongestYAxisLabel = (dataset: unknown[], elements, legendPosition: string): [number, object] =>
  useMemo(() => {
    let labelLength = 0;
    const primaryElement = elements[0];

    if (dataset instanceof Array && primaryElement) {
      const resolveAllMeasureLabels = (item): string[] => {
        return elements.map((elementConfig) =>
          primaryElement.formatter(getValueByDataKey(item, elementConfig.accessor, ''))
        );
      };
      labelLength = Math.max(...dataset.map(resolveAllMeasureLabels).flat().map(getTextWidth));
      labelLength += 8;
    }

    labelLength = Math.min(labelLength, defaultMaxYAxisWidth);

    if (legendPosition === 'middle') {
      return [labelLength, { width: 'auto' }];
    }

    return [labelLength, { marginLeft: labelLength, maxWidth: `calc(100% - ${labelLength + 10}px)` }];
  }, [dataset, elements, legendPosition]);
