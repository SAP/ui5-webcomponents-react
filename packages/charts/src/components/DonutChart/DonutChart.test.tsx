import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { DonutChart } from './DonutChart';
import {
  createCircleChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';

const dimension = {
  accessor: 'name'
};
const measure = {
  accessor: 'users'
};

describe('DonutChart', () => {
  createCircleChartRenderTest(DonutChart, { dimension, measure, dataset: simpleDataSet });

  createOnClickChartTest(DonutChart, { dimension, measure, dataset: simpleDataSet });

  createLoadingPlaceholderTest(DonutChart, { measures: {}, dimensions: {} });

  createOnLegendClickNotCrashTest(DonutChart, { dataset: simpleDataSet, dimension, measure });
});
