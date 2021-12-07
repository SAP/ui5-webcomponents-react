import * as React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { DonutChart } from './DonutChart';
import {
  createCircleChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';

const dimension = {
  accessor: 'name'
};
const measure = {
  accessor: 'users'
};

describe('DonutChart', () => {
  createCircleChartRenderTest(DonutChart, { dimension, measure, dataset: simpleDataSet });

  createOnClickChartTest(DonutChart, { dimension, measure, dataset: simpleDataSet });

  createLoadingPlaceholderTest(DonutChart, { measure: {}, dimension: {} });

  createOnLegendClickNotCrashTest(DonutChart, { dataset: simpleDataSet, dimension, measure });

  createCustomPropsTest(DonutChart, { dimension: {}, measure: {} });
});
