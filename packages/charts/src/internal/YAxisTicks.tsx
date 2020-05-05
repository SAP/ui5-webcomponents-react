import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { truncateLongLabel } from '@ui5/webcomponents-react-charts/lib/Utils';
import React, { FC } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { SecondaryDimensionTicksYAxis } from './SecondaryDimensionYAxisTick';

interface YAxisTicksProps {
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
  level?: number;
}

export const YAxisTicks: FC<YAxisTicksProps> = (props: YAxisTicksProps) => {
  const { x, y, payload, config, level = 0 } = props;

  if (level > 0) {
    return <SecondaryDimensionTicksYAxis {...props} />;
  }
  const formattedValue = config.formatter(payload.value);
  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text fill={ThemingParameters.sapContent_LabelColor} textAnchor="end">
        {truncateLongLabel(formattedValue)}
      </text>
    </g>
  );
};
