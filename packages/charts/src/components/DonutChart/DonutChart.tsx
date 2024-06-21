'use client';

import { forwardRef } from 'react';
import type { PieChartProps } from '../PieChart/PieChart.js';
import { PieChart } from '../PieChart/PieChart.js';

/**
 * A `DonutChart` is a type of graph that displays data in a circular graph with a cut-out hole in the middle.
 * The pieces of the graph are proportional to the fraction of the whole in each category.
 * A `DonutChart` is basically a `PieChart` with a hole.
 */
const DonutChart = forwardRef<HTMLDivElement, PieChartProps>((props, ref) => {
  const chartConfig: PieChartProps['chartConfig'] = {
    legendPosition: 'bottom',
    paddingAngle: 0,
    innerRadius: '50%',
    ...props.chartConfig
  };

  return <PieChart {...props} ref={ref} chartConfig={chartConfig} />;
});

DonutChart.displayName = 'DonutChart';

export { DonutChart };
