import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { defaultMeasuresFormatter } from '@shared/tests/formatter';
import { createCustomPropsTest } from '@shared/tests/utils';
import { complexDataSet } from '../../resources/DemoProps.js';
import { ColumnChart } from './ColumnChart.js';

const dimensions = [
  {
    accessor: 'name',
    formatter: (d) => `${d} 2019`,
    interval: 0
  }
];
const measures = [
  {
    accessor: 'users',
    label: 'Users',
    formatter: defaultMeasuresFormatter
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    formatter: (val) => `${val} sessions`,
    hideDataLabel: true
  },
  {
    accessor: 'volume',
    label: 'Vol.'
  }
];

describe('ColumnChart', () => {
  createChartRenderTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(ColumnChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(ColumnChart, { dimensions: [], measures: [] });
});
