import React from 'react';
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

export const createChartRenderTest = (component: React.ReactElement) => {
  it('Render chart', () => {
    const { asFragment, container } = render(component);

    // @ts-ignore
    if (component.type?.render?.displayName !== 'ColumnChartWithTrend') {
      // Check if a single responsive container is rendered
      const responsiveContainers = container.querySelectorAll('div.recharts-responsive-container');
      expect(responsiveContainers.length).toBe(1);

      // @ts-ignore
      const chartQueryType = ChartQuery[component.type?.render?.displayName];
      // @ts-ignore
      const chartChildrenType = ChartChildrenQuery[component.type?.render?.displayName];

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
