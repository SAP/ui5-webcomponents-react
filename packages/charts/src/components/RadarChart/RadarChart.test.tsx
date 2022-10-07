import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { RadarChart } from './RadarChart';

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

describe('RadarChart', () => {
  createChartRenderTest(RadarChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(RadarChart, { dimensions: [], measures: [] });

  createOnClickChartTest(RadarChart, { dataset: complexDataSet, dimensions, measures });

  createOnLegendClickNotCrashTest(RadarChart, { dataset: complexDataSet, dimensions, measures });

  createOnClickChartTest(RadarChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(RadarChart, { dataset: complexDataSet, dimensions, measures });
});
