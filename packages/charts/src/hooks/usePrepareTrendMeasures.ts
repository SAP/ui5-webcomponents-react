import { useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { defaultFormatter } from '../internal/defaults';

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
        columnMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          ...measure,
          formatter: defaultFormatter
        });
      }

      if (measure.type === 'line') {
        lineMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          ...measure,
          formatter: defaultFormatter
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
        reducedLineValues[`__${line.accessor}`] = getValueByDataKey(data, line.accessor);
        reducedLineValues[line.accessor] = 0;
      });

      columnDataset.push({
        ...data,
        ...reducedLineValues
      });
    });
    return { lineMeasures, columnMeasures, columnDataset };
  }, [measures, dataset]);
