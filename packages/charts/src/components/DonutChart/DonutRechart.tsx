import { PieChart } from '../PieChart/PieRechart';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React from 'react';

export interface PieChartProps extends RechartBaseProps {}

export const DonutChart = (props: PieChartProps) => {
  const {
    chartConfig = {
      legendVisible: true,
      legendPosition: 'bottom',
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined
    }
  } = props;

  return (
    <PieChart
      {...props}
      chartConfig={{
        legendVisible: chartConfig.legendVisible,
        legendPosition: chartConfig.legendPosition,
        dataLabel: chartConfig.dataLabel,
        paddingAngle: chartConfig.paddingAngle,
        innerRadius: chartConfig.innerRadius ?? '50%'
      }}
    />
  );
};

DonutChart.displayName = 'DonutChart';
