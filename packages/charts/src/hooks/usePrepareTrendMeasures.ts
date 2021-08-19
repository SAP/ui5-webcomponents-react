import { useMemo } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';

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
          ...measure
        });
      }

      if (measure.type === 'line') {
        lineMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          ...measure
        });
        columnMeasures.push({
          ...measure,
          opacity: 0,
          hideDataLabel: true,
          showDot: false
        });
      }
    });

    dataset?.forEach((data) => {
      const reducedLineValues = {};

      lineMeasures.forEach((line) => {
        reducedLineValues[line.accessor] = 0;
      });

      columnDataset.push({
        ...data,
        ...reducedLineValues
      });
    });
    return { lineMeasures, columnMeasures, columnDataset };
  }, [measures]);
