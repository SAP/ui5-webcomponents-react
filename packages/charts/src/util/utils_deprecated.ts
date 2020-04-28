import { useMemo } from 'react';
import merge from 'lodash.merge';

export const useMergedConfig = (x, y) => {
  return useMemo(() => {
    return merge(x, y);
  }, [x, y]);
};
// this needs to be a function as we need the `this` of the chart;
export const formatAxisCallback = (formatter) =>
  function (value) {
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
