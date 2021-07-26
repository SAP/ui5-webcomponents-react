import React, { ComponentType } from 'react';
import { render } from '@shared/tests';

enum ChartQuery {
  'BarChart' = 'g.recharts-bar',
  'ColumnChart' = 'g.recharts-bar',
  'LineChart' = 'g.recharts-line'
}

enum ChartChildrenQuery {
  'ColumnChart' = 'g.recharts-bar-rectangles',
  'BarChart' = 'g.recharts-bar-rectangles',
  'LineChart' = 'path'
}

export const createChartRenderTest = (Component: ComponentType<any>, props: {}) => {
  test('Render chart with data', () => {
    const { asFragment, container } = render(<Component {...props} />);

    if (Component.displayName !== 'ColumnChartWithTrend') {
      // Check if a single responsive container is rendered
      console.log(container.querySelectorAll('div.recharts-responsive-container'));
      const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
      expect(responsiveContainers.length).toBe(1);

      const chartQueryType = ChartQuery[Component.displayName];
      const chartChildrenType = ChartChildrenQuery[Component.displayName];

      // Check if a single chart is rendered
      const chartContainer = container.querySelector(chartQueryType);
      expect(chartContainer).toBeInTheDocument();
      const chartChildrenContainer = chartContainer.querySelectorAll(chartChildrenType);
      expect(chartChildrenContainer.length).toBeGreaterThanOrEqual(1);
      const children = chartContainer.querySelectorAll(chartChildrenType);
      expect(children.length).toBeGreaterThanOrEqual(1);
    }

    // Check if snapshot matches render
    expect(asFragment()).toMatchSnapshot();
  });
};
