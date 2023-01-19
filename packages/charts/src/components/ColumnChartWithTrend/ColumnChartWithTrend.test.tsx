import { fireEvent, render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChartWithTrend } from './ColumnChartWithTrend';

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
    accessor: 'users',
    label: 'Users',
    formatter: (val) => val.toLocaleString(),
    type: 'line'
  },
  {
    accessor: 'sessions',
    label: 'Active Sessions',
    type: 'bar'
  }
];

describe('ColumnChartWithTrend', () => {
  it('Renders with data', () => {
    const { container, asFragment } = render(
      <ColumnChartWithTrend dataset={complexDataSet} dimensions={dimensions} measures={measures} />
    );

    // Check if a single responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(2);

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

  it('Check onClick events', () => {
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

    // Check if click on axis label is working
    const firstXAxisLabel = screen.getByText(/January 2.../);
    fireEvent.click(firstXAxisLabel);
    expect(onClick).toBeCalled();

    // Check if click on legend is working
    const legendContainer = screen.getByText(/Active Sessions/);
    fireEvent.click(legendContainer);
    expect(onLegendClick).toBeCalled();

    // Check if click in column chart container is working
    fireEvent.click(container.querySelector('g.recharts-bar'));
    expect(onClick).toBeCalled();

    // Check if click in trend line container is working
    fireEvent.click(container.querySelector('g.recharts-line'));
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

  createCustomPropsTest(ColumnChartWithTrend, { dimensions: [], measures: [] });
});
