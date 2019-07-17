import merge from 'deepmerge';
import { defaultFont } from '../config';

export const getCurrentChartElementFromContext = (context) => {
  const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
  return datasetMeta.data[context.dataIndex];
};

const emptyTarget = (value) => (Array.isArray(value) ? [] : {});

const clone = (value, options) => merge(emptyTarget(value), value, options);

const combineMerge = (target, source, options) => {
  const destination = target.slice();

  source.forEach((e, i) => {
    if (typeof destination[i] === 'undefined') {
      const cloneRequested = options.clone !== false;
      const shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? clone(e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = merge(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
};

export const mergeConfig = (x, y, options?) => merge(x, y, { ...options, arrayMerge: combineMerge });

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
