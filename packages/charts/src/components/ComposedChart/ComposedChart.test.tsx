import { render } from '@shared/tests';
import {
  createLoadingPlaceholderTest,
  createOnClickChartTest,
  createOnLegendClickNotCrashTest
} from '@shared/tests/chartUtils';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps.js';
import { ComposedChart } from './index.js';

enum ComposedChartChildrenQuery {
  'area' = 'g.recharts-area-dots',
  'bar' = 'g.recharts-bar-rectangles',
  'line' = 'path'
}

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
    type: 'bar'
  },
  {
    accessor: 'users',
    label: 'Users',
    formatter: (val) => val.toLocaleString(),
    type: 'area'
  },
  {
    accessor: 'volume',
    label: 'Vol.',
    formatter: (val) => `${val} sessions`,
    type: 'line'
  }
];

describe('ComposedChart', () => {
  it('Render chart with data', () => {
    const { asFragment, container } = render(
      <ComposedChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />
    );

    // Check if a single responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(1);

    // Check if containers of charts and associated elements are rendered in the composed chart
    measures.forEach((measure) => {
      const chartContainer = container.querySelector(`g.recharts-${measure.type}`);
      expect(chartContainer).toBeInTheDocument();

      const chartContainerChild = chartContainer.querySelectorAll(ComposedChartChildrenQuery[measure.type]);
      expect(chartContainerChild.length).toBeGreaterThanOrEqual(0);
    });

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  createOnClickChartTest(ComposedChart, { dataset: complexDataSet, dimensions, measures });

  createLoadingPlaceholderTest(ComposedChart, { dimensions: [], measures: [] });

  createOnLegendClickNotCrashTest(ComposedChart, { dataset: complexDataSet, dimensions, measures });

  createCustomPropsTest(ComposedChart, { dimensions: [], measures: [] });
});
