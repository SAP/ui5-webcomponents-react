import merge from 'lodash.merge';
import { useMemo } from 'react';
import { defaultFont } from '../config';

export const useMergedConfig = (x, y) => {
  return useMemo(() => {
    return merge(x, y);
  }, [x, y]);
};

export const formatTooltipLabel = (categoryFormatter, valueFormatter, valueAccessor = 'yLabel') => (
  tooltipItem,
  data
): string => {
  let label = categoryFormatter(data.datasets[tooltipItem.datasetIndex].label) || '';

  if (label) {
    label += ': ';
  }

  label += valueFormatter(tooltipItem[valueAccessor]);
  return label;
};

export const formatTooltipLabelForPieCharts = (categoryFormatter, valueFormatter) => (tooltipItem, data): string => {
  let label = categoryFormatter(data.labels[tooltipItem.index]) || '';

  if (label) {
    label += ': ';
  }
  label += valueFormatter(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
  return label;
};

let canvas;
let textHeight;

export const getTextWidth = (text) => {
  const font = `normal ${defaultFont.size}pt ${defaultFont.family}`;
  // re-use canvas object for better performance
  canvas = canvas || (canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

export const getTextHeight = (font = `normal ${defaultFont.size}pt ${defaultFont.family}`) => {
  // re-use canvas object for better performance
  canvas = canvas || (canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText('M'); // should be around 90% accurate...
  return textHeight || (textHeight = metrics.width);
};

