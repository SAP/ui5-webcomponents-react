import { PieChart } from '../PieChart/PieRechart';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef } from 'react';
import { LineChart } from '../LineChart/LineRechart';

export interface PieChartProps extends RechartBaseProps {}

export const DonutChart = forwardRef((props: PieChartProps, ref) => {
  const {
    chartConfig = {
      legendVisible: true,
      legendPosition: 'bottom',
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined
    }
  } = props;

  DonutChart.displayName = 'DonutChart';

  return (
    <PieChart
      {...props}
      ref={ref}
      chartConfig={{
        legendVisible: chartConfig.legendVisible,
        legendPosition: chartConfig.legendPosition,
        dataLabel: chartConfig.dataLabel,
        paddingAngle: chartConfig.paddingAngle,
        innerRadius: chartConfig.innerRadius ?? '50%'
      }}
    />
  );
});
