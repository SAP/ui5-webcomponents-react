import { fireEvent, render, screen } from '@shared/tests';
import * as React from 'react';
import { complexDataSet } from '../../resources/DemoProps';
import { LineChart } from './LineChart';
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

describe('LineChart', () => {
  it('Renders with data', () => {
    const { container, asFragment } = render(
      <LineChart dataset={complexDataSet} dimensions={dimensions} measures={measures} style={{ width: '50%' }} />
    );

    // Check if two responsive containers are rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(1);

    // Check if trend line container, trend line and the path of the line is rendered correctly
    const lineChartContainer = container.querySelector('g.recharts-line');
    expect(lineChartContainer).toBeInTheDocument();
    const trendLine = lineChartContainer.querySelector('path');
    expect(trendLine).not.toBeNull();
    expect(trendLine.getAttribute('d')[0]).toBe('M');

    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders with data', async () => {
    const onClick = jest.fn();
    const onLegendClick = jest.fn();
    const { container, asFragment } = render(
      <LineChart
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

    // Check if click in trend line container is working
    fireEvent.click(container.querySelector('g.recharts-line'));
    expect(onClick).toBeCalled();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('loading placeholder', () => {
    const { container, asFragment } = render(<LineChart style={{ width: '30%' }} dimensions={[]} measures={[]} />);

    // Check if no responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(0);

    // Check if no line container is rendered
    const trendLineContainer = container.querySelector('g.recharts-line');
    expect(trendLineContainer).toBeNull();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });

  it('onLegendClick should not crash when invalid handler is provided', () => {
    render(
      <LineChart dataset={complexDataSet} dimensions={dimensions} measures={measures} onLegendClick={'123' as any} />
    );

    expect(() => {
      fireEvent.click(screen.getByText('Users'));
    }).not.toThrow();
  });

  createPassThroughPropsTest(LineChart, { dimensions: [], measures: [] });
});
