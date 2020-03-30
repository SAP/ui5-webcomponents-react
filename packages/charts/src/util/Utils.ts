import merge from 'lodash.merge';
import { useMemo } from 'react';
import { defaultFont } from '../config';
import { XAxisTicks } from '../internal/CustomElements';

export const useMergedConfig = (x, y) => {
  return useMemo(() => {
    return merge(x, y);
  }, [x, y]);
};

// this needs to be a function as we need the `this` of the chart;
export const formatAxisCallback = (formatter) =>
  function(value) {
    // @ts-ignore
    const currentDataset = this.chart.data.datasets[0];
    return formatter(value, currentDataset);
  };

export const formatDataLabel = (formatter) => (val, context) => {
  return formatter(val, context.dataset, context);
};

export const formatTooltipLabel = (categoryFormatter, valueFormatter, valueAccessor = 'yLabel') => (
  tooltipItem,
  data
): string => {
  const currentDataset = data.datasets[tooltipItem.datasetIndex];
  let label = categoryFormatter(currentDataset.label, currentDataset, tooltipItem) || '';

  if (label) {
    label += ': ';
  }

  label += valueFormatter(tooltipItem[valueAccessor], currentDataset, tooltipItem);
  return label;
};

export const formatTooltipLabelForPieCharts = (categoryFormatter, valueFormatter) => (tooltipItem, data): string => {
  const currentDataset = data.datasets[tooltipItem.datasetIndex];
  let label = categoryFormatter(data.labels[tooltipItem.index], currentDataset, tooltipItem) || '';

  if (label) {
    label += ': ';
  }
  label += valueFormatter(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index], currentDataset, tooltipItem);
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

let previousX = 0;
let secondElementX = 0;
export const renderAxisTicks = (axisProps, xAxisFormatter, xAxisUnit) => {
  const { payload } = axisProps;
  const prevX = previousX;
  const index = payload.index ?? axisProps.index;
  switch (index) {
    case 0:
      previousX = payload.coordinate;
      return XAxisTicks(axisProps, xAxisFormatter, xAxisUnit, secondElementX - payload.coordinate <= 100);
    case 1:
      secondElementX = payload.coordinate;
      previousX = payload.coordinate;
      return XAxisTicks(axisProps, xAxisFormatter, xAxisUnit, payload.coordinate - prevX <= 100);
    default:
      previousX = payload.coordinate;
      return XAxisTicks(axisProps, xAxisFormatter, xAxisUnit, payload.coordinate - prevX <= 100);
  }
};
