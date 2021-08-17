import { IChartMeasure } from '../interfaces/IChartMeasure';

let canvas;

export const getTextWidth = (text) => {
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
