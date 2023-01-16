import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { defaultMeasuresFormatter } from '@shared/tests/formatter';
import { createCustomPropsTest } from '@shared/tests/utils';
import { complexDataSet } from '../../resources/DemoProps';
import { BarChart } from './BarChart';

const dimensions = [
  {
    accessor: 'name',
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

describe('BarChart', () => {
  createChartRenderTest(BarChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(BarChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(BarChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(BarChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(BarChart, { dimensions: [], measures: [] });
});
