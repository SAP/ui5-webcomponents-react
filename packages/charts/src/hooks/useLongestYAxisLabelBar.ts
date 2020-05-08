import { getTextWidth } from '@ui5/webcomponents-react-charts/lib/Utils';
import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { defaultMaxYAxisWidth } from '../internal/defaults';

export const useLongestYAxisLabelBar = (dataset: unknown[], elements): [number, object] =>
  useMemo(() => {
    let labelLength;
    let labelElementsLength = [[], []];

    if (dataset instanceof Array && elements) {
      const resolveAllMeasureLabels = (item): string[] => {
        return elements.map((elementConfig) =>
          elementConfig.formatter(getValueByDataKey(item, elementConfig.accessor, ''))
        );
      };

      dataset
        .map(resolveAllMeasureLabels)
        .flat()
        .forEach((item, index) => {
          return index % 2 === 0
            ? labelElementsLength[0].push(getTextWidth(item))
            : labelElementsLength[1].push(getTextWidth(item) - 20);
        });
      labelLength = labelElementsLength.map((items) => Math.max(...items));

      if (elements.length > 1) {
        labelLength[0] = labelLength[0] / 2;
      }
    }

    return [
      labelLength,
      { marginLeft: labelLength?.[0] + labelLength?.[1], maxWidth: `calc(100% - ${labelLength + 10}px)` }
    ];
  }, [dataset, elements]);
