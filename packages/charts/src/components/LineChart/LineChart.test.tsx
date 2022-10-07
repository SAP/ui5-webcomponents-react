import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { defaultMeasuresFormatter } from '@shared/tests/formatter';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { LineChart } from './LineChart';

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

describe('LineChart', () => {
  createChartRenderTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(LineChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(LineChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(LineChart, { dimensions: [], measures: [] });
});
