import React, { ComponentType } from 'react';
import { render } from '@shared/tests';
import { fireEvent, screen } from '@shared/tests/index';

enum ChartQuery {
  'BarChart' = 'g.recharts-bar',
  'BulletChart' = 'g.recharts-bar',
  'ColumnChart' = 'g.recharts-bar',
  'ComposedChart' = 'g.recharts-bar',
  'DonutChart' = 'g.recharts-pie',
  'PieChart' = 'g.recharts-pie',
  'LineChart' = 'g.recharts-line',
  'MicroBarChart' = 'div[class^=MicroBarChart-container]',
  'RadarChart' = 'g.recharts-radar',
  'RadialChart' = 'g.recharts-area',
  'ScatterChart' = 'g.recharts-scatter'
}

enum ChartChildrenQuery {
  'BarChart' = 'g.recharts-bar-rectangles',
  'BulletChart' = 'g.recharts-bar-rectangles',
  'ColumnChart' = 'g.recharts-bar-rectangles',
  'ComposedChart' = 'g.recharts-bar-rectangles',
  'DonutChart' = 'g.recharts-pie-sector',
  'PieChart' = 'g.recharts-pie-sector',
  'LineChart' = 'path',
  'MicroBarChart' = 'div[class^=MicroBarChart-valueBar]',
  'RadarChart' = 'g.recharts-radar-polygon',
  'RadialChart' = 'g.recharts-radial-bar-sectors',
  'ScatterChart' = 'path'
}

export const createChartRenderTest = (Component: ComponentType<any>, props: {}) => {
  it('Render chart with data', () => {
    const { asFragment, container } = render(<Component {...props} />);

    const chartQueryType = ChartQuery[Component.displayName];
    const chartChildrenType = ChartChildrenQuery[Component.displayName];

    // Check if a single responsive container is rendered
    const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
    expect(responsiveContainers.length).toBe(1);

    // Check if a single chart is rendered
    const chartContainer = container.querySelector(chartQueryType);
    expect(chartContainer).toBeInTheDocument();
    const chartChildrenContainer = chartContainer.querySelectorAll(chartChildrenType);
    expect(chartChildrenContainer.length).toBeGreaterThanOrEqual(1);

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });
};

export const createOnClickChartTest = (Component: ComponentType<any>, props: Record<string, any>) => {
  it('Check onClick events', () => {
    const onClick = jest.fn();
    const onLegendClick = jest.fn((e) => {
      e.persist();
    });
    const { asFragment, container } = render(<Component onClick={onClick} onLegendClick={onLegendClick} {...props} />);

    const chartQueryType = ChartQuery[Component.displayName];
    const chartChildrenType = ChartChildrenQuery[Component.displayName];

    // Check if click on axis label is working
    if (Component.displayName !== 'RadialChart' && Component.displayName !== 'ScatterChart') {
      const firstYAxisLabel = screen.getByText(/January/);
      fireEvent.click(firstYAxisLabel);
      expect(onClick).toBeCalled();
    }

    // Check if click in chart container is working
    fireEvent.click(container.querySelector(chartQueryType));
    expect(onClick).toBeCalled();

    // Check if click on chart element is working
    fireEvent.click(container.querySelector(chartChildrenType));
    expect(onClick).toBeCalled();

    if (!props.noLegend) {
      const legendElement =
        Component.displayName === 'DonutChart' || Component.displayName === 'PieChart' ? /January/ : 'Users';
      fireEvent.click(screen.getByText(legendElement));
      expect(onLegendClick).toBeCalled();
      expect(onLegendClick.mock.calls[0][0].detail.dataKey).toEqual('users');
    }

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });
};

export const createLoadingPlaceholderTest = (Component: ComponentType<any>, props: {}) => {
  it('Loading placeholder', () => {
    const { asFragment, container } = render(<Component {...props} />);

    const chartQueryType = ChartQuery[Component.displayName];

    if (Component.displayName !== 'ColumnChartWithTrend') {
      // Check if no responsive container is rendered
      const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
      expect(responsiveContainers.length).toBe(0);

      // Check if no column chart container is rendered
      const columnChartContainer = container.querySelector(chartQueryType);
      expect(columnChartContainer).toBeNull();
    }

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });
};

export const createOnLegendClickNotCrashTest = (Component: ComponentType<any>, props: {}) => {
  it('onLegendClick should not crash when invalid handler is provided', () => {
    const { asFragment } = render(<Component onLegendClick={'123' as any} {...props} />);

    const legendElement =
      Component.displayName === 'DonutChart' || Component.displayName === 'PieChart' ? /January/ : 'Users';

    expect(() => {
      fireEvent.click(screen.getByText(legendElement));
    }).not.toThrow();

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });
};
