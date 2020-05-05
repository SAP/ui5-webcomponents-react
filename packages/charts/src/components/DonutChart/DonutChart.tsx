import React, { FC, forwardRef, useMemo } from 'react';
import { PieChart, PieChartProps } from '../PieChart/PieChart';

/**
 * <code>import { DonutChart } from '@ui5/webcomponents-react-charts/lib/next/DonutChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
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
