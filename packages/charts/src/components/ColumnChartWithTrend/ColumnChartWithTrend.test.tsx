import { fireEvent, render, screen, waitFor } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';
import { createPassThroughPropsTest } from '@shared/tests/utils';

describe('ColumnChart', () => {
  test('Renders with data', async () => {
    const onClick = jest.fn();
    const { container, asFragment } = render(
      <ColumnChartWithTrend
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

    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(2);

    const trendLineChartContainer = container.querySelector('g.recharts-line');
    expect(trendLineChartContainer).toBeInTheDocument();
    const trendLine = trendLineChartContainer.querySelector('path');
    expect(trendLine).not.toBeNull();
    expect(trendLine.getAttribute('d')[0]).toBe('M');

    const columnChartContainer = container.querySelector('g.recharts-bar');
    expect(columnChartContainer).toBeInTheDocument();
    const barContainer = columnChartContainer.querySelectorAll('g.recharts-bar-rectangles');
    expect(barContainer.length).toBeGreaterThanOrEqual(1);
    const singleBars = columnChartContainer.querySelectorAll('g.recharts-bar-rectangle');
    expect(singleBars.length).toBeGreaterThanOrEqual(1);

    fireEvent.click(columnChartContainer);
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.click(trendLineChartContainer);
    expect(onClick).toHaveBeenCalledTimes(2);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Loading placeholder', () => {
    const { container, asFragment } = render(<ColumnChartWithTrend dimensions={[]} measures={[]} />);
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    const trendLineContainer = container.querySelector('g.recharts-line');
    expect(trendLineContainer).toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
