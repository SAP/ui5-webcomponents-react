import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { BulletChart } from './BulletChart';

const dimensions = [
  {
    accessor: 'name',
    formatter: (d) => `${d} 2019`,
    interval: 0
  }
];
const measures = [
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    type: 'primary'
  },
  {
    accessor: 'users',
    label: 'Users',
    formatter: (val) => val.toLocaleString(),
    type: 'comparison'
  },
  {
    accessor: 'volume',
    label: 'Vol.',
    formatter: (val) => `${val} sessions`,
    type: 'additional'
  }
];

describe('BulletChart', () => {
  createChartRenderTest(BulletChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(BulletChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(BulletChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(BulletChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(BulletChart, { dimensions: [], measures: [] });
});
