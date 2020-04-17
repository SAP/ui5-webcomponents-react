import React, { FC, forwardRef } from 'react';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { PieChart } from '../PieChart/PieChart';

type PieChartProps = RechartBaseProps;

/**
 * <code>import { DonutChart } from '@ui5/webcomponents-react-charts/lib/next/DonutChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const DonutChart: FC<PieChartProps> = forwardRef((props: PieChartProps, ref) => {
  const {
    chartConfig = {
      legendPosition: 'bottom',
      paddingAngle: 0
    }
  } = props;

  return (
    <PieChart
      {...props}
      ref={ref}
      chartConfig={{
        legendPosition: chartConfig.legendPosition,
        paddingAngle: chartConfig.paddingAngle,
        innerRadius: chartConfig.innerRadius ?? '50%'
      }}
    />
  );
});

DonutChart.displayName = 'DonutChart';

export { DonutChart };
