import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChart } from './ColumnChart';
import { createPassThroughPropsTest } from '@shared/tests/utils';
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

describe('ColumnChart', () => {
  createChartRenderTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(ColumnChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(ColumnChart, { dataset: complexDataSet, dimensions, measures });

  createPassThroughPropsTest(ColumnChart, { dimensions: [], measures: [] });
});
