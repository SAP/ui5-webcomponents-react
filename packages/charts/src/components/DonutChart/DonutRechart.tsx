import { PieRechart } from '../PieChart/PieRechart';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React from 'react';

export interface PieChartProps extends RechartBaseProps {}

export function DonutRechart(props: PieChartProps) {
  const {
    chartConfig = {
      legendVisible: true,
      legendPosition: 'bottom',
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined
    }
  } = props as PieChartProps;

  return (
    <PieRechart
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
}
