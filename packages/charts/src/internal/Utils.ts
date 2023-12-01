import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import type { IChartMeasure } from '../interfaces/IChartMeasure.js';

export const getCellColors = (element: Record<string, any>, data: Record<string, any>, index: number): string => {
  return (
    element.highlightColor?.(getValueByDataKey(data, element.accessor), element, data) ??
    element.color ??
    `var(--sapChart_OrderedColor_${(index % 11) + 1})`
  );
};

let canvas;

export const getTextWidth = (text) => {
  if (typeof document === 'undefined') {
    return text.length * 7;
  }

  const font = `normal 12pt "72","72full",Arial,Helvetica,sans-serif`;
  // re-use canvas object for better performance
  canvas = canvas || (canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

export const truncateLongLabel = (value: string, length = 13) => {
  if (value?.length > length) {
    return `${value.slice(0, length - 2)}...`;
  }
  return value;
};

export const resolvePrimaryAndSecondaryMeasures = (measures: IChartMeasure[], secondaryAxisDataKey: string) => {
  const secondaryMeasure = measures.find((measure) => measure.accessor === secondaryAxisDataKey);
  const primaryMeasure = measures[0] === secondaryMeasure ? measures[1] ?? measures[0] : measures[0];

  return {
    primaryMeasure,
    secondaryMeasure
  };
};
