import React, { FC, forwardRef, useMemo } from 'react';
import { PieChart, PieChartProps } from '../PieChart/PieChart';

const DonutChart: FC<PieChartProps> = forwardRef((props: PieChartProps, ref) => {
  const chartConfig = useMemo(() => {
    return {
      legendPosition: 'bottom',
      paddingAngle: 0,
      innerRadius: '50%',
      ...props.chartConfig
    };
  }, [props.chartConfig]);

  return <PieChart {...props} ref={ref} chartConfig={chartConfig} />;
});

DonutChart.displayName = 'DonutChart';

export { DonutChart };
