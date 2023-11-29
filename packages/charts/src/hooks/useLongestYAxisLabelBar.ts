import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import { defaultMaxYAxisWidth } from '../internal/defaults.js';
import { getTextWidth } from '../internal/Utils.js';

export const useLongestYAxisLabelBar = (dataset: unknown[], elements, legendPosition = ''): [number[], object] =>
  useMemo(() => {
    let axisWidths = Array(elements.length).fill(0);
    let marginLeft = 0;

    if (dataset instanceof Array && elements) {
      const resolveAllMeasureLabels = (item): string[] => {
        return elements.map((elementConfig) =>
          elementConfig.formatter(getValueByDataKey(item, elementConfig.accessor, ''))
        );
      };

      const allFormattedDataLabels = dataset.map(resolveAllMeasureLabels);
      allFormattedDataLabels.forEach((dimensionLabels) => {
        dimensionLabels.forEach((label, dimensionIndex) => {
          axisWidths[dimensionIndex] = Math.max(getTextWidth(label), axisWidths[dimensionIndex]);
        });
      });

      axisWidths = axisWidths.map((length) => Math.min(defaultMaxYAxisWidth, length));
      marginLeft = axisWidths.reduce((acc, val) => acc + val, 0);
    }
    if (legendPosition === 'middle') {
      return [axisWidths, { width: 'auto' }];
    }
    return [axisWidths, { marginLeft, maxWidth: `calc(100% - ${marginLeft + 8}px)` }];
  }, [dataset, elements, legendPosition]);
