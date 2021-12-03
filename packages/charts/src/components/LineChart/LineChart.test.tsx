import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { LineChart } from './LineChart';
import { createCustomPropsTest } from '@shared/tests/utils';
import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';

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
    formatter: (val) => val.toLocaleString()
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

describe('LineChart', () => {
  createChartRenderTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(LineChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(LineChart, { dimensions: [], measures: [] });
});
