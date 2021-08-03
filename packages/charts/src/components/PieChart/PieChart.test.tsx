import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { PieChart } from './PieChart';
import {
  createCircleChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createPassThroughPropsTest } from '@shared/tests/utils';

const dimension = {
  accessor: 'name'
};
const measure = {
  accessor: 'users'
};

describe('PieChart', () => {
  createCircleChartRenderTest(PieChart, { dimension, measure, dataset: simpleDataSet });

  createOnClickChartTest(PieChart, { dimension, measure, dataset: simpleDataSet });

  createLoadingPlaceholderTest(PieChart, { measures: {}, dimensions: {}, noLegend: true });

  createOnLegendClickNotCrashTest(PieChart, { dataset: simpleDataSet, dimension, measure });

  createPassThroughPropsTest(PieChart, { dimension: {}, measure: {} });
});
