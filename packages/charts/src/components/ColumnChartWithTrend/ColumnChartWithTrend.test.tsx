import { fireEvent, render, screen } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';
import { createPassThroughPropsTest } from '@shared/tests/utils';

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
    formatter: (val) => val.toLocaleString(),
    type: 'line'
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    type: 'column'
  }
];

describe('ColumnChart', () => {
  it('Renders with data', async () => {
    const onClick = jest.fn();
    const onLegendClick = jest.fn();
    const { container, asFragment } = render(
      <ColumnChartWithTrend
        onLegendClick={onLegendClick}
        onClick={onClick}
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
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

    // Check if click on axis label is working
    const firstXAxisLabel = screen.getByText(/January 2.../);
    fireEvent.click(firstXAxisLabel);
    expect(onClick).toBeCalled();

    // Check if click on legend is working
    const legendContainer = screen.getByText(/Active Sessions/);
    fireEvent.click(legendContainer);
    expect(onLegendClick).toBeCalled();

    // Check if click in column chart container is working
    fireEvent.click(columnChartContainer);
    expect(onClick).toBeCalled();

    // Check if click in trend line container is working
    fireEvent.click(trendLineChartContainer);
    expect(onClick).toBeCalled();

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

  it('onLegendClick should not crash when invalid handler is provided', () => {
    render(
      <ColumnChartWithTrend
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
        onLegendClick={'123' as any}
      />
    );

    expect(() => {
      fireEvent.click(screen.getByText(/Active Sessions/));
    }).not.toThrow();
  });

  createPassThroughPropsTest(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
