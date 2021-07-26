import { screen, render, fireEvent } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { BarChart } from './BarChart';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { createChartRenderTest, createOnClickChartTest } from '@shared/tests/chartUtils';

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

describe('BarChart', () => {
  createChartRenderTest(BarChart, { dataset: complexDataSet, dimensions: dimensions, measures: measures });

  createOnClickChartTest(BarChart, { dataset: complexDataSet, dimensions: dimensions, measures: measures });

  it('loading placeholder', () => {
    const { container, asFragment } = render(<BarChart dimensions={[]} measures={[]} />);

    // Check if no responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    // Check if no column chart container is rendered
    const columnChartContainer = container.querySelector('g.recharts-bar');
    expect(columnChartContainer).toBeNull();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('onLegendClick should not crash when invalid handler is provided', () => {
    render(
      <BarChart dataset={complexDataSet} dimensions={dimensions} measures={measures} onLegendClick={'123' as any} />
    );

    expect(() => {
      fireEvent.click(screen.getByText('Users'));
    }).not.toThrow();
  });

  createPassThroughPropsTest(BarChart, { dimensions: [], measures: [] });
});
