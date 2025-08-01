import { useMemo } from 'react';
import type { IChartMeasure } from '../interfaces/IChartMeasure.js';
import { defaultFormatter } from '../internal/defaults.js';

interface ITrendChartMeasure extends IChartMeasure {
  type: 'line' | 'bar';
}

export const usePrepareTrendMeasures = (measures: ITrendChartMeasure[]) =>
  useMemo(() => {
    const lineMeasures = [];
    const columnMeasures = [];

    measures?.forEach((measure, index) => {
      if (measure.type === 'bar') {
        lineMeasures.push({
          ...measure,
          opacity: 0,
          hide: true,
          hideDataLabel: true,
          showDot: false,
          formatter: defaultFormatter,
        });
        columnMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 12) + 1})`,
          formatter: defaultFormatter,
          ...measure,
        });
      }

      if (measure.type === 'line') {
        lineMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 12) + 1})`,
          formatter: defaultFormatter,
          ...measure,
        });
        columnMeasures.push({
          ...measure,
          opacity: 0,
          hide: true,
          hideDataLabel: true,
          showDot: false,
          formatter: defaultFormatter,
        });
      }
    });

    return { lineMeasures, columnMeasures };
  }, [measures]);
