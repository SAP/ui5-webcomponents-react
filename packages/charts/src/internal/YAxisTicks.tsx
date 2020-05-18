import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { getTextWidth, truncateLongLabel } from '@ui5/webcomponents-react-charts/lib/Utils';
import React, { FC } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { defaultMaxYAxisWidth } from './defaults';

interface YAxisTicksProps {
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
}

export const YAxisTicks: FC<YAxisTicksProps> = (props: YAxisTicksProps) => {
  const { x, y, payload, config } = props;

  const formattedValue = config.formatter(payload.value);
  let textToDisplay = formattedValue;
  if (getTextWidth(formattedValue) > defaultMaxYAxisWidth) {
    for (let i = `${formattedValue}`.length; i > 0; i--) {
      textToDisplay = truncateLongLabel(formattedValue, i);
      if (getTextWidth(textToDisplay) <= defaultMaxYAxisWidth) {
        break;
      }
    }
  }

  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text fill={ThemingParameters.sapContent_LabelColor} textAnchor="end">
        {textToDisplay}
      </text>
    </g>
  );
};
