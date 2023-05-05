import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import type { IChartMeasure } from '../interfaces/IChartMeasure.js';
import { defaultFormatter } from '../internal/defaults.js';

interface ITrendChartMeasure extends IChartMeasure {
  type: 'line' | 'bar';
}

export const usePrepareTrendMeasures = (measures: ITrendChartMeasure[], dataset: Record<string, unknown>[]) =>
  useMemo(() => {
    const lineMeasures = [];
    const columnMeasures = [];
    const columnDataset = [];

    measures?.forEach((measure, index) => {
      if (measure.type === 'bar') {
        lineMeasures.push({
          ...measure,
          opacity: 0,
          hide: true,
          hideDataLabel: true,
          showDot: false,
          formatter: defaultFormatter
        });
        columnMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          formatter: defaultFormatter,
          ...measure
        });
      }

      if (measure.type === 'line') {
        lineMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          formatter: defaultFormatter,
          ...measure
        });
        columnMeasures.push({
          ...measure,
          opacity: 0,
          hideDataLabel: true,
          showDot: false,
          formatter: defaultFormatter
        });
      }
    });

    dataset?.forEach((data) => {
      const reducedLineValues = {};

      lineMeasures.forEach((line) => {
        if (line.type === 'line') {
          reducedLineValues[`__${line.accessor}`] = getValueByDataKey(data, line.accessor);
          reducedLineValues[line.accessor] = 1;
        }
      });

      columnDataset.push({
        ...data,
        ...reducedLineValues
      });
    });

    return { lineMeasures, columnMeasures, columnDataset };
  }, [measures, dataset]);
