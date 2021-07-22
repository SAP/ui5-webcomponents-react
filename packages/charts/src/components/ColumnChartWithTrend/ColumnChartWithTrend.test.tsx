import { fireEvent, render } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';
import { createPassThroughPropsTest } from '@shared/tests/utils';

describe('ColumnChart', () => {
  it('Renders with data', async () => {
    const onClick = jest.fn();
    const onLegendClick = jest.fn();
    const { container, asFragment } = render(
      <ColumnChartWithTrend
        onLegendClick={onLegendClick}
        onClick={onClick}
        dataset={complexDataSet}
        dimensions={[
          {
            accessor: 'name',
            formatter: (d) => `${d} 2019`,
            interval: 0
          }
        ]}
        measures={[
          {
            accessor: 'users',
            label: 'Users',
            formatter: (val) => val.toLocaleString(),
            type: 'line'
          },
          {
            accessor: 'sessions',
            label: 'Active Sessions',
            type: 'column'
          }
        ]}
      />
    );

    // Check if two responsive containers are rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(2);

    // Check if trend line container, trend line and the path of the line is rendered correctly
    const trendLineChartContainer = container.querySelector('g.recharts-line');
    expect(trendLineChartContainer).toBeInTheDocument();
    const trendLine = trendLineChartContainer.querySelector('path');
    expect(trendLine).not.toBeNull();
    expect(trendLine.getAttribute('d')[0]).toBe('M');

    // Check if column chart container, bars and single bars are rendered
    const columnChartContainer = container.querySelector('g.recharts-bar');
    expect(columnChartContainer).toBeInTheDocument();
    const barContainer = columnChartContainer.querySelectorAll('g.recharts-bar-rectangles');
    expect(barContainer.length).toBeGreaterThanOrEqual(1);
    const singleBars = columnChartContainer.querySelectorAll('g.recharts-bar-rectangle');
    expect(singleBars.length).toBeGreaterThanOrEqual(1);

    // Check if click on legend is working
    const legendContainer = responsiveContainers[1].querySelector('li.recharts-legend-item');
    fireEvent.click(legendContainer);
    expect(onLegendClick).toHaveBeenCalledTimes(1);

    // Check if click in column chart container is working
    fireEvent.click(columnChartContainer);
    expect(onClick).toHaveBeenCalledTimes(2);

    // Check if click in trend line container is working
    fireEvent.click(trendLineChartContainer);
    expect(onClick).toHaveBeenCalledTimes(3);

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('Loading placeholder', () => {
    const { container, asFragment } = render(<ColumnChartWithTrend dimensions={[]} measures={[]} />);

    // Check if no responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    // Check if no trend line container is rendered
    const trendLineContainer = container.querySelector('g.recharts-line');
    expect(trendLineContainer).toBeNull();

    // Check if no column chart container is rendered
    const columnChartContainer = container.querySelector('g.recharts-bar');
    expect(columnChartContainer).toBeNull();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
