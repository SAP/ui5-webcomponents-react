import { ScatterChart } from '@ui5/webcomponents-react-charts/dist/ScatterChart';
import * as React from 'react';
import { scatterComplexDataSet } from '../../resources/DemoProps';
import {
  createChartRenderTest,
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';

const measures = [
  {
    accessor: 'users',
    label: 'Number',
    axis: 'x'
  },
  {
    accessor: 'sessions',
    label: 'Sessions',
    axis: 'y'
  },
  {
    accessor: 'volume',
    axis: 'z'
  }
];

describe('Scatter Chart', () => {
  createChartRenderTest(ScatterChart, { dataset: scatterComplexDataSet, measures });

  createOnClickChartTest(ScatterChart, { dataset: scatterComplexDataSet, measures, noLegend: true });

  createOnLegendClickNotCrashTest(ScatterChart, { dataset: scatterComplexDataSet, measures });

  createLoadingPlaceholderTest(ScatterChart, { measures: [] });

  createCustomPropsTest(ScatterChart, { dataset: scatterComplexDataSet, measures });
});
