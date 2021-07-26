import { fireEvent, render, screen } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { ColumnChart } from './ColumnChart';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { createChartRenderTest } from '@shared/tests/chartUtils';

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
  createChartRenderTest(<ColumnChart dataset={complexDataSet} dimensions={dimensions} measures={measures} />);

  it('Check onClick events', () => {
    const onClick = jest.fn();
    const onLegendClick = jest.fn();
    const { asFragment, container } = render(
      <ColumnChart
        onClick={onClick}
        onLegendClick={onLegendClick}
        dataset={complexDataSet}
        dimensions={dimensions}
        measures={measures}
      />
    );

    // Check if click on axis label is working
    const firstYAxisLabel = screen.getByText(/January/);
    fireEvent.click(firstYAxisLabel);
    expect(onClick).toBeCalled();

    // Check if click on legend is working
    const legendContainer = screen.getByText(/Active Sessions/);
    fireEvent.click(legendContainer);
    expect(onLegendClick).toBeCalled();

    // Check if click in column chart container is working
    fireEvent.click(container.querySelector('g.recharts-bar'));
    expect(onClick).toBeCalled();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('loading placeholder', () => {
    const { container, asFragment } = render(<ColumnChart dimensions={[]} measures={[]} />);

    // Check if no responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    // Check if no column chart container is rendered
    const columnChartContainer = container.querySelector('g.recharts-bar');
    expect(columnChartContainer).toBeNull();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('onLegendClick', () => {
    const cb = jest.fn((e) => {
      e.persist();
    });
    render(<ColumnChart dataset={complexDataSet} dimensions={dimensions} measures={measures} onLegendClick={cb} />);
    fireEvent.click(screen.getByText('Users'));
    expect(cb).toBeCalled();
    expect(cb.mock.calls[0][0].detail.dataKey).toEqual('users');
  });

  it('onLegendClick should not crash when invalid handler is provided', () => {
    render(
      <ColumnChart dataset={complexDataSet} dimensions={dimensions} measures={measures} onLegendClick={'123' as any} />
    );

    expect(() => {
      fireEvent.click(screen.getByText('Users'));
    }).not.toThrow();
  });

  createPassThroughPropsTest(ColumnChart, { dimensions: [], measures: [] });
});
