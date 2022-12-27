import {
  createCircleChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';
import { simpleDataSet } from '../../resources/DemoProps';
import { PieChart } from './PieChart';

const dimension = {
  accessor: 'name'
};
const measure = {
  accessor: 'users'
};

describe('PieChart', () => {
  createCircleChartRenderTest(PieChart, { dimension, measure, dataset: simpleDataSet });

  createOnClickChartTest(PieChart, { dimension, measure, dataset: simpleDataSet });

  createLoadingPlaceholderTest(PieChart, { measure: {}, dimension: {} });

  createOnLegendClickNotCrashTest(PieChart, { dataset: simpleDataSet, dimension, measure });

  createCustomPropsTest(PieChart, { dimension: {}, measure: {} });
});
