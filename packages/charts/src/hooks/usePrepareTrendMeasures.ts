import { useMemo } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';

interface ITrendChartMeasure extends IChartMeasure {
  type: 'line' | 'column';
}

export const usePrepareTrendMeasures = (measures: ITrendChartMeasure[]) =>
  useMemo(() => {
    const lineMeasures = [];
    const columnMeasures = [];

    measures.forEach((measure, index) => {
      if (measure.type === 'line') {
        lineMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          ...measure
        });
      }
      if (measure.type === 'column') {
        columnMeasures.push({
          color: measure.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`,
          ...measure
        });
      }
    });

    return { lineMeasures, columnMeasures };
  }, [measures]);
